@extends('layouts.app')
@section('content')
    <div class="bkg_gradient vh-100 py-3">
        <h1 class="title_game">Snake</h1>

        <div id="start_banner" class="alert alert-success w-50 m-auto mb-4" role="alert">
            To start the game perss an arrow key in the diraction you want to move
        </div>
        <div class="text-center">
            <button id="btn_restart" class="btn btn-warning d-none " onClick="window.location.reload();">New game</button>
        </div>

        <canvas id="board">
        </canvas>

        <div class="score_container">
            <span class="block_score"></span>
            <span id="score"></span>
        </div>




    </div>
@endsection
