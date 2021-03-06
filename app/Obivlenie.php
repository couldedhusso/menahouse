<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Elasticquent\ElasticquentTrait;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

use App\Categorie;
use App\Profiles;
use DB;

class Obivlenie extends Model
{

    use ElasticquentTrait;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'obivlenie';

    protected $fillable  = ['adressa','metro', 'type_nedvizhimosti', 'rayon', 'gorod', 'kolitchestvo_komnat', 'etajnost_doma',
    'zhilaya_ploshad', 'obshaya_ploshad', 'ploshad_kurhni', 'etazh', 'price', 'type_nedvizhimosti', 'tekct_obivlenia',
    'status', 'user_id','categorie_id', 'ulitsa', 'dom', 'stroenie', 'san_usel', 'id', 'title',
    'description', 'mestopolozhenie_obmena', 'available', 'predpolozhitelnaya_tsena', 'latitude', 'longitude',
    'doplata', 'tseli_obmena', 'roof', 'numberclick' ];

    public function categorie(){
        return $this->belongsTo('App\Categorie');
    }

    public function images()
    {
        return $this->morphMany('App\Images', 'imageable');
    }

    public function favorisutilisateurs()
    {
        return $this->morphMany('App\FavorisUtilisateurs', 'favorisutilisateurable');
    }



    public function getCategoriesByName($categorie_id)
    {
      $allcategorie = Categorie::whereid($categorie_id)->get();
      return $allcategorie[0]->name ;
    }

    public function typeHouse($number_room , $type_nedvizhimosti){

        $TYPE_OBJECT = ['Комната', 'Частный дом'];

        $room = function() use($number_room){
          switch ($number_room) {
            case '1':

              $tpRoom = "однокомнатная ";
              break;
            case '2':

              $tpRoom = "2х комнатная ";
              break;
            case '3':

              $tpRoom = "3х комнатная ";
              break;
           case '4':

                $tpRoom = "4х комнатная ";
                break;

            default:

              $tpRoom = "Студия";
              break;
          }

          return $tpRoom;
        };

        $isStudio = function() use($number_room, $room){
             return ($room($number_room) == "Студия") ? true : false ;
        };

        if (in_array($type_nedvizhimosti, $TYPE_OBJECT)) {
            return  ($type_nedvizhimosti  == "Комната") ? "Комната" : "Дом" ;

        }else {
          
          $rm_object = $room($number_room);
          if ($type_nedvizhimosti  == "Новостройки") {
             $ret = (!$isStudio($number_room)) ? $rm_object."квартира в новостроике" : "Студия в новостроике" ;
          } else {
             $ret = (!$isStudio($number_room)) ? $rm_object."квартира" : "Студия" ;
          }

          return $ret;
        }
    }

    public function HouseCategorie($numberOfRomm ){
      switch ($numberOfRomm) {
        case '1':

          $tpRoom = "Однокомнатная";
          break;
        case '2':

          $tpRoom = "2х";
          break;
        case '3':

          $tpRoom = "3х";
          break;
       case '4':

            $tpRoom = "4х";
            break;

        default:

          $tpRoom = "Студия";
          break;
      }

      return $tpRoom ;
    }

    public function getReceiverInfos($receiverId){
        $receiver = User::whereid($receiverId)->first();
        return $receiver ;
    }
    public function getMetroInfos($adId){
        $receiver = Obivlenie::whereid($adId)->first();
        return $receiver->metro ;
    }

}
