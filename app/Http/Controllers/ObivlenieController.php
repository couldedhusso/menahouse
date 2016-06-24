<?php namespace App\Http\Controllers;
// require base_path('vendor/autoload.php');

use App\Http\Requests;
use App\Images ;
use App\Categorie ;
use App\Obivlenie ;
use App\User;
use App\Thumbnail;
use App\Bookmarked;
use Menahouse\CustomHelper;

use Intervention\Image\Facades\Image;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Request;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\View;

use Elasticsearch;
use Elasticsearch\Client;
use Illuminate\Support\Str;

use Auth ;
use DB;
use Storage;

use Menahouse\ElasticSearchEngine;
use Redirect;


class ObivlenieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    private $searchresults ;

    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*
          la class contien differentes fucntion
          par exemple la creation de repertoires getStorageDirectory
          la geolocation : getResponseRequest
        */

        //TODO : Ajout les column addres et vicota_patolka a la table obivlenie
        $user_id = Auth::user()->id ;
        $indexmodel = new ElasticSearchEngine;
        $Helper = new CustomHelper;
        $StoragePath = $Helper->getStorageDirectory();
        $address =  Input::get('address');

        $geo = $Helper->yandexGeocoding($address);

        $district = $Helper->getDistritcs($geo['address'][0]);

        $ar = explode(" ", $geo['metro'][0]);
        $metro = '';
        foreach ($ar as $key => $value) {
          if ($ar[$key] != 'метро') {
            $metro = $metro.' '.$value;
          }
        }

        $obivlenie = obivlenie::create([
            // 'adressa' => $adressa,
            'metro' => trim($metro),
            'gorod' =>  Input::get('submit-location'),
            'ulitsa' => $address,
            /*'dom' => Input::get('dom'),
            'address' => $address,
            'vicota_patolka' => Input::get('roof')
            */
            'type_nedvizhimosti' => Input::get('submit-property-type'),
            'tekct_obivlenia' => Input::get('submit-description'),
            'kolitchestvo_komnat' => Input::get('submit-room'),
            'etajnost_doma' => Input::get('submit-etajnost_doma') ,
            'zhilaya_ploshad' => Input::get('zhilaya_ploshad') ,
            'obshaya_ploshad' => Input::get('obshaya_ploshad') ,
            'ploshad_kurhni' => Input::get('ploshad_kurhni') ,
            'rayon' => $district,
            'roof' => Input::get('roof'),
            'etazh' => Input::get('submit-etazh'),
            'san_usel' => Input::get('submit-san-usel'),
            'title' => Input::get('title'),
            'price' => Input::get('predpolozhitelnaya_tsena') ,
            'opicanie' => Input::get('submit-description'),
            'status' => Input::get('submit-status'),
            'tseli_obmena' => Input::get('submit-tseli-obmena'),
            'mestopolozhenie_obmena' => Input::get('mestopolozhenie_obmena'),
            'doplata' => Input::get('doplata'),
            'numberclick' => 0,
          //  'predpolozhitelnaya_tsena' => Input::get('predpolozhitelnaya_tsena'),
            'user_id' => $user_id,
        ]);

        // $thumbnailName = $obivlenie->id ;
        $madeThumnail = false ;
        foreach(Request::file('file-upload') as $imgvalue) {

               $filename = Str::random(32).'.'.$imgvalue->guessClientExtension();
              // $filePath = 'dev/images/pics/' .$filename;

               if( $imgvalue->isValid() ){
                // dd($imgvalue);

                   $img = new Images ;
                   $img = $obivlenie->images()->create(array('path' => $filename));

                   $imgvalue->move($StoragePath["storage"] , $filename);

                  //  $imgvalue->move(public_path().'/storage/pictures' , $filename);
                   $obivlenie->images()->save($img);

                   if (! $madeThumnail){
                       $thumbnailName = $obivlenie->id.'.'.$imgvalue->guessClientExtension();

                       $ThumbNail = ThumbNail::create([
                         'obivlenie_id' => $obivlenie->id
                       ]);

                       $thumbImag = new Images;
                       $thumbImag = $ThumbNail->images()->create(array('path' => $thumbnailName));

                       // $imgvalue->copy($StoragePath["thumbs"] , $filename);
                       File::copy($StoragePath["storage"].'/'.$filename, $StoragePath["thumbs"].'/'.$thumbnailName);
                       $ThumbNail->images()->save($thumbImag);

                       $madeThumnail = true ;
                   }

                    // indexer les images de la publication dans elasticsearch
                  //  $indexmodel->ModelMapping($imgParam);
               }
          }

          // indexer  la publication dans elasticsearch
         $params = [
              'index' => 'menahouse',
              'type' => 'obivlenie',
              'id' => $obivlenie->id,
              'body' =>[
                'id' => $obivlenie->id,
                'metro' => $obivlenie->metro,
                'gorod' =>  $obivlenie->gorod,
                'ulitsa' => $obivlenie->ulitsa,
                'type_nedvizhimosti' => $obivlenie->type_nedvizhimosti,
                'rayon' => $obivlenie->rayon,
                'tekct_obivlenia' => $obivlenie->tekct_obivlenia,
                'kolitchestvo_komnat' => $obivlenie->kolitchestvo_komnat,
                'etajnost_doma' => $obivlenie->etajnost_doma,
                'zhilaya_ploshad' => $obivlenie->zhilaya_ploshad,
                'obshaya_ploshad' => $obivlenie->obshaya_ploshad,
                'ploshad_kurhni' => $obivlenie->ploshad_kurhni,
                'etazh' => $obivlenie->etazh,
                'san_usel' => $obivlenie->san_usel,
                'price' => $obivlenie->price,
                // 'opicanie' => $obivlenie->opicanie,
                // 'status' => 'availabe',
                'user_id' => $user_id,
                'roof' => $obivlenie->roof,
                'title' => $obivlenie->title,
                'status' => $obivlenie->status,
                'tseli_obmena' => $obivlenie->tseli_obmena,
                'mestopolozhenie_obmena' => $obivlenie->mestopolozhenie_obmena,
                'doplata' => $obivlenie->doplata
              ]
          ];

         $indexmodel->ModelMapping($params);

          // tout est ok nous retourner une a la page des publications
          return Redirect('dashboard/advertisements');
    }

    public function resultsSearch(){
        if ( count($this->searchresults) == 0 ) {
           $elasticsearcher = new ElasticSearchEngine ;
           $term["gorod"] = "Москва";
           $this->searchresults = $elasticsearcher->getIndexedElements($term);
        }
        return json_encode($this->searchresults );

    }

    public function sortResult(){

      $paramSearch = Input::all();

      dd($paramSearch);


      $sorting = Input::get('sorting');
      switch ($sorting) {
          case 2:
            $form_sorting = 'obshaya_ploshad';
            break;
          case 3:
              $form_sorting = 'created_at';
              break;
          default:
            $form_sorting = 'price';
            break;
      }

      $term = [];
      foreach ($paramSearch as $key => $value) {
        if (($key !== 'obshaya_ploshad') AND ($key !== '_token') ){
            $term +=  [$key => $value ];
        }
      }

      if (!empty($paramSearch['obshaya_ploshad'])) {
        $paramSearchEngine = ["term" => $term, "range" => $paramSearch['obshaya_ploshad'] ];
      } else {
        $paramSearchEngine = ["term" => $term];
      }

      dd($paramSearchEngine);

      // $houses = DB::table('obivlenie');




      if (!empty(Input::get('type'))) {
        $houses = Obivlenie::where('type_nedvizhimosti', '=', Input::get('type'))
                      ->orderBy($form_sorting, 'desc')
                      ->get();

      } elseif (!empty(Input::get('number_of_rooms'))) {
        $houses = Obivlenie::where('kolitchestvo_komnat', '=', Input::get('number_of_rooms'))
                      ->orderBy($form_sorting, 'desc')
                      ->get();

      } else {
          $form_sale_city = Input::get('form-sale-city');
          $form_sale_property_type = Input::get('form-sale-property-type');
          if (!empty($form_sale_property_type)) {
              $houses = Obivlenie::where('gorod', '=', $form_sale_city)
                            ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                            ->orderBy($form_sorting, 'desc')
                            ->get();
          } else {
            $houses = Obivlenie::where('gorod', '=', $form_sale_city)
                          ->orderBy($form_sorting, 'desc')
                          ->get();
          }
      }

      $foundelemts = $houses->count();
      return View('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));

    }

    public function searchEngine(Request $request){

      //create a new instance of Elasticsearch to performing search
      $elasticsearcher = new ElasticSearchEngine ;

      $gorod = Input::get('form-sale-city') ;
      $form_sale_district = Input::get('form-sale-district') ;
      $form_sale_property_type  = Input::get('form-sale-property-type') ;
      $form_sale_number_room = Input::get('form-sale-number-room');
      $form_sale_surface = Input::get('form-sale-surface');

      $form_sale_exchange = Input::get('form-sale-exchange') ;
      $form_sale_exchange_place = Input::get('form-sale-exchange-place');
      $form_sale_deal = Input::get('form-sale-deal');


      $term = [];
      $range = [];
      $paramSearch = [];


      if ( !empty($gorod) ) {
      //   $gorod = Input::get('form-sale-city');
         $term["gorod"] = $gorod;
        //  array_push($paramSearch, $gorod);
         $paramSearch["gorod"] = $gorod;
      } else{
      //   $gorod = "Москва";
         $term["gorod"] = "Москва";
         $paramSearch["gorod"] = "Москва";
      }

      // verify if parameters are not empty
      if (!empty($form_sale_district)) {
          if ($form_sale_district !== "0") {
            //
            $term += ["rayon" => $form_sale_district ];
            $paramSearch["rayon"] = $form_sale_district;
            // array_push($paramSearch, $form_sale_district);
          }
      }

      if (!empty($form_sale_property_type)) {
        //
          $term += ["type_nedvizhimosti" => $form_sale_property_type ];
          $paramSearch["type_nedvizhimosti"] = $form_sale_property_type;
          // array_push($paramSearch, $form_sale_property_type );
      }

      if (!empty($form_sale_number_room)) {
        //
          $term += ["kolitchestvo_komnat" => $form_sale_number_room ];
          $paramSearch["kolitchestvo_komnat"] = $form_sale_number_room;
          // array_push($paramSearch, $form_sale_number_room );
      }

      // if (!empty($form_sale_district)) {
      //   //
      //     $term += ["tseli_obmena" => $form_sale_exchange ];
      //     $paramSearch["tseli_obmena"] = $form_sale_exchange;
      //     // array_push($paramSearch, $form_sale_exchange );
      // }
      //
      // if (!empty($form_sale_exchange_place)) {
      //   //
      //     $term += ["mestopolozhenie_obmena" => $form_sale_exchange_place];
      //     $paramSearch["mestopolozhenie_obmena"] = $form_sale_exchange_place;
      //     // array_push($paramSearch, $form_sale_exchange_place );
      // }

      if (!empty($form_sale_deal)) {
        //
          $term += ["status" => $form_sale_deal];
          $paramSearch["status"] = $form_sale_deal;
          // array_push($paramSearch, $form_sale_deal );
      }


      // $term and $range
      if (!empty($form_sale_surface)) {
        switch ($form_sale_surface) {
          case '2':
            $range = ["gt" => 70, "lt"=> 90];
            break;
          case '3':
            $range = ["gt" => 90 , "lt"=> 110];
            break;
          case '4':
            $range = ["gt" => 110];
            break;
          default:
            $range = ["gt" =>30 , "lt"=> 70 ];
            break;
        }

        $paramSearch["obshaya_ploshad"] = $range;
      }

      if (count($range) >= 1) {
        $paramSearchEngine = ["term" => $term, "range" => $range ];
      } else {
        $paramSearchEngine = ["term" => $term];
      }

      $houses = $elasticsearcher->getIndexedElements($paramSearchEngine);
      $foundelemts = count($houses);

      // foreach ($paramSearch as $key => $value) {
      //   $params += array($key => $value);
      // }
      // $paramSearch = $params;

      // dd($paramSearch);

      return View('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $indexmodel = new ElasticSearchEngine;
      $Helper = new CustomHelper;
      $StoragePath = $Helper->getStorageDirectory();

      $excludeKeyValues = array("address", "file-upload", "_token");

      $address =  Input::get('address');
      $updateparams = [];

      if (!empty($address)) {
          $geo = $Helper->yandexGeocoding($address);
          $updateparams = array('rayon' => $Helper->getDistritcs($geo['address'][0]) );
          $ar = explode(" ", $geo['metro'][0]);
          $metro = '';
          foreach ($ar as $key => $value) {
            if ($ar[$key] != 'метро') {
              $metro = $metro.' '.$value;
            }
          }
          $updateparams += array('metro' => trim($metro) );
      }

      $inputall = Input::all();

      foreach ($inputall as $key => $value) {
        if (!in_array($key, $excludeKeyValues) AND (!empty($value))) {
          $updateparams += array( $key => $value );
        }
      }

      $house = Obivlenie::where('id', '=', $updateparams['id'])->first();

      foreach ($updateparams as $key => $value) {
        $house[$key] = $value ;
      }
      $house->save();

      // $house = Obivlenie::where('id', '=', $updateparams['id'])->first();
      // $house->update($updateparams);

      $madeThumnail = false ;
      $pictures = Request::file('file-upload');

      if (count($pictures) > 1) {
        $affectedRows = Images::where('imageable_id', '=', $updateparams['id'])->delete();
        foreach(Request::file('file-upload') as $imgvalue) {

               $filename = Str::random(32).'.'.$imgvalue->guessClientExtension();
              // $filePath = 'dev/images/pics/' .$filename;

               if( $imgvalue->isValid() ){
                // dd($imgvalue);

                   $img = new Images ;
                   $img = $house->images()->create(array('path' => $filename));

                   $imgvalue->move($StoragePath["storage"] , $filename);
                   $house->images()->save($img);

                   if (! $madeThumnail){
                       $thumbnailName = $updateparams['id'].'.'.$imgvalue->guessClientExtension();

                       $ThumbNail = ThumbNail::where('obivlenie_id', '=', $updateparams['id'])->delete();
                       $ThumbNail = ThumbNail::create([
                         'obivlenie_id' => $updateparams['id']
                       ]);

                       $thumbImag = new Images;
                       $thumbImag = $ThumbNail->images()->create(array('path' => $thumbnailName));

                       File::copy($StoragePath["storage"].'/'.$filename, $StoragePath["thumbs"].'/'.$thumbnailName);
                       $ThumbNail->images()->save($thumbImag);

                       $madeThumnail = true ;
                   }
               }
          }
      }

      $response = $indexmodel->updateIndexedElement($updateparams);

      // tout est ok nous retourner une a la page des publications
      return Redirect('dashboard/advertisements');
    }
    public function getAllProperties(){

        $paramSearch = array('gorod' => 'Москва');
        $houses = Obivlenie::where('gorod', '=', 'Москва')->get();

    $foundelemts = $houses->count();

    return View('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));

    }

    /**
     * get all resources in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getCatalogue(Request  $request)
    {

        $paramSearch = Input::all();

          $form_sale_city = Input::get('form-sale-city');
          $form_sale_property_type = Input::get('form-sale-property-type');

          if ((!empty($form_sale_city)) and (empty($form_sale_property_type) )) {
                $houses = Obivlenie::where('gorod', '=', $form_sale_city)->get();

          } elseif ((empty($form_sale_city)) and (!empty($form_sale_property_type) )) {
                $houses = Obivlenie::where('type_nedvizhimosti', '=', $form_sale_property_type)
                                                ->get();

          } elseif( (!empty($form_sale_city)) and (!empty($form_sale_property_type) ) ){
                $houses = Obivlenie::where('gorod', '=', $form_sale_city)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->get();
          } else {
               $houses = Obivlenie::where('gorod', '=', 'Москва')->get();

          }

        $foundelemts = $houses->count();

        return View('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));
    }

    /**
     * get the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchInCatalogue()
    {
        return View('house.catalogue', []);
    }

    public function destroy($id)
    {
      $obj = Obivlenie::whereid($id)->first();
      if (Auth::user()->id == $obj->user_id) {
          Obivlenie::destroy($id);
      }
      return Redirect('/dashboard/advertisements');
    }

    public function destroyObj($id)
    {
      $obj = Bookmarked::whereid($id)->first();
      if (Auth::user()->id == $obj->user_id) {
          Bookmarked::destroy($id);
      }
      return Redirect()->back();
    }


    public function deleteItemFromFavoris($id)
    {
        $favoris = DB::table('bookmarked')->where('id', '=', $id)->get();
        $favoris->deleted = '1';
        $favoris->save();
        return Redirect('/dashboard/advertisements');
    }

    public function getCategoriesById($categorie)
    {
      $allcategorie = Categorie::wherename($categorie)->get();
      return $allcategorie[0]->id ;
    }

    public function deleteImg($img){
      $img->delete;
    }

    public function uploadThumbImagtoCloudStorage($thumbnail, $thumbnailName){
      $CloudStorage = Storage::disk('s3');

      $filePath = 'dev/thumbs/' .$thumbnailName;
      $CloudStorage->put($filePath, file_get_contents($thumbnail), 'public');

    }

    public static function makeLengthAware($collection)
    {
      $perPage = 5;
      $paginator = new LengthAwarePaginator(
        $collection,
        $collection->count(),
        $perPage,
        Paginator::resolveCurrentPage(),
        ['path' => Paginator::resolveCurrentPath()]);

      return str_replace('/?', '?', $paginator->render());
    }

    public static function paginateResults(Collection $items){
       $currentPage = LengthAwarePaginator::resolveCurrentPage() ?: 1;
       $maxClientPerPage = 2;
       $startIndex = ($currentPage * $maxClientPerPage) - $maxClientPerPage;
       $paginatedClients = Collection::make($items)->slice($startIndex, $maxClientPerPage);

       /*
        * Eager load orders for each client, but we don't want those cached.
        */
       if (!$paginatedClients->isEmpty()) {
           $query = $paginatedClients->first()->newQuery();
           $paginatedClients = Collection::make($query->eagerLoadRelations($paginatedClients->all()));
       }

       return new LengthAwarePaginator(
           $paginatedClients,
           $items->count(),
           $maxClientPerPage,
           $currentPage,
           [
               'path' => LengthAwarePaginator::resolveCurrentPath(),
           ]
       );
    }
}
