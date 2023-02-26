<?php
use App\Models\User;
$user = User::findOrFail(Auth::id());
?>


@extends('layouts.app')

@section("content")
    <div class="bkg_gradient vh-100">
        <div class="container">
            <div class="profile_info"> 
                <h1>Name: <span>{{$user->name}}</span></h1>
            </div>
            <a href="{{Route("admin.game")}}" class="btn btn-warning">Play a Game</a>
        </div>
    </div>
@endsection