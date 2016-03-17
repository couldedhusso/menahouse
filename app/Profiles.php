<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profiles extends Model
{

    protected $table = 'profiles';

    protected $fillable = ['gender', 'location', 'bio', 'user_id', 'hasprofile'];

    public function user()
    {
      return $this->belongsTo('App\User');
    }

    public function images()
    {
      return $this->morphOne('App\Images', 'imageable');
    }
}
