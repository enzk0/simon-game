var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    console.log(randomChosenColour);

    //flash animation
    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playColorAudio(randomChosenColour); //play color

    level++
    $("#level-title").text("Level " + level);

}

$(".btn").on("click", function () { 
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playColorAudio(userChosenColour);
    animatePress(userChosenColour);
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
        // case wrong:
        //     var wrongAudio = new Audio("./sounds/wrong.mp3");
        //     wrongAudio.play();
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
var numberOfPresses = 0;
$(document).on("keydown", function () {
    numberOfPresses++;
    if (numberOfPresses === 1){
        $("#level-title").text("Level " + level);
        nextSequence();
    }
});
