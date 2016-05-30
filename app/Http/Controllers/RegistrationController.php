<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Redirect;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Foundation\Exceptions;
// use App\Traits\CaptchaTrait;

use ReCaptcha\ReCaptcha;
use Validator;
use Hash;
use Mail;

use App\User;
use Auth;

class RegistrationController extends Controller
{
  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create()
  {
      return View('registration.create');
  }


  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array  $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  // protected function validator(array $data)
  // {
  //     return Validator::make($data, [
  //         'name' => 'required|max:255',
  //         'email' => 'required|email|max:255|unique:users',
  //         'password' => 'required|confirmed|min:6',
  //         'phonenumber' => 'required',
  //     ]);
  // }

  /**
   * Store a newly created resource in storage.
   *
   * @param  Request  $request
   * @return Response
   */
  public function store(Request $request)
  {
  //   $rules = [
   //
  //       'email'                 => 'required|email|unique:users',
  //       'password'              => 'required|min:6|max:20',
  //       'password_confirmation' => 'required|same:password',
  //       'phonenumber'           => 'required|same:password',
  //       'g-recaptcha-response'  => 'required'
  //   ];
   //
  //   $input = Input::only(
  //         'phonenumber',
  //         'email',
  //         'password',
  //         'inputPasswordConfirm'
  //     );
   //
  //  if($this->captchaCheck() == false)
  //  {
  //           return redirect()->back()
  //               ->withErrors(['Wrong Captcha'])
  //               ->withInput();
  //  }
   //
  //   $confirmation_code = str_random(30);

    // $user = User::create([
    //         'familia' => Input::get('familia'),
    //         'imia' => Input::get('imia'),
    //         'otchestvo' => Input::get('otchestvo'),
    //         'phonenumber' => Input::get('phonenumber'),
    //         'email' => Input::get('email'),
    //         'password' => Hash::make(Input::get('password')),
    //         'confirmation_code' => $confirmation_code
    //   ]);

    // $user = User::create([
    //         'phonenumber' => Input::get('phonenumber'),
    //         'email' => Input::get('email'),
    //         'password' => Hash::make(Input::get('password')),
    //         'confirmation_code' => $confirmation_code
    //   ]);
    //
    // $arrayData = array('confirm_cod' => $confirmation_code);
    //
    // Mail::send('mails.verify', $arrayData, function($message)
    //                           use( $confirmation_code)
    // {
    //      $message->to(Input::get('email'), Input::get('imia')+ " "+Input::get('otchestvo'))
    //          ->subject('Verify your email address');
    // });
    //
    //
    // $email = Input::get('email');
    // return view('registration.confirm_account', compact('email'));


  ///  TODO : Reactiver l activation du compte par mail
  //   $confirmation_code = str_random(30);

  // $user = User::create([
  //         'familia' => $familia,
  //         'imia' => $imia,
  //         'otchestvo' => $otchestvo,
  //         'phonenumber' => Input::get('phonenumber'),
  //         'email' => Input::get('email'),
  //         'password' => bcrypt(Input::get('password')),
  //         'confirmation_code' => $confirmation_code
  //   ]);

  // $arrayData = array('confirm_cod' => $confirmation_code, 'imia' => $imia,
  //                    'otchestvo' => $otchestvo);

  //
  // Mail::send('mails.verify', $arrayData, function($message)
  //                           use( $confirmation_code, $imia, $otchestvo)
  // {
  //
  //      $message->to(Input::get('email'), $imia + " "+ $otchestvo )
  //          ->subject('Подтверждение регистрации');
  // });



    // list($familia, $imia, $otchestvo) = explode(" ", Input::get('fio'));
    $name = explode(" ", Input::get('fio'));
    switch (count($name)) {
      case 1:
        $familia = $name[0];
        $imia = " "; $otchestvo =" ";
        break;
      case 2:
          $familia = $name[0]; $imia = $name[1];
          $otchestvo =" ";
        break;
      default:
        $familia = $name[0]; $imia = $name[1];
        $otchestvo = $name[2];
        break;
    }

    /// == > Active le compte a la creation a modifier
    $user = User::create([
            'familia' => $familia,
            'imia' => $imia,
            'otchestvo' => $otchestvo,
            'phonenumber' => Input::get('phonenumber'),
            'email' => Input::get('email'),
            'password' => bcrypt(Input::get('password')),
            'confirmed' => '1',
            'status' => 'activated',
            'confirmation_code' => null,
      ]);

      $user->assignRole(2);
      $user->save();

      // Authenticate A User Instance
    Auth::login($user);

    return view('pages.thank_you');
  //  return view('pages.thank_you', compact('email');

  }

  public function confirm($confirmation_code)
  {
          if( ! $confirmation_code)
          {
              throw new InvalidConfirmationCodeException;
          }

          $user = User::whereConfirmationCode($confirmation_code)->first();

          // dd($user);

          if ( ! $user)
          {
              // throw new InvalidConfirmationCodeException;
              echo "confirmation_code".$user->confirmation_code;
          }

          $user->confirmed = 1;
          $user->status = 'activated';
          $user->confirmation_code = null;
          $user->assignRole(2);
          $user->save();

          if (Auth::attempt(['email' => $user->email, 'password' => $user->password])) {

           // Authentication passed...
           return redirect()->intended('dashboard/nedvizhimosts');
         } else{
           return Redirect('sign-in');
         }

        //  Flash::message('You have successfully verified your account.');
          // return Redirect::intended('login');
          //return Redirect::route('login');
  }

  // public function UserInputValidation(){
  //
  // }


  public function captchaCheck()
  {

      $response = Input::get('g-recaptcha-response');
      $remoteip = $_SERVER['REMOTE_ADDR'];
      $secret   = env('RE_CAP_SECRET');

      $recaptcha = new ReCaptcha($secret);
      $resp = $recaptcha->verify($response, $remoteip);
      if ($resp->isSuccess()) {
          return true;
      } else {
          return false;
      }

  }


}
