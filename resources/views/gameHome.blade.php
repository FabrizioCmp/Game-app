
@extends('layouts.app')
@section('content')

    <body>
        <h1 class="title_game">Snake</h1>

        <canvas id="board">
        </canvas>

        <div class="score_container">
            <span class="block_score"></span>
             <span id="score"></span>
        </div>

    </body>
@endsection
