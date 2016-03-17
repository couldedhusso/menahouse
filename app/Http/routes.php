<?php


use App\Role ;
use App\Obivlenie ;
use App\Categorie ;
use App\Images ;
use App\Profiles;
use App\User;

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

    Route::get('dashboard/nedvizhimosts/add', function ()    {
        return View('sessions.additem') ;
    });

    Route::get('dashboard/nedvizhimosts', function(){

      $userId = Auth::user()->id ;
      $ads = obivlenie::whereuser_id($userId)->with('images')->get() ;
        return View('sessions.dashboard')->with('ads', $ads);
    });

    Route::get('dashboard/nedvizhimosts/{id}', function($id){
        $ad = obivlenie::find($id)->get();
            return View('sessions.dashboard')->with('ad', $ad) ;
     });

    Route::get('dashboard/nedvizhimosts/delete/{id}', ['as' => 'path_delete_item',
                        'uses' => 'ObivlenieController @destroy']);


    Route::post('additems', ['as' => 'additem_path',
                       'uses' => 'ObivlenieController@store']);

    // Route::group(['prefix' => 'messages'], function () {
    //   Route::get('/', ['as' => 'messages', 'uses' => 'MessagesController@index']);
    //   Route::get('create', ['as' => 'messages.create', 'uses' => 'MessagesController@create']);
    //   Route::post('/', ['as' => 'messages.store', 'uses' => 'MessagesController@store']);
    //   Route::get('{id}', ['as' => 'messages.show', 'uses' => 'MessagesController@show']);
    //   Route::put('{id}', ['as' => 'messages.update', 'uses' => 'MessagesController@update']);
    // // });
    //

    // Route::get('message/udalinie', function(){
    //
    //   // $ums = UserMessage::wheretoid(Auth::user()->id)
    //   //                             ->orderBy('id', 'desc')
    //   //                             ->get();
    //
    //   $userid  = Auth::user()->id ;
    //
    //   $ums = UserMessage::wheretoid($userid)
    //                               ->orderBy('id', 'desc')
    //                               ->get();
    //
    //     return view('messenger.deleted-msg', compact('userid', 'ums'));
    // });
    //
    // Route::get('message/otpravlenie', function(){
    //
    //   $userid  = Auth::user()->id ;
    //   $ums = UserMessage::wherefromid($userid)
    //                               ->orderBy('id', 'desc')
    //                               ->get();
    //
    //   return view('messenger.send-msg', compact('userid', 'ums'));
    // });

    Route::post('message/reply', ['as' => 'reply_msg',
                                          'uses' => 'UserMessageController@store']);

    Route::post('message/udalenie', ['as' => 'delete_msg',
                                  'uses' => 'UserMessageController@update']);

    Route::group(['prefix' => 'messages'], function () {
          Route::get('/', ['as' => 'messages', 'uses' => 'UserMessageController@index']);
          Route::get('create', ['as' => 'messages.create', 'uses' => 'UserMessageController@create']);
          Route::post('/', ['as' => 'messages.store', 'uses' => 'UserMessageController@store']);
          Route::get('{id}', ['as' => 'messages.show', 'uses' => 'UserMessageController@show']);
          Route::put('{id}', ['as' => 'messages.update', 'uses' => 'UserMessageController@update']);
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

    Route::get('user/settings/{id}', function($id){
      // verifier si l user current est autorise a faire
      // ses modifs sinon retour a la page d acceuil

      if ($id == Auth::user()->id ) {

        $user = User::whereid($id)->first();
        return view('sessions.settings-profil', compact('user'));

      } else{

        return view('/');
      }
    });

    Route::post('profil/edit', ['as' => 'profil_edit',
                       'uses' => 'ProfilController@edit']);

    Route::post('setting/edit/email', ['as' => 'email_edit',
                                'uses' => 'SessionController@changeEmailUser']);

    Route::post('setting/edit/password', ['as' => 'password_edit',
                                        'uses' => 'SessionController@changePasswordUser']);
});


Route::get('house/catalogue',  function(){
    return View('house.catalogue');
});

Route::get('property/{id}',  function($id){

    $property = Obivlenie::whereid($id)->first();

    return View('house.property_details', compact('property'));
});

//Route::post('house/catalogue', 'ObivlenieController@searchInCatalogue');
Route::post('house/catalogue', 'ObivlenieController@search');
// Route::get('dashboard',  'DashboardController@show');

/*
* register
*/
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

Route::get('listarenda', function(){

    $categorie_id = Categorie::wherename('Аренда')->get();
    $arenda =  obivlenie::wherecategorie_id($categorie_id[0]->id)
                                            ->with('images')
                                            ->get() ;
    return Response::json($arenda);
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
                      //  ->with('images')->get();

                      //  ->with('images')->Paginate(5);
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

Route::post('arenda',['as' => 'search_path',
                     'uses' => 'ObivlenieController@search']);

Route::get('prodazha', function(){
    return View('prodazha.prodazha');
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
// Route::post('sign-up', ['as'=>'auth_register',
//                          'uses' => 'Auth\AuthController@postRegister']);
//
Route::post('sign-up', ['as'=>'register_path',
                         'uses' => 'RegistrationController@store']);
//
// Route::get('Register', ['as' => 'auth_register',
//                         'uses' => 'Auth\AuthController@getRegister']);



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

  // $Img = Image::make(public_path('storage/2015-11-16-HSfcHRhO-4da13315dae58b0fa7bdb0f31484a996.jpg'))->resize(200, );
  // return $Img->response('jpg');

   //$obivlenie = obivlenie::search('Коттедж');
   //dd($obivlenie);
   //
  //  $data = ["gorod" => "Москва"];
  //      $data += [ "two" => 2 ];
  //      $data += [ "three" => 3 ];
  //      $data += [ "four" => 4 ];


  return view('welcome');
});
