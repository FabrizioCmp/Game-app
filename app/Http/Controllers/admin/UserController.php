<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function game(){
        return view("admin.gameHome");
    }

    public function profile(){
        return view('admin.profile');
    }
}
