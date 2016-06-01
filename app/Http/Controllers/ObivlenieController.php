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
use Illuminate\Http\Request;
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
        $StoragePath = $Helper->getStorageDirectory($user_id);
        $address =  Input::get('address');


      //  dd(Input::get('submit-room'));
       //  dd($StoragePath["storage"]);

       //dd($request->file('file-upload'));

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
            'san_usel' => Input::get('san_usel'),
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
        foreach($request->file('file-upload') as $imgvalue) {

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
/*          $params = [
              'index' => 'menahouse',
              'type' => 'obivlenie',
              'id' => $obivlenie->id,
              'body' =>[
                'metro' => $obivlenie->metro,
                'gorod' =>  $obivlenie->gorod,
                'ulitsa' => $obivlenie->ulitsa,
                'dom' => $obivlenie->dom,
                'stroenie' => $obivlenie->stroenie,
                'type_nedvizhimosti' => $obivlenie->type_nedvizhimosti,
                'rayon' => $obivlenie->rayon,
                'tekct_obivlenia' => $obivlenie->opicanie,
                'kolitchestvo_komnat' => $obivlenie->kolitchestvo_komnat,
                'etajnost_doma' => $obivlenie->etajnost_doma,
                'zhilaya_ploshad' => $obivlenie->zhilaya_ploshad,
                'obshaya_ploshad' => $obivlenie->obshaya_ploshad,
                'ploshad_kurhni' => $obivlenie->ploshad_kurhni,
                'etazh' => $obivlenie->etazh,
                'san_usel' => $obivlenie->san_usel,
                'price' => $obivlenie->price,
                'opicanie' => $obivlenie->opicanie,
                'status' => 'availabe',
                'user_id' => $user_id,
                'categorie' => $obivlenie->getCategoriesByName($obivlenie->categorie_id)
              ]
          ]; */

      //===    $indexmodel->ModelMapping($params);

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

    public function search(Request $request){

      //create a new instance of Elasticsearch to performing search
      $elasticsearcher = new ElasticSearchEngine ;

      $gorod = Input::get('form-sale-city') ;
      $form_sale_district = Input::get('form-sale-district') ;
      $form_sale_property_type  = Input::get('form-sale-property-type') ;
      $form_sale_number_room = Input::get('form-sale-number-room');
      $form_sale_surface = Input::get('form-sale-surface');

      $term = [];
      $range = [];
      $param = [];


      if ( !empty($gorod) ) {
      //   $gorod = Input::get('form-sale-city');
         $term["gorod"] = $gorod;
         array_push($param, $gorod);
      } else{
      //   $gorod = "Москва";
         $term["gorod"] = "Москва";
      }

      // verify if parameters are not empty
      if (!empty($form_sale_district)) {
          //
          $term += ["rayon" => $form_sale_district ];
          array_push($param, $form_sale_district);
      }

      if (!empty($form_sale_property_type)) {
        //
          $term += ["type_nedvizhimosti" => $form_sale_property_type ];
          array_push($param, $form_sale_property_type );
      }

      if (!empty($form_sale_number_room)) {
        //
          $term += ["kolitchestvo_komnat" => $form_sale_number_room ];
          array_push($param, $form_sale_number_room );
      }

      // $term and $range

      if (!empty($form_sale_surface)) {
        switch ($form_sale_surface) {
          case '2':
            $range = ["gte" => 70, "lte"=> 90];
            break;
          case '3':
            $range = ["gte" => 90 , "lte"=> 110];
            break;
          case '4':
            $range = ["gt" => 110];
            break;
          default:
            $range = ["gte" =>30 , "lte"=> 70 ];
            break;
        }
      }

      if (count($range) >= 1) {
        $paramSearch = ["term" => $term, "range" => $range ];
      } else {
        $paramSearch = ["term" => $term];
      }

      $houses = $elasticsearcher->getIndexedElements($paramSearch);
      $total_items = count($houses);

      return View('house.catalogue', compact('houses', 'total_items'));

    }

    // public function setParams(){
    //   if count($this->searchresults) >= 1 {
    //
    //   }
    //
    //   return
    //   $retVal = (condition) ? a : b ;
    // }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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

        return View('pages.properties_listing_lines', compact('houses', 'foundelemts'));
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
        Obivlenie::destroy($id);
        return Redirect('/dashboard/advertisements');
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

    public function uploadtoCloudStorage(){

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
