// ALL GLOBAL VARIABLE DECLARATIONS
const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
const buttons = document.querySelectorAll(".container button");
var started = 0;
var level = 0;

// TO START THE GAME AFTER A KEY IS PRESSED
document.addEventListener("keydown", function () {
  if (started == 0) {
    started = 1;
    nextSequence();
  }
});

// FUNCTION TO ANIMATE CLICKED BUTTON
function animate(color) {
  var clickedButton = "#" + color;
  document.querySelector(clickedButton).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(clickedButton).classList.remove("pressed");
  }, 100);
}

// FUNCTION TO PLAY SOUND
function playSound(name) {
  var sound = "sounds/" + name + ".mp3";
  var audio = new Audio(sound);
  audio.play();
}

// FUNTION TO RESTART THE GAME
function startOver() {
  level = 0;
  gamePattern = [];
  started = 0;
}

// FUNCTION TO CHECK IF USER HAS ENTERED CORRECT PATTERN
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("Failure");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.querySelector("body").classList.add("game-over");
    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 200);
    document.querySelector("#level-title").innerHTML =
      "Game Over. Press Any Key To Restart";
    startOver();
  }
}

// FUNCTION TO GENERATE NEXT SEQUENCE
function nextSequence() {
  userClickedPattern = [];
  level = level + 1;
  document.querySelector("#level-title").innerHTML = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 3);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  document.querySelector("#" + randomChosenColor).classList.add("fade-out");
  setTimeout(function () {
    document
      .querySelector("#" + randomChosenColor)
      .classList.remove("fade-out");
  }, 300);
  playSound(randomChosenColor);
}

//TO DETECT MOUSE CLICK ON BUTTON AND PRODUCE CORRESSPONDING SOUND AND ANIMATION
buttons.forEach((item) =>
  item.addEventListener("click", function () {
    var userChosenColor = this.getAttribute("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animate(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  })
);

// // ALL GLOBAL VARIABLE DECLARATIONS
// var buttonColors = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level = 0;
// var started = false;

// //ALL FUNCTION DECLARATIONS

// //FUNCTIN TO PLAY SOUND OF CORRESSPONDING BUTTON CLICK
// function playSound(name){
//   var audio = new Audio("sounds/"+name+".mp3");
//   audio.play();
// }

// //FUNCTIN TO ANIMATE THE CLICKED BUTTON
// function animatePress(currentColor){
//   $(currentColor).addClass("pressed");
//   setTimeout(function(){
//     $(currentColor).removeClass("pressed");
//   }, 100)
// }

// //FUNCTION TO START NEW GAME
// function nextSequence(){
//   numOfClick = 0;
//   userClickedPattern = [];
//   level = level + 1;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor((Math.random() * 4));
//   var randomChosenColor = buttonColors[randomNumber];

//   gamePattern.push(randomChosenColor);

//   $('#' + randomChosenColor).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColor);
// }

// //FUNCTION TO RESTART GAME AFTER GAME IS OVER
// function startOver(){
//   level = 0;
//   gamePattern = [];
//   userClickedPattern = [];
//   started = false;
// }

// //FUNCTION TO CHECK INPUT SEQUENCE AGAINST AUTO GENERATED SEQUENCE
// function checkAnswer(currentLevel){
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//     console.log("success");
//     if (userClickedPattern.length === gamePattern.length){
//       setTimeout(function(){
//         nextSequence();
//       }, 1000);
//     }
//   }
//   else{
//     console.log("wrong");
//     var audio = new Audio("sounds/wrong.mp3");
//     audio.play();
//     $("body").addClass("game-over");
//     setTimeout(function(){
//       $("body").removeClass("game-over");
//     }, 400)
//     $("#level-title").text("Game over, press any key to restart");
//     startOver();
//   }
// }

// //MAIN CONTENT OF GAME.JS

// //TO DETECT KEYBOARD KEY PRESS AND START NEW GAME IF CURRENT GAME IS NOT IN PROGRESS
// $(document).keydown(function(event){
//   if (started == false){
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// })

// //TO DETECT MOUSE CLICK ON BUTTON AND PRODUCE CORRESSPONDING SOUND AND ANIMATION
// $(".btn").click(function(){
//   var userChosenColor = $(this).attr("id");
//   userClickedPattern.push(userChosenColor);
//   playSound(userChosenColor);
//   animatePress(this);
//   checkAnswer(userClickedPattern.length - 1);
// })
