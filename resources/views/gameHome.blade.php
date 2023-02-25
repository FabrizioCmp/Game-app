{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Snake</title>
    @vite(['resources/scss/app.scss','resources/js/main.js','resources/js/app.js'])
</head> --}}
@extends("layouts.app")
@section("content")
    
<body>
    <h1 class="title_game">Snake</h1>
    <canvas id="board">
        
    </canvas>
    <div class="score_container">
        <h1>SCORE <span id="score" ></span></h1>

    </div>
    
</body>

@endsection

