<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class FavorisUtilisateurController extends Controller
{
    public function bookmarkItem(Request $data){
        $user_id = Auth::user()->id;
        $bkm =  Bookmarked::whereuser_id($user_id)
                            ->where('obivlenie_id', '=', $id)
                            ->first();

        $data = new carbon;
        $bkm_date = date($data, "d.m.Y");

        if ($bkm == null ) {
            $favoris = Bookmarked::create([
              'user_id' => $user_id,
              'obivlenie_id' => $id,
              'created_at' => $bkm_date
            ]);
        }

       return Redirect('dashboard/advertisements');
    }

    public function removeItem(Request $data){

    }

    public function getBookmarkItemById($req){

    }
}
