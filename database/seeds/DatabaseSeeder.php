<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Model::unguard();

        DB::table('categories')->insert([
           'name' => 'Аренда'
           //'email' => str_random(10).'@gmail.com',
          // 'password' => bcrypt('secret'),
       ]);

       DB::table('categories')->insert([
          'name' => 'Продажа'
          //'email' => str_random(10).'@gmail.com',
         // 'password' => bcrypt('secret'),
      ]);


        // $this->call(UserTableSeeder::class);

        Model::reguard();
    }
}
