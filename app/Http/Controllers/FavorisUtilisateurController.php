<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class FavorisUtilisateurController extends Controller
{
    public function bookmarkItem(Request $data){

        /// TODO :   RENAME obivlenie_id TO  item_id

        if (Auth::check()) {

        }

        $user_id = Auth::user()->id;

       return Redirect('dashboard/advertisements');
    }

    public function removeItem(Request $data){

    }

    public function getBookmarkItemById($req){

    }

    private  function getbookmarked($id, $userID, $bookmarkable)
    {


      $bkm =  Bookmarked::whereuser_id($userID)
                          ->wherebookmarkable_id($id)
                          >AndWhere('deleted', '=', false )
                          ->first();

      if ($bkm == null ) {

          $date = date_create(Carbon::now());
          $bkm_date = date_format($date,"d.m.Y");

          $img = new Images ;
          $img = $obivlenie->images()->create(array('path' => $filename));

          $imgvalue->move($StoragePath["storage"] , $filename);

         //  $imgvalue->move(public_path().'/storage/pictures' , $filename);
          $obivlenie->images()->save($img);

          $favoris = Bookmarked::create([
            'user_id' => $userID,
            'obivlenie_id' => $id,
          ]);
      } else {
          $bkm->deleted = true;
          $bkm->save();
      }

    }

    private  function getbookmarked($id)
    {
      # code...
    }
}
