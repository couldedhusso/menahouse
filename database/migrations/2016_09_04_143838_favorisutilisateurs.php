<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Favorisutilisateurs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('favorisutilisateurs', function(Blueprint $t){
          $t->increments('id');
          $t->boolean('deleted');
          $t->string('bkm_date');
          $t->morphs('bookmarkable');
          $t->timestamps();
          $t->integer('user_id')->unsigned()->nullable();
          $t->foreign('user_id')->references('id')->on('users');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
         Schema::drop('favorisutilisateurs');
    }
}
