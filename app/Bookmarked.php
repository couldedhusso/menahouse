<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bookmarked extends Model
{
  protected $table = 'bookmarked';
  protected $fillable = ['id', 'obivlenie_id', 'deleted', 'user_id', 'created_at'];
}
