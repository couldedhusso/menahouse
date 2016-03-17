<?php
namespace App\Http\Controllers;
require base_path('vendor/autoload.php');

use Illuminate\Http\Request;
use Illuminate\Contracts\Filesystem\Filesystem;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;

use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Elasticsearch;
use Elasticsearch\Client;

use App\Images ;
use App\Categorie ;
use App\Obivlenie ;
use App\User;
use Auth ;
use DB;
use Storage;

use Menahouse\ElasticSearchEngine ;

use Redirect;


class ObivlenieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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

        $user_id = Auth::user()->id ;
        $path = base_path();

        $indexmodel = new ElasticSearchEngine ;

        // $storage_path = public_path().'/storage/'.$user_id ;

        // $storage_path = public_path().'/storage/' ;

        // if(! File::exists($storage_path)) {
        //     File::makeDirectory($storage_path);
        // }

        //  $adressa = Input::get('ulitsa') ." ". Input::get('dom')." ". Input::get('stroenie') ;


        $CloudStorage = Storage::disk('s3');

        $obivlenie = obivlenie::create([
            // 'adressa' => $adressa,
            'metro' => Input::get('metro'),
            'gorod' =>  Input::get('gorod'),
            'ulitsa' => Input::get('ulitsa'),
            'dom' => Input::get('dom'),
            'stroenie' => Input::get('stroenie'),
            'type_nedvizhimosti' => Input::get('type_nedvizhimosti'),
            'rayon' => Input::get('rayon'),
            'tekct_obivlenia' => Input::get('opicanie'),
            'kolitchestvo_komnat' => Input::get('kolitchestvo_komnat'),
            'etajnost_doma' => Input::get('etajnost_doma') ,
            'zhilaya_ploshad' => Input::get('zhilaya_ploshad') ,
            'obshaya_ploshad' => Input::get('obshaya_ploshad') ,
            'ploshad_kurhni' => Input::get('ploshad_kurhni')  ,
            'etazh' => Input::get('etazh'),
            'san_usel' => Input::get('san_usel'),
            'price' => Input::get('price') ,
            'opicanie' => Input::get('opicanie'),
            'status' => 'availabe',

            'user_id' => $user_id,
            'categorie_id' => $this->getCategoriesById(Input::get('categorie'))
        ]);

            $thumbnailName = $obivlenie->id ;
            $madeThumnail = true ;
            $imgPath = ' ';
            foreach(Input::file('pics') as $imgvalue) {

               $filename = str_random(4)."-".$imgvalue->getClientOriginalName();
               $filePath = 'dev/images/pics/' .$filename;

               if( $imgvalue->isValid() ){
                    if (! $madeThumnail){
                      $this->uploadThumbImagtoCloudStorage($imgvalue, $thumbnailName);
                      $madeThumnail = true ;
                    }

                    //  $imgProperty = Image::make(file_get_contents($imgvalue))->resize(848, 430) ;
                    $imgPath = $imgPath.' '.$filename ;
                    // $imgvalue->move($storage_path, $filename);
                    $CloudStorage->put($filePath, file_get_contents($imgvalue), 'public');

                    $imgParam = [
                        'index' => 'menahouse',
                        'type'  => 'images',
                        'body' => [
                            'imageable_id ' => $obivlenie->id,
                            'path' => $filename,
                          ]
                    ];

                    $img = new Images ;
                    $img = $obivlenie->images()->create(array('path' => $filename));
                    $obivlenie->images()->save($img);

                    // indexer les images de la publication dans elasticsearch
                    $indexmodel->ModelMapping($imgParam);
               }
          }

          // indexer  la publication dans elasticsearch
          $params = [
              'index' => 'menahouse',
              'type' => 'obivlenie',
              'id' => $obivlenie->id,
              'body' => $obivlenie->toArray()
          ];

          $indexmodel->ModelMapping($params);

          // tout est ok nous retourner une a la page des publications
          return Redirect('/dashboard/nedvizhimosts');
    }




    public function search(Request $request){

      //create a new instance of Elasticsearch to performing search
      $elasticsearcher = new ElasticSearchEngine ;


      $gorod = Input::get('form-sale-city' ) ;
      $form_sale_district = Input::get('form-sale-district') ;
      $form_sale_property_type  = Input::get('form-sale-property-type') ;
      $form_sale_number_room = Input::get('form-sale-number-room');
      $form_sale_surface = Input::get('form-sale-surface');

      $term = [];
      $range = [];

      if ( !empty($gorod) ) {
      //   $gorod = Input::get('form-sale-city');
         $term["gorod"] = $gorod;
      } else{
      //   $gorod = "Москва";
         $term["gorod"] = "Москва";
      }

      // verify if parameters are not empty
      if (!empty($form_sale_district)) {
          //
          $term += ["rayon" => $form_sale_district ];
      }

      if (!empty($form_sale_property_type)) {
        //
          $term += ["type_nedvizhimosti" => $form_sale_property_type ];
      }

      if (!empty($form_sale_number_room)) {
        //
          $term += ["kolitchestvo_komnat" => $form_sale_number_room ];
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


      // dd($filtered);

      // search's parameters - get on Elasticsearch site
      // https://www.elastic.co/guide/en/elasticsearch/client/php-api/2.0/_search_operations.html

      // $paramSearch = [
      //   "index" => "obivlenie",
      //   "body" => [
      //       "query" => [
      //           "match_all" => []
      //       ]
      //   ]
      // ];

    //  $index = "obivlenie";
      $elasticsearcher->getIndexedElements($paramSearch);


      // $paramSearch = [
      //   'gorod' => $gorod,
      //   'type_nedvizhimosti' => $form_sale_property_type,
      //   'rayon' => $form_sale_district ,
      //   'obshaya_ploshad' => $form_sale_surface,
      //   'kolitchestvo_komnat' => $form_sale_number_room
      //
      // ];
      //
      // $searchQuery = ['match' => $paramSearch];
      //
      //
      //
      // $obivlenie = obivlenie::search($gorod);
      // dd($obivlenie);

        // dd($type);


      //  $result = obivlenie::where('type_nedvizhimosti', '=', $type)->get();

      //  dd($result);
        //


        if(Input::get('type_nedvizhimosti') != ""){

          if(Input::get('gorod') != "" ){

                if( Input::get('rayon') != ""){

                  $result = obivlenie::wheretype_nedvizhimosti($type)
                                      ->wheregorod($gorod)
                                      ->whererayon($rayon)->get();



                  // $authors = User::whereid($result->user_id)->get();
                } else{

                    $result = obivlenie::wheretype_nedvizhimosti($type)->wheregorod($gorod);

                }

          } else{
                $result = obivlenie::wheretype_nedvizhimosti($type)->get();
                // $authors = User::whereid($result->user_id)->get();
          }

        } else {
              $result = obivlenie::all();
              // $authors = User::whereid($result->user_id)->get();
        }


         return View('arenda.arenda')
                ->with('result', $result)
                ->with('images');

    }
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
    public function getCatalogue()
    {
        return View('catalogue.catalogue');
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

        if ( Input::get('form-sale-city') != "") {
           $gorod = Input::get('form-sale-city');
        }

        // $houses = null ;

        $form_sale_district = Input::get('form-sale-district') ;
        $form_sale_property_type = Input::get('form-sale-property-type');
        $form_sale_number_room = Input::get('form-sale-number-room');
        $form_sale_surface = Input::get('form-sale-surface');

        // $houses =  Obivlenie::where('gorod', '=', $gorod)
        //                       ->with('images')
        //                       ->get();

        if ($form_sale_district == ""  and   $form_sale_property_type == "" and
           $form_sale_number_room == ""  and   $form_sale_surface == "") {

           $houses =  Obivlenie::where('gorod', '=', $gorod)
                        ->with('images')->Paginate(2);
        }

        // ====>  Tous types d appartement dans un rayon bien precis
        if ($form_sale_district != ""  and   $form_sale_property_type == "") {

          $houses =  Obivlenie::where('gorod', '=', $gorod)
                        ->where('rayon', '=', $form_sale_district)
                        ->with('images')->Paginate(5);
        }

        // ====>  un type precis d appartement peu import le rayon
        elseif ($form_sale_district == "" and $form_sale_property_type != "") {

          // ====>   preference sur le nombre de pieces et la surface
          if ($form_sale_number_room != "" and $form_sale_surface != "") {

             // ====>  Nombre d pieces superieur ou egal a $form_sale_surface
             if ($form_sale_number_room == "5 ") {

               switch ($form_sale_surface) {
                    case '2':

                      $houses =  Obivlenie::where('gorod', '=', $gorod)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                    ->whereBetween('obshaya_ploshad',  array(70, 90))->with('images')->Paginate(5);

                      break;

                    case '3':
                        $houses = Obivlenie::where('gorod', '=', $gorod)
                                      ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                      ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                      ->whereBetween('obshaya_ploshad',  array(90, 110))->with('images')->Paginate(5);

                      break;

                    case '4':
                        $houses = Obivlenie::where('gorod', '=', $gorod)
                                      ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                      ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                      ->where('obshaya_ploshad', '>=' ,'110')->with('images')->Paginate(5);

                        break;

                    default:
                        $houses = Obivlenie::where('gorod', '=', $gorod)
                                      ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                      ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                      ->whereBetween('obshaya_ploshad',  array(30, 70))->with('images')->Paginate(5);

                      break;
                }
             }
             else {

               switch ($form_sale_surface) {
                 case '2':

                   $houses =  Obivlenie::where('gorod', '=', $gorod)
                                 ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                 ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                 ->whereBetween('obshaya_ploshad',  array(70, 90))->with('images')->Paginate(5);

                   break;

                 case '3':
                     $houses = Obivlenie::where('gorod', '=', $gorod)
                                   ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                   ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                   ->whereBetween('obshaya_ploshad',  array(90, 110))->with('images')->Paginate(5);

                   break;

                 case '4':
                     $houses = Obivlenie::where('gorod', '=', $gorod)
                                   ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                   ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                   ->where('obshaya_ploshad', '>=' ,'110')->with('images')->Paginate(5);

                     break;

                 default:
                     $houses = Obivlenie::where('gorod', '=', $gorod)
                                   ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                   ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                   ->whereBetween('obshaya_ploshad',  array(30, 70))->with('images')->Paginate(5);

                   break;
               }

             }

          }
          else {
            if ($form_sale_number_room == "" and  $form_sale_surface == "") {
              $houses =  Obivlenie::where('gorod', '=', $gorod)
                                 ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                 ->with('images')->get();
            }
            elseif ($form_sale_number_room != "") {
               if ($form_sale_number_room == "5") {
                 $houses =  Obivlenie::where('gorod', '=', $gorod)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->where('kolitchestvo_komnat','>=', $form_sale_number_room)->with('images')->get();
               }
               else{
                 $houses =  Obivlenie::where('gorod', '=', $gorod)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->where('kolitchestvo_komnat','=', $form_sale_number_room)->with('images')->get();
               }

            }
            else {
                  switch ($form_sale_surface) {
                       case '2':

                         $houses =  Obivlenie::where('gorod', '=', $gorod)
                                       ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                       ->whereBetween('obshaya_ploshad',  array(70, 90))->with('images')->Paginate(5);

                         break;

                       case '3':
                           $houses = Obivlenie::where('gorod', '=', $gorod)
                                         ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                         ->whereBetween('obshaya_ploshad',  array(90, 110))->with('images')->Paginate(5);

                         break;

                       case '4':
                           $houses = Obivlenie::where('gorod', '=', $gorod)
                                         ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                         ->where('obshaya_ploshad', '>=' ,'110')->with('images')->Paginate(5);

                           break;

                       default:
                           $houses = Obivlenie::where('gorod', '=', $gorod)
                                         ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                         ->whereBetween('obshaya_ploshad',  array(30, 70))->with('images')->Paginate(5);

                         break;
                   }
            }

          }

        }

        // ====>  un type precis d appartement dasn un  rayon precis
        elseif ($form_sale_district != ""  and   $form_sale_property_type != "")  {

          // ====>   preference sur le nombre de pieces et la surface
          if ($form_sale_number_room != "" and $form_sale_surface != "") {

             // ====>  Nombre d pieces superieur ou egal a $form_sale_surface
             if ($form_sale_number_room == "5 ") {

               switch ($form_sale_surface) {
                    case '2':

                      $houses =  Obivlenie::where('gorod', '=', $gorod)
                                    ->where('rayon', '=', $form_sale_district)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                    ->whereBetween('obshaya_ploshad',  array(70, 90))->with('images')->Paginate(5);

                      break;

                    case '3':
                        $houses = Obivlenie::where('gorod', '=', $gorod)
                                      ->where('rayon', '=', $form_sale_district)
                                      ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                      ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                      ->whereBetween('obshaya_ploshad',  array(90, 110))->with('images')->Paginate(5);

                      break;

                    case '4':
                        $houses = Obivlenie::where('gorod', '=', $gorod)
                                      ->where('rayon', '=', $form_sale_district)
                                      ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                      ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                      ->where('obshaya_ploshad', '>=' ,'110')->with('images')->Paginate(5);

                        break;

                    default:
                        $houses = Obivlenie::where('gorod', '=', $gorod)
                                      ->where('rayon', '=', $form_sale_district)
                                      ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                      ->where('kolitchestvo_komnat','>=', $form_sale_number_room)
                                      ->whereBetween('obshaya_ploshad',  array(30, 70))->with('images')->Paginate(5);

                      break;
                }
             }
             else {
               switch ($form_sale_surface) {
                 case '2':

                   $houses =  Obivlenie::where('gorod', '=', $gorod)
                                 ->where('rayon', '=', $form_sale_district)
                                 ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                 ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                 ->whereBetween('obshaya_ploshad',  array(70, 90))->with('images')->Paginate(5);

                   break;

                 case '3':
                     $houses = Obivlenie::where('gorod', '=', $gorod)
                                   ->where('rayon', '=', $form_sale_district)
                                   ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                   ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                   ->whereBetween('obshaya_ploshad',  array(90, 110))->with('images')->Paginate(5);

                   break;

                 case '4':
                     $houses = Obivlenie::where('gorod', '=', $gorod)
                                   ->where('rayon', '=', $form_sale_district)
                                   ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                   ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                   ->where('obshaya_ploshad', '>=' ,'110')->with('images')->Paginate(5);

                     break;

                 default:
                     $houses = Obivlenie::where('gorod', '=', $gorod)
                                   ->where('rayon', '=', $form_sale_district)
                                   ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                   ->where('kolitchestvo_komnat','=', $form_sale_number_room)
                                   ->whereBetween('obshaya_ploshad',  array(30, 70))->with('images')->Paginate(5);

                   break;
               }

             }

          }
          else {


            if ($form_sale_number_room == "" and $form_sale_surface == "") {
              $houses =  Obivlenie::where('gorod', '=', $gorod)
                                 ->where('rayon', '=', $form_sale_district)
                                 ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                 ->with('images')->get();
            }
            elseif ($form_sale_number_room != "") {
               if ($form_sale_number_room == "5") {
                 $houses =  Obivlenie::where('gorod', '=', $gorod)
                                    ->where('rayon', '=', $form_sale_district)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->where('kolitchestvo_komnat','>=', $form_sale_number_room)->with('images')->get();
               }
               else{
                 $houses =  Obivlenie::where('gorod', '=', $gorod)
                                    ->where('rayon', '=', $form_sale_district)
                                    ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                    ->where('kolitchestvo_komnat','=', $form_sale_number_room)->with('images')->get();
               }

            }
            else {
                  switch ($form_sale_surface) {
                       case '2':

                         $houses =  Obivlenie::where('gorod', '=', $gorod)
                                       ->where('rayon', '=', $form_sale_district)
                                       ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                       ->whereBetween('obshaya_ploshad',  array(70, 90))->with('images')->Paginate(5);

                         break;

                       case '3':
                           $houses = Obivlenie::where('gorod', '=', $gorod)
                                         ->where('rayon', '=', $form_sale_district)
                                         ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                         ->whereBetween('obshaya_ploshad',  array(90, 110))->with('images')->Paginate(5);

                         break;

                       case '4':
                           $houses = Obivlenie::where('gorod', '=', $gorod)
                                         ->where('rayon', '=', $form_sale_district)
                                         ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                         ->where('obshaya_ploshad', '>=' ,'110')->with('images')->Paginate(5);

                           break;

                       default:
                           $houses = Obivlenie::where('gorod', '=', $gorod)
                                         ->where('rayon', '=', $form_sale_district)
                                         ->where('type_nedvizhimosti', '=', $form_sale_property_type)
                                         ->whereBetween('obshaya_ploshad',  array(30, 70))->with('images')->Paginate(5);

                         break;
                   }
            }

          }

        } // fin search

        $typehouse = "Недвижимости";
        if ($form_sale_property_type != "") {
          $typehouse = $form_sale_property_type ;
        }

        $founditem = count($houses) ;
        return View('house.catalogue', ['houses'=> $houses, 'typehouse'=> $typehouse, 'founditem'=> $founditem]);
    }

    public function destroy($id)
    {
        Obivlenie::destroy($id);
        return Redirect('/dashboard/nedvizhimosts');
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


}
