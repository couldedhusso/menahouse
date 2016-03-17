<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exception;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Intervention\Image\Facades\Image ;

use App\Images;
use App\User;
use App\Profiles;

use Storage;

use Auth;

class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $CloudStorage = Storage::disk('s3');
        $id = Input::get('user_id');
        $user = User::find($id);

        // $user->profile()->save(new Profiles);
        // $imgprofi = Images::whereimageable_id($profil->user_id)->get();

      if ($this->isCurrent($id) ) {
          if (Input::get('imia') !="" ) {
              $user->imia = Input::get('imia');
              $user->save();
          }

          if (Input::get('familia') !="") {
              $user->familia =  Input::get('familia');
              $user->save();
          }

          try {
              $profile = Profiles::whereuser_id($user->id)->firstOrfail();

          } catch (ModelNotFoundException $e) {
               $profile = Profiles::create(['user_id' => $id]);
          }

          if (Input::get('gorod') !="") {
              $profile->location = Input::get('gorod');
          }

          $pic = Input::file('image');
          if ($pic->isValid()) {

                $filename = str_random(8)."-".$pic->getClientOriginalName();
                if (! $profile->hasprofile ) {

                    $profile->hasprofile = 1 ;

                } else {

                    $old_imag_path = $profile->images->path ;
                    $profile->images()->delete();
                    $delFilePath = 'dev/profileimg/' .$old_imag_path ;
                    $CloudStorage->delete($delFilePath);
                }


                $img = new Images ;

                $img = $profile->images()->create(array('path' => $filename));
                $profile->images()->save($img);

                $filePath = 'dev/profileimg/' .$filename;
                $CloudStorage->put($filePath, file_get_contents($pic), 'public');
            }

      }
          $profile->save();
          return Redirect('/home');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function isCurrent($id){
      return ( Auth::user()->id == $id );
    }

    public function savepic($img, $filename){

        $storage_path = public_path().'/storage/profil/' ;


        if(! File::exists($storage_path)) {
            File::makeDirectory($storage_path);
        }

        // $img->resize(200, 200);
        // $img->save($storage_path.$filename);

        $img->move($storage_path, $filename);
    }

    public function deletepic($filename){
        $pic =  public_path().'/storage/profil/'.$filename ;
        if(File::exists($pic)){
            File::delete($pic);
        }
    }
}
