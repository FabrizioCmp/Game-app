@extends('layouts.app')
@section('content')
    <div class="walcomePage bkg_gradient">
        <div class="container py-4 ">
            <h1 style="font-size: 150px" class="lh-1">Hi!</h1>
            <h2 class="">Welcome to your favorite game!</h2>
            <h4 class="">If you alrady have an account 
                <a class="text-decoration-none" href="{{route("login")}}">Login</a> 
                 end play, if you don't plaese
                <a class="text-decoration-none" href="{{route("register")}}">Register</a> .
            </h4>
            <img class="position-absolute start-50 w-25" src="{{ url('/imgs/icons8-serpente-100.png') }}" alt="">
        </div>
    </div>
@endsection
