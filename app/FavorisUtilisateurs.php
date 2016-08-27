<?php namespace App ;

use Illuminate\Eloquent\Model;

/**
 * gestion des favoris(messages, publications ) utilisateur
 */
class FavorisUtilisateurs extends Model
{
    protected $fillable = ['deleted'];
    protected $guarded =  array('id');

    public function favorisutilisateurable(){
      return this->morphTo();
    }
}
