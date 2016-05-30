<?php

namespace App;
use App\Images;

use Illuminate\Database\Eloquent\Model;

class Thumbnail extends Model
{
   protected $table = 'thumb';
   protected $fillable = ['id', 'obivlenie_id'];

   public function images()
   {
      return $this->morphMany('App\Images', 'imageable');
   }
}
