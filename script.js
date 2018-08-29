
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var squareBox = document.getElementById("squareBox").querySelectorAll("div");
var newColors = document.querySelector("#newColors");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    newColors.addEventListener('click', function () {
        reset();
    });
    
    easyBtn.addEventListener('click', function () {
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected")
    
        for (var i = 3; i < squareBox.length; i++) {
            squareBox[i].classList.remove("square");
        }
        reset();
    });
    
    hardBtn.addEventListener('click', function () {
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        
        for (var i = 0; i < squareBox.length; i++) {
            squareBox[i].classList.add("square");
        }
        reset();
    });
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
           
            var clickedColor = this; 
            var displayAttempt = document.querySelector("#displayAttempt");
            if (clickedColor.style.backgroundColor === squares[pickedColor].style.backgroundColor) {
                displayAttempt.textContent = "Correct!";
                changeColors();
                h1.style.backgroundColor = squares[pickedColor].style.backgroundColor;
                newColors.textContent = "Play Again?";
            }
            else {
                clickedColor.style.backgroundColor = "#232323";
                displayAttempt.textContent = "Try Again.";
            }
        });
    }
}

function generateRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ', ' + g + ', ' + b + ')'; 
}

function pickColor() {
   var random = Math.floor(Math.random() * squares.length);
   return random;
}

function changeColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = squares[pickedColor].style.backgroundColor;
    }
}

//generates random colors and stores into squares
function randomColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = generateRGB();
    }
}

//resets colors and answer when easy or hard is selected
function reset() {
    h1.style.backgroundColor = "steelblue";
    newColors.textContent = "New Colors";
    displayAttempt.textContent = "";
    squares = document.querySelectorAll(".square");
    randomColors();
    pickedColor = pickColor();
    colorDisplay.textContent = squares[pickedColor].style.backgroundColor;
}