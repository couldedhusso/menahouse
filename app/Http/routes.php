<?php

use App\Role ;
use App\Obivlenie ;
use App\Categorie ;
use App\Images ;
use App\Profiles;
use App\User;
use App\Receiver;
use App\FavorisUtilisateurs;

use App\Bookmarked;
use App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\UserMessage;
use Illuminate\Support\Collection ;

use Menahouse\CustomHelper;
use Menahouse\MenahouseSearchEngine;


// use Request;
// use Validator;


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::group(['middleware' => 'auth'], function () {

    Route::get('dashboard/advertisements', function(){

        $userId = Auth::user()->id ;
        $flag = 'advertisements';
        $show_link = true;
    //    $obivlenie = obivlenie::whereuser_id($userId)->get();
        $obivlenie = obivlenie::whereuser_id($userId)->where('available','=','1')
                                                     ->with('images')
                                                     ->get();

        return View('sessions.dashboard', compact('flag', 'obivlenie', 'show_link'));
    });


    Route::get('dashboard/advertisement/add', function ()    {
        $userid = Auth::user()->id ;
        $havehouse = Obivlenie::whereuser_id($userid)->count();
        if ($havehouse >= 1) {
            return redirect()->back();
        }

        //
        // $token = Redis::hget("users:$userid", "payload");
        // if ($token) {
        //   return redirect()->back();
        // }

        return View('sessions.additem') ;
    });

    Route::get('dashboard/advertisement/delete/{id}', ['as' => 'path_delete_item',
                        'uses' => 'ObivlenieController@destroy']);

    Route::get('dashboard/bookmarked/delete/{id}', 'ObivlenieController@destroyObj');

    Route::get('dashboard/advertisement/edit/{id}', function ($id)    {
        $house = DB::table('obivlenie')->whereid($id)->first();
        return View('sessions.update-item', compact('house', 'id')) ;
    });

    Route::get('dashboard/advertisement/edit', ['as' => 'path_update_item',
                        'uses' => 'ObivlenieController@update']);

    Route::post('dashboard/advertisement/edit', 'ObivlenieController@update');

    Route::post('dashboard/bookmarked/', 'FavorisUtilisateurController@bookmarkItem');

    Route::get('dashboard/bookmarked/{id}', function($id){

        $user_id = Auth::user()->id;
        $bkm =  Bookmarked::whereuser_id($user_id)
                            ->where('obivlenie_id', '=', $id)
                            ->first();

        if ($bkm == null ) {
            $favoris = Bookmarked::create([
              'user_id' => $user_id,
              'obivlenie_id' => $id
            ]);
        }

        return redirect()->back();
    });

    Route::get('getuserbookmarkedproperties', function()
    {
        $userId = Auth::user()->id ;

        // $results = DB::select( DB::raw("SELECT * FROM some_table WHERE some_col = :somevariable"), array(
        //    'somevariable' => $someVariable,
        // ));


        // $houses =

        // ->selectR("obivlenie.*, bookmarked.id as bkm_id, DATE_FORMAT('bookmarked.created_at', '%d/%l/%Y')  as bkm_date")

        return response()->json(
            DB::table('bookmarked')
            ->join('obivlenie', 'bookmarked.obivlenie_id', '=', 'obivlenie.id')
            ->join('users', 'users.id', '=', 'bookmarked.user_id')
            ->select('obivlenie.*', 'bookmarked.id as bkm_id', 'bookmarked.created_at as bkm_date')
            ->get()
          );
    });

    Route::get('dashboard/bookmarked', function (){


        $flag = 'bookmarked';
        $show_link = true;

        return View('sessions.bookmarked', compact('flag', 'show_link'));
    });

    /* Route::get('dashboard/advertisement/add', function ()    {
        return View('sessions.additem') ;
    }); */


    Route::post('additems', ['as' => 'additem_path',
                       'uses' => 'ObivlenieController@store']);

    Route::post('message/reply', ['as' => 'reply_msg',
                                          'uses' => 'UserMessageController@store']);

    Route::post('message/udalenie', ['as' => 'delete_msg',
                                  'uses' => 'UserMessageController@update']);

    Route::group(['prefix' => 'mailbox'], function () {
          Route::get('inbox', ['as' => 'messages', 'uses' => 'UserMessageController@index']);
          Route::get('message/compose/{id}', function($id){


              $user = Auth::user() ;
              $ch = new CustomHelper;

              if ($ch->getUserPlanPass($user)) {
                  $house = Obivlenie::whereid($id)->first();
                  $typemsg = "Новое сообщение ";
                  $To = $house->user_id;
                  $flag ="compose";

                  return view('messenger.compose', compact('house', 'To','typemsg', 'flag'));
              }

              return redirect()->back();
          });

          Route::get('message/reply/{fromid}/{houseid}', function($fromid, $houseid){
              // $sender =  User::where('id', '=', Auth::user()->id )->first();
              // $usrmsge = $msgparams->usrmsge;
              // $receiver = $usrmsge->fromid;

              $typemsg = "Ответ на сообщение";
              $To = $fromid;

              if ($fromid != Auth::user()->id ) {

                $house = Obivlenie::whereid($houseid)->with('images')->first();
                $typemsg = "Ответ на сообщение ";
                $flag = "compose";
                return view('messenger.compose', compact('house', 'typemsg', 'To', 'flag'));
              }

              return redirect('/mailbox/inbox');

          });
          Route::get('message/sent', ['as' => 'messages.sent', 'uses' => 'UserMessageController@sent']);
          Route::get('message/trash', ['as' => 'messages.trash', 'uses' => 'UserMessageController@trash']);
          Route::get('message/liked', ['as' => 'messages.liked', 'uses' => 'UserMessageController@liked']);
          Route::get('inbox/{id}', ['as' => 'messages.show', 'uses' => 'UserMessageController@show']);
          Route::post('message/compose', ['as' => 'messages.store', 'uses' => 'UserMessageController@store']);
          Route::put('inbox/{id}', ['as' => 'messages.update', 'uses' => 'UserMessageController@update']);

          Route::get('message/trash/{idmsg}', function($idmsg){
            $receiverMsg = Receiver::wheretoid(Auth::user()->id)
                                      ->where('msgid', '=', $idmsg)
                                      ->update(array('deleted' => 1));

            return redirect('/mailbox/inbox');

          });

          Route::get('message/like/{idmsg}', function($idmsg){
            $receiverMsg = Receiver::wheretoid(Auth::user()->id)
                                      ->where('msgid', '=', $idmsg)
                                      ->update(array('favoris' => 1));

            return redirect('/mailbox/inbox');
          });
    });


    Route::get('profil/{id}', function($id){

       $user = User::whereid($id)->first();

       try {
            $userprofile = Profiles::whereuser_id($user->id)->firstOrfail();

       } catch (ModelNotFoundException $e) {
            return view('sessions.edit-profil', compact('user'));
       }

        return view('sessions.profil', compact('userprofile', 'user'));
         //return view('welcome');
    });

    Route::get('profil/edit/{id}', function($id){
      $user = User::whereid($id)->first();
      return view('sessions.edit-profil', compact('user'));

    });

    Route::get('dashboard/settings/{id}', function($id){
      // verifier si l user current est autorise a faire
      // ses modifs sinon retour a la page d acceuil
      $flag ='settings';
      if ($id == Auth::user()->id ) {

        $user = User::whereid($id)->first();
        $show_link = false;

        try {
             $userprofile = Profiles::whereuser_id($user->id)
                                     ->with('images')
                                     ->firstOrfail();

        } catch (ModelNotFoundException $e) {
             $userprofile = Profiles::create(['user_id' => $id]);
             // return view('sessions.settings-profil', compact('user'));
        }

      //  return view('sessions.profil', compact('userprofile', 'user'));
        return view('sessions.settings-profil', compact('user', 'userprofile', 'flag', 'show_link'));

      } else{

        return view('/');
      }
    });

    Route::post('dashboard/settings', ['as' => 'dashboard.settings',
                       'uses' => 'ProfilController@edit']);

    Route::post('profil/edit', ['as' => 'profil_edit',
                       'uses' => 'ProfilController@edit']);

    Route::post('setting/edit/email', ['as' => 'email_edit',
                                'uses' => 'SessionController@changeEmailUser']);

    Route::post('setting/edit/password', ['as' => 'password_edit',
                                        'uses' => 'SessionController@changePasswordUser']);


  // ==== gestion des favoris utilisateurs
  Route::post('/add-item-to-bookmark', 'FavorisUtilisateurController@bookmarkItem');
  Route::post('/remove-item-to-bookmark', 'FavorisUtilisateurController@removeItem');


});

//====> advertisements routes

Route::get('property/{id}', function($id){

     $house = Obivlenie::whereid($id)->with('images')->first();

     if (Auth::check()) {
         $userID = Auth::user()->id;

         if ($userID != $house->user_id) {
           if ($house->numberclick != 0) {
             $numberclick = $house->numberclick;
             $numberclick += 1;
           } else {
             $numberclick = 1;
           }
           $house->numberclick = $numberclick ;
         } // ne pas prendre en compte les clicks du prioprio
     } else {
           if (($house->numberclick != null ) OR ($house->numberclick != 0)) {
             $numberclick = $house->numberclick;
             $numberclick += 1;
           } else {
             $numberclick = 1;
           }

           $house->numberclick = $numberclick ;
     }

     $house->save();
    return View('house.property_details', compact('house', 'id')) ;
 });

Route::get('property/number_of_rooms/{numberroom}', function($numberroom){

  $paramSearch = array('kolitchestvo_komnat' => $numberroom, 'typerequest' => '2');

  // Session::put('menahouseUserQuery', $paramSearch);

  $menahousefinder = new MenahouseSearchEngine ;
  $menahousefinder::SetQuerySearch($paramSearch);

  return redirect('search-results');


  // if (Auth::check()) {
  //   $userID = Auth::user()->id;
  //   if ($numberroom >= 4) {
  //     $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', $numberroom)
  //                                     ->where('user_id', '!=', $userID)->get();
  //   } else {
  //     $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', $numberroom)
  //                                     ->where('user_id', '!=', $userID)->get();
  //   }
  // }else {
  //
  //   if ($numberroom >= 4) {
  //     $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', $numberroom)->get();
  //   } else {
  //     $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', $numberroom)->get();
  //   }
  //
  // }
  //
  // $foundelemts = count($houses);
  //
  // return view('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));
});

Route::post('properties/all', function(){

  return view('pages.properties_listing_lines', compact('houses', 'paramSearch'));
});

Route::get('property/type/{param}', function($param){

  $paramSearch = array('type_nedvizhimosti' => $param, 'typerequest' => '2');

  $menahousefinder = new MenahouseSearchEngine ;
  $menahousefinder::SetQuerySearch($paramSearch);

  return redirect('search-results');

});

Route::post('property/catalogue', 'ObivlenieController@searchEngine');
Route::post('properties/all', 'ObivlenieController@getCatalogue');
Route::get('properties/all', 'ObivlenieController@getAllProperties');

Route::post('extractquery', 'ObivlenieController@extractUserRequestData');
Route::get('getqueryresults', 'ObivlenieController@getItemsCollections');

Route::get('search-results', function(){
    return view('pages.properties_listing');
});
// Route::post('getSearchqueryValues', function(){
//
//   $value = Session::get('menahouseUserQuery');
//   return  redirect('search-results');
//
// });


// ==== angular search filters

Route::post('setfilter', 'SessionController@setfilterValue');
Route::get('getfilter', 'SessionController@getfilterValue');

// ==== end


// Route::post('house/catalogue', 'ObivlenieController@search');
// Route::get('dashboard',  'DashboardController@show');

/*
* register
*/
Route::get('pricing', function(){
  return view('registration.plan');
});

Route::post('/sorted/properties', 'ObivlenieController@sortResult');

Route::post('signup', function(){
  // $plan = Input::get('plan');
  return view('registration.create');
});

Route::get('register', ['as' => 'register_path',
                        'uses' => 'RegistrationController@create']);
Route::post('register', ['as' => 'register_path',
                         'uses' => 'RegistrationController@store']);


Route::get('register/verify/{confirmationCode}', [ 'as' => 'confirmation_path',
            'uses' => 'RegistrationController@confirm'
]);


Route::get('confirmation', function(){
    //  return View('registration.confirm_account');
    $email = 'husseincoulibaly@gmail.com';
    return view('registration.confirm_account', compact('email'));
});



/*
* Session
*/
Route::get('login', ['as' => 'login_path',
                     'uses' => 'SessionController@create']);
Route::post('login', ['as' => 'login_path',
                     'uses' => 'SessionController@store']);


Route::get('logout', [ 'as' => 'logout_path',
   'uses' => 'SessionController@destroy'
  ]);

Route::get('sign-in', ['as' => 'login_path',
                       'uses' => 'Auth\AuthController@getLogin']);
Route::post('sign-in', ['as' => 'login_path',
                        'uses' => 'Auth\AuthController@postLogin']);

Route::get('sign-up',  function(){

     return View('registration.create');
});

Route::get('auth/register',  function(){

     return View('registration.create');
});


Route::post('sign-up', ['as'=>'register_path',
                         'uses' => 'RegistrationController@store']);

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

Route::get('logout', ['as' => 'auth_logout', 'uses' => 'Auth\AuthController@getLogout']);

// Registration routes...
Route::get('auth/register', ['as' => 'auth_register',
                            'uses' => 'Auth\AuthController@getRegister']);

// Route::post('auth/register', ['as'=>'auth_register',
//                               'uses' => 'Auth\AuthController@postRegister']);

Route::get('terms-conditions', function()
{
    return View('pages.terms_conditions');
});


Route::get('/home', function () {
//  dd(categorie()->id->where::('name', $categorie));
  $roleCount = Role::count() ;
  if ( $roleCount != 3){
      $roleadm = Role::wherename('Admin')->first();
      // $rolemembr = Role::where('name', 'Member')->value('id');
      if( ! $roleadm ){
          Role::create(['name' => 'Admin']);
      }

      $rolemod = Role::wherename('Moderator')->first();
      // $rolemembr = Role::where('name', 'Member')->value('id');
      if( ! $rolemod ){
          Role::create(['name' => 'Moderator']);
      }

      $rolemembr = Role::wherename('Member')->first();
      // $rolemembr = Role::where('name', 'Member')->value('id');
      if( ! $rolemembr ){
          Role::create(['name' => 'Member']);
      }
  }

  return view('welcome');
});

Route::get('/', function () {
//
  // for ($i=1; $i < 4; $i++) {
  //     $user = User::create([
  //             'familia' => str_random(4),
  //             'imia' => str_random(4),
  //             'otchestvo' => str_random(4),
  //             'phonenumber' => '112',
  //             'email' => str_random(4)."@menahouse.ru",
  //             'password' => bcrypt(123),
  //             'confirmed' => '1',
  //             'status' => 'activated',
  //             'confirmation_code' => null,
  //       ]);
  //
  //   $profi = Profiles::create([
  //       'user_id' => $user->id,
  //   ]);
  //
  //   $obivlenie = obivlenie::create([
  //       // 'adressa' => $adressa,
  //       'metro' => str_random(4),
  //       'gorod' =>  "Новая Москва",
  //       'ulitsa' => str_random(4),
  //       /*'dom' => Input::get('dom'),
  //       'address' => $address,
  //       'vicota_patolka' => Input::get('roof')
  //       */
  //       'type_nedvizhimosti' => "Комната",
  //       'tekct_obivlenia' => str_random(100),
  //       'kolitchestvo_komnat' => "-",
  //       'etajnost_doma' => "5",
  //       'zhilaya_ploshad' => 30,
  //       'obshaya_ploshad' => "110" ,
  //       'ploshad_kurhni' => 10 ,
  //       'rayon' => str_random(4),
  //       'roof' => "2",
  //       'etazh' => "3",
  //       'san_usel' => str_random(4),
  //       'title' => str_random(4),
  //       'price' => "500000" ,
  //       'status' => "Обмен",
  //       'tseli_obmena' => "На_уменьшение",
  //       'mestopolozhenie_obmena' => "В_том_же_районе",
  //       'doplata' => str_random(4),
  //       'numberclick' => 0,
  //     //  'predpolozhitelnaya_tsena' => Input::get('predpolozhitelnaya_tsena'),
  //       'user_id' => $user->id,
  //   ]);
  //
  //
  //   $arrayName = [
  //     '1' => '2cP7ZHUIwVBPbM3TSafu180RWvMbE0Cw.jpeg',
  //     '2' => '2SIrJ1QTv0kN9Rm7lRke5fFRb9xYE5zV.jpeg',
  //     '3' => '49CSL8PDRUtVya4FzlvjkSvLOYWwXqJW.jpeg'
  //   ];
  //
  //   foreach ($arrayName as $key => $value) {
  //     $img = new Images ;
  //     $img = $obivlenie->images()->create(array('path' => $value));
  //     $obivlenie->images()->save($img);
  //   }
  //
  //
  //  }




  //   $obivlenie = obivlenie::create([
  //       // 'adressa' => $adressa,
  //       'metro' => str_random(4),
  //       'gorod' =>  "Москва",
  //       'ulitsa' => str_random(4),
  //       /*'dom' => Input::get('dom'),
  //       'address' => $address,
  //       'vicota_patolka' => Input::get('roof')
  //       */
  //       'type_nedvizhimosti' => "Частный дом",
  //       'tekct_obivlenia' => str_random(100),
  //       'kolitchestvo_komnat' => "4",
  //       'etajnost_doma' => "5",
  //       'zhilaya_ploshad' => 30,
  //       'obshaya_ploshad' => "110" ,
  //       'ploshad_kurhni' => 10 ,
  //       'rayon' => str_random(4),
  //       'roof' => "2",
  //       'etazh' => "3",
  //       'san_usel' => str_random(4),
  //       'title' => str_random(4),
  //       'price' => "50000" ,
  //       'status' => "Обмен",
  //       'tseli_obmena' => "На_увеличение",
  //       'mestopolozhenie_obmena' => "В_том_же_районе",
  //       'doplata' => str_random(4),
  //       'numberclick' => 0,
  //     //  'predpolozhitelnaya_tsena' => Input::get('predpolozhitelnaya_tsena'),
  //       'user_id' => '10',
  //   ]);
  //
  // //  На_уменьшение
  //
  //
  //   $arrayName = [
  //     '1' => '2cP7ZHUIwVBPbM3TSafu180RWvMbE0Cw.jpeg',
  //     '2' => '2SIrJ1QTv0kN9Rm7lRke5fFRb9xYE5zV.jpeg',
  //     '3' => '49CSL8PDRUtVya4FzlvjkSvLOYWwXqJW.jpeg'
  //   ];
  //
  //   foreach ($arrayName as $key => $value) {
  //     $img = new Images ;
  //     $img = $obivlenie->images()->create(array('path' => $value));
  //     $obivlenie->images()->save($img);
  //   }

  // $roleCount = Role::count() ;
  // if ( $roleCount != 3){
  //     $roleadm = Role::wherename('Admin')->first();
  //     // $rolemembr = Role::where('name', 'Member')->value('id');
  //     if( ! $roleadm ){
  //         Role::create(['name' => 'Admin']);
  //     }
  //
  //     $rolemod = Role::wherename('Moderator')->first();
  //     // $rolemembr = Role::where('name', 'Member')->value('id');
  //     if( ! $rolemod ){
  //         Role::create(['name' => 'Moderator']);
  //     }
  //
  //     $rolemembr = Role::wherename('Member')->first();
  //     // $rolemembr = Role::where('name', 'Member')->value('id');
  //     if( ! $rolemembr ){
  //         Role::create(['name' => 'Member']);
  //     }
  // }
  //
  if (Auth::check()) {

      $userID = Auth::user()->id ;
      $oneroom  = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', 1)
                                        ->where('user_id', '!=', $userID)
                                        ->count();

      $tworooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', 2)
                                         ->where('user_id', '!=', $userID)
                                         ->count();

      $threerooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', 3)
                                           ->where('user_id', '!=', $userID)
                                           ->count();

      $fourplusrooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', 4)
                                              ->OrWhere('type_nedvizhimosti', '=','Комната')
                                              ->where('user_id', '!=', $userID)
                                              ->count();

      $home  = DB::table('obivlenie')->where('type_nedvizhimosti', '=', 'Частный дом')
                                     ->where('user_id', '!=', $userID)
                                     ->count();

      $newhome  = DB::table('obivlenie')->where('type_nedvizhimosti', '=', 'Новостройки')
                                        ->where('user_id', '!=', $userID)
                                        ->count();

  } else {
      $oneroom  = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', 1)->count();
      $tworooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', 2)->count();
      $threerooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', 3)->count();
      $fourplusrooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', 4)
                                              ->OrWhere('type_nedvizhimosti', '=','Комната')->count();
      $home  = DB::table('obivlenie')->where('type_nedvizhimosti', '=', 'Частный дом')->count();
      $newhome  = DB::table('obivlenie')->where('type_nedvizhimosti', '=', 'Новостройки')->count();
  }



  return view('welcome', compact('oneroom', 'tworooms', 'threerooms',
                                 'fourplusrooms', 'home', 'newhome'));
});

Route::any( '{catchall}', function ( $page ) {
    return view('pages.404');
})->where('catchall', '(.*)');
