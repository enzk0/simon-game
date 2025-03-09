var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    console.log(randomChosenColour);

    $("." + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    colorAudio(randomChosenColour);
}

function colorAudio(key){
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
            var redAudio = new Audio("./sounds/yellow.mp3");
            yellowAudio.play();
            break;
        // case wrong:
        //     var wrongAudio = new Audio("./sounds/wrong.mp3");
        //     wrongAudio.play();
        default:
            break;
    }
}

nextSequence();