//******************** CONSTANTS & VARIABLES
//board
const rows = 30;
const columns = 30;
const square = 25;
let board = null;
let canvas = null;
let gameOver = false;
let score = 0;
let gameStarted = false;


//snake
let snakeHeadX = square * 5;
let snakeHeadY = square * 5;
let speedX = 0;
let speedY = 0;
let snakeBody = [];
let currentDirection = "";



//food
let foodX = square * 18;
let foodY = square * 18;



//*******************GAME 
window.onload = function () {
    createBoard();
    document.addEventListener("keydown", changeDirectionSnake);
    document.addEventListener("keydown", (e) => {
        
        if ((e.code === "ArrowDown" || e.code === "ArrowUp" || e.code === "ArrowLeft" || e.code === "ArrowRight") && !gameStarted ) {
            gameStarted = true;
            console.log("hey");
            placeBanner();
        }

    })

setInterval(updateBoard, 80);
foodPlacement();
updateScore();

}







//******************** FUNCTIONS
function createBoard() {
    board = document.getElementById("board");
    board.height = square * rows;
    board.width = square * columns;
    canvas = board.getContext("2d");
}

function updateBoard() {

    if (gameOver) {
        return;
    }

    //draw the black part of the board
    canvas.fillStyle = "black";
    canvas.fillRect(0, 0, board.height, board.height,);

    //draw the food
    canvas.fillStyle = "red";
    canvas.fillRect(foodX, foodY, square, square);



    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeHeadX, snakeHeadY];
    }
    //draw the snake
    canvas.fillStyle = "lime";
    snakeHeadX += speedX * square;
    snakeHeadY += speedY * square;
    onBorders();
    canvas.fillRect(snakeHeadX, snakeHeadY, square, square);
    for (let i = 0; i < snakeBody.length; i++) {
        canvas.fillRect(snakeBody[i][0], snakeBody[i][1], square, square);
    }
    checkGameOver();
    snakeEatFood();
}

function placeBanner() {
    let bunnerEl = document.getElementById("start_banner");
    console.log(bunnerEl);
    // if (gameStarted) {
    //     bunnerEl.classList.add("invisible");
    // } else if(!gameStarted){
    //     bunnerEl.classList.add("invisible");
    // }
    (gameStarted) ? bunnerEl.classList.add("invisible"): bunnerEl.classList.toggle("invisible");
}

function foodPlacement() {

    foodX = Math.floor(Math.random() * rows) * square;
    foodY = Math.floor(Math.random() * columns) * square;

}

function changeDirectionSnake(e) {
    if (e.code == "ArrowDown" && speedY != -1) {
        speedY = 1;
        speedX = 0;
        currentDirection = "down";
    } else if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
        currentDirection = "up";
    } else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
        currentDirection = "left";
    } else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
        currentDirection = "right";
    }
}

function snakeEatFood() {
    if (snakeHeadX === foodX && snakeHeadY === foodY) {
        snakeBody.push([foodX, foodY]);
        foodPlacement();
        score++;
        updateScore();
    }
}

function checkGameOver() {
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeHeadX === snakeBody[i][0] && snakeHeadY === snakeBody[i][1]) {
            gameOver = true;
            score = 0;
            gameStarted = false;
            placeBanner();
        }
    }
}

function updateScore() {
    let scoreEl = document.getElementById("score");
    scoreEl.innerHTML = score
}

function onBorders() {
    if (snakeHeadX == -square && currentDirection === "left") {
        snakeHeadX = square * columns;
    }
    if (snakeHeadX == square * columns && currentDirection === "right") {
        snakeHeadX = 0
    }
    if (snakeHeadY == -square && currentDirection == "up") {
        snakeHeadY = square * rows;
    }
    if (snakeHeadY == square * rows && currentDirection === "down") {
        snakeHeadY = 0;
    }
}