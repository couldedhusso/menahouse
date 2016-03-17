<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Elasticquent\ElasticquentTrait;

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
    'status', 'user_id','categorie_id', 'ulitsa', 'dom', 'stroenie', 'san_usel', 'id' ];


    public function categorie(){
        return $this->belongsTo('App\Categorie');
    }

    public function images()
    {
        return $this->morphMany('App\Images', 'imageable');
    }

    public function getCategoriesByName($categorie_id)
    {
      $allcategorie = Categorie::whereid($categorie_id)->get();
      return $allcategorie[0]->name ;
    }

    public function typeHouse($numberOfRomm ){
      switch ($numberOfRomm) {
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
