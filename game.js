var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var numberOfPresses = 0;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //flash animation
    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playColorAudio(randomChosenColour); //play color

    level++
    $("#level-title").text("Level " + level);

    userClickedPattern= [];
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    } else {
        console.log("Wrong");
        playColorAudio("wrong");
        $("body").addClass("game-over");
        setTimeout(function (){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Press Any Key to Restart");
        startOver();
    }

}

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    numberOfPresses = 0;
}

$(".btn").on("click", function () { 
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playColorAudio(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

// Audio
function playColorAudio(key){
    switch (key) {
        case 'red':
            var redAudio = new Audio("./sounds/red.mp3");
            redAudio.play();
            break;
        case 'blue':
            var blueAudio = new Audio("./sounds/blue.mp3");
            blueAudio.play();
            break;
        case 'green':
            var greenAudio = new Audio("./sounds/green.mp3");
            greenAudio.play();
            break;
        case 'yellow':
            var yellowAudio = new Audio("./sounds/yellow.mp3");
            yellowAudio.play();
            break;
        case 'wrong':
            var wrongAudio = new Audio("./sounds/wrong.mp3");
            wrongAudio.play();
        default:
            break;
    }
}

//Button Press Animation
function animatePress(currentColour){
    $("." + currentColour).addClass("pressed");
    setTimeout(function (){
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

//Keypress Start Sequence
$(document).on("keydown", function () {
    numberOfPresses++;
    if (numberOfPresses === 1){
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});
