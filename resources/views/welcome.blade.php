@extends('layouts.app')
@section('content')
    <div class="walcomePage">
        <div class="container my-4 ">
            <h1 style="font-size: 150px" class="lh-1">Hi!</h1>
            <h2 class="">Welcome to your favorite game!</h2>
            <h4 class="">If you alrady have an account Login end play, if you don't plaese register.</h4>
            <img class="position-absolute start-50 w-25" src="{{ url('/imgs/icons8-serpente-100.png') }}" alt="">
        </div>
    </div>
@endsection
