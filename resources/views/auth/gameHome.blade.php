
@extends('layouts.app')
@section('content')

    <div class="bkg_gradient vh-100 py-3">
        <h1 class="title_game">Snake</h1>

        <canvas id="board">
        </canvas>

        <div class="score_container">
            <span class="block_score"></span>
             <span id="score"></span>
        </div>

    </div>
@endsection
