<?php

use App\Role ;
use App\Obivlenie ;
use App\Categorie ;
use App\Images ;
use App\Profiles;
use App\User;
use App\Receiver;

use App\Bookmarked;
use App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input as Input;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\UserMessage;
use Illuminate\Support\Collection ;


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
    //    $obivlenie = obivlenie::whereuser_id($userId)->get();
        $obivlenie = obivlenie::whereuser_id($userId)->where('available','=','1')
                                                     ->with('images')
                                                     ->get();

        return View('sessions.dashboard', compact('flag', 'obivlenie'));
    });


    Route::get('dashboard/advertisement/add', function ()    {
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
    Route::get('dashboard/bookmarked', function (){

        $userId = Auth::user()->id ;
        $flag = 'bookmarked';

        $houses = DB::table('bookmarked')
            ->join('obivlenie', 'bookmarked.obivlenie_id', '=', 'obivlenie.id')
            ->join('users', 'users.id', '=', 'bookmarked.user_id')
            ->select('obivlenie.*', 'bookmarked.id as bkm_id', 'bookmarked.created_at as bkm_date')
            ->get();

        return View('sessions.bookmarked', compact('flag', 'houses'));
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

              $userID = Auth::user()->id ;
              $house = Obivlenie::whereid($id)->with('images')->first();
              $typemsg = "Новое сообщение ";
              $To = $userID;
              $flag ="compose";

              return view('messenger.compose', compact('house', 'To','typemsg', 'flag'));
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

        try {
             $userprofile = Profiles::whereuser_id($user->id)
                                     ->with('images')
                                     ->firstOrfail();

        } catch (ModelNotFoundException $e) {
             $userprofile = Profiles::create(['user_id' => $id]);
             // return view('sessions.settings-profil', compact('user'));
        }

      //  return view('sessions.profil', compact('userprofile', 'user'));
        return view('sessions.settings-profil', compact('user', 'userprofile', 'flag'));

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
           if ($house->numberclick != 0) {
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

  $paramSearch = array('number_of_rooms' => $numberroom);
  if (Auth::check()) {
    $userID = Auth::user()->id;
    if ($numberroom >= 4) {
      $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', $numberroom)
                                      ->where('user_id', '!=', $userID)->get();
    } else {
      $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', $numberroom)
                                      ->where('user_id', '!=', $userID)->get();
    }
  }else {

    if ($numberroom >= 4) {
      $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', $numberroom)->get();
    } else {
      $houses = DB::table('obivlenie')->where('kolitchestvo_komnat', '=', $numberroom)->get();
    }

  }

  $foundelemts = count($houses);

  return view('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));
});

Route::post('properties/all', function(){

  return view('pages.properties_listing_lines', compact('houses', 'paramSearch'));
});

Route::get('property/type/{param}', function($param){
  $paramSearch = array('type' => $param);
  if (Auth::check()) {
    $userID = Auth::user()->id;
    $houses = DB::table('obivlenie')->where('type_nedvizhimosti', '=', $param)
                                    ->where('user_id', '!=', $userID)->get();

  }else {

    $houses = DB::table('obivlenie')->where('type_nedvizhimosti', '=', $param)->get();

  }

  $foundelemts = count($houses);

  return view('pages.properties_listing_lines', compact('houses', 'foundelemts', 'paramSearch'));
});

Route::post('property/catalogue', 'ObivlenieController@searchEngine');
Route::post('properties/all', 'ObivlenieController@getCatalogue');


// Route::post('house/catalogue', 'ObivlenieController@search');
// Route::get('dashboard',  'DashboardController@show');

/*
* register
*/
Route::get('join', function(){
  return view('registration.plan');
});

Route::post('/sorted/properties', 'ObivlenieController@sortResult');

Route::post('signup', function(){
  $plan = Input::get('plan');
  return view('registration.create', compact('plan'));
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


Route::get('catalogue/houses/drugie_goroda', function(){

      $houses =  Obivlenie::where('gorod', '<>', 'Москва')
                ->with('images')->Paginate(5);

       return View('house.catalogue', compact('houses'));
});

Route::get('catalogue/houses/Moskva/{typehouse}', function($typehouse){

       if ($typehouse == "drugie_tip_domov") {
         $houses =  Obivlenie::where('gorod', '<>', 'Москва')
                       ->where('type_nedvizhimosti', '<>', 'Квартира')
                       ->with('images')->Paginate(5);
       }

       else {

         try {
               //====> verifier si le parametre existe si oui retourner la liste
              //          des apparts
          //    $house = Obivlenie::wherekolitchestvo_komnat($typehouse)->firstOrfail();

              $houses =  Obivlenie::where('gorod', '=', 'Москва')
                            ->where('type_nedvizhimosti', '=', 'Квартира')
                            ->where('kolitchestvo_komnat','=', $typehouse)
                            // ->with('images')->get();
                            ->with('images')->Paginate(5);

         } catch (ModelNotFoundException $e) {

           //====> en cas d erreur retourner ts les apparts
          //  $houses =  Obivlenie::where('gorod', '=', 'Москва')
          //                ->where('type_nedvizhimosti', '=', 'Квартира')
          //                ->with('images')->Paginate(5);
                        //  ->with('images')->get();
         }

       }

       return View('house.catalogue', compact('houses'));
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
      $fourplusrooms  = DB::table('obivlenie')->where('kolitchestvo_komnat', '>=', 4)->count();
      $home  = DB::table('obivlenie')->where('type_nedvizhimosti', '=', 'Частный дом')->count();
      $newhome  = DB::table('obivlenie')->where('type_nedvizhimosti', '=', 'Новостройки')->count();
  }



  return view('welcome', compact('oneroom', 'tworooms', 'threerooms',
                                 'fourplusrooms', 'home', 'newhome'));
});

Route::any( '{catchall}', function ( $page ) {
    return view('pages.404');
})->where('catchall', '(.*)');
