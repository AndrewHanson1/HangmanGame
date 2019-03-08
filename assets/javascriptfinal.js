document.addEventListener("DOMContentLoaded", function() {

//create an array of words
var words = ["ASH", "ASPEN", "HAWTHORN", "BIRCH", "HICKORY",
    "HORNBEAM", "COTTONWOOD", "ELM", "HEMLOCK", "BASSWOOD", "MAPLE",
    "SPRUCE", "CEDAR", "OAK", "PINE", "SYCAMORE", "WILLOW", "BEECH", "BUTTERNUT", "CHERRY"]
//html changes
var underScoreHTML = document.getElementsByClassName("underScore");
var winsHTML = document.getElementsByClassName("wins");
var guessesLeftHTML = document.getElementsByClassName("guesses");
var myImage = document.querySelector('img');
var chosen;
var wins = 0;
var letter;
var arraySelector;
var startingGuessAmount = 6;
var guessesLeft = startingGuessAmount;
var underScore = [];
var inputBlocker = false;
var buttonClass = document.getElementsByTagName("li");
var letterButtons = document.getElementsByClassName("letter");
for (i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", grabButtonContent);

}



//choose word and genereate underscores and push to html
function chooseWord() {

    arraySelector = Math.floor(Math.random() * words.length);
    myImage.setAttribute("src", "assets/images/Trees/question.png");
    guessesLeft = startingGuessAmount;
    guessesLeftHTML[0].innerHTML = startingGuessAmount;
    chosen = words[arraySelector];
    underScore = [];
    inputBlocker = false;
    for (i = 0; i < chosen.length; i++) {

        underScore.push('_');
    }
    underScoreHTML[0].innerHTML = underScore.join(" ");
    for (var j = 0; j < buttonClass.length; j++) {
        buttonClass[j].setAttribute("class", "letter");

    }
    
}

//getting inner html of button and processing it
function grabButtonContent() {
    if (this.classList == "disabled") {
    }
    else {
        var letter = this.innerHTML;
        containsLetter(letter)
        this.setAttribute("class", "disabled");
    }
}
//loss notification function
function lossNotification() {
    underScoreHTML[0].innerHTML = "You lose! Try Again!"
}
// win notification
function winNotification() {
    underScoreHTML[0].innerHTML = "You Won! Play Again!"
}
//display word when they lose
function lossDisplay() {
    underScoreHTML[0].innerHTML = "The Word Was " + chosen;
}
//image changer
function imageChanger() {
    var currentWord = words[arraySelector];
    switch (currentWord) {
        case "ASH":
            myImage.setAttribute("src", "assets/images/Trees/Ash.jpg")
            break;

        case "ASPEN":
            myImage.setAttribute("src", "assets/images/Trees/Aspen.jpg")
            break;

        case "HAWTHORN":
            myImage.setAttribute("src", "assets/images/Trees/Hawthorn.jpg")
            break;

        case "BIRCH":
            myImage.setAttribute("src", "assets/images/Trees/Birch.jpg")
            break;

        case "HICKORY":
            myImage.setAttribute("src", "assets/images/Trees/Hickory.jpg")
            break;

        case "HORNBEAM":
            myImage.setAttribute("src", "assets/images/Trees/Hornbeam.jpg")
            break;

        case "COTTONWOOD":
            myImage.setAttribute("src", "assets/images/Trees/Cottonwood.jpg")
            break;

        case "ELM":
            myImage.setAttribute("src", "assets/images/Trees/Elm.jpg")
            break;

        case "HEMLOCK":
            myImage.setAttribute("src", "assets/images/Trees/Hemlock.jpg")
            break;

        case "BASSWOOD":
            myImage.setAttribute("src", "assets/images/Trees/Basswood.jpg")
            break;

        case "MAPLE":
            myImage.setAttribute("src", "assets/images/Trees/Maple.jpg")
            break;

        case "SPRUCE":
            myImage.setAttribute("src", "assets/images/Trees/Spruce.jpg")
            break;

        case "CEDAR":
            myImage.setAttribute("src", "assets/images/Trees/Cedar.jpg")
            break;

        case "OAK":
            myImage.setAttribute("src", "assets/images/Trees/Oak.jpg")
            break;

        case "PINE":
            myImage.setAttribute("src", "assets/images/Trees/Pine.jpg")
            break;

        case "SYCAMORE":
            myImage.setAttribute("src", "assets/images/Trees/Sycamore.jpg")
            break;

        case "WILLOW":
            myImage.setAttribute("src", "assets/images/Trees/Willow.jpg")
            break;

        case "BEECH":
            myImage.setAttribute("src", "assets/images/Trees/Beech.jpg")
            break;

        case "BUTTERNUT":
            myImage.setAttribute("src", "assets/images/Trees/Butternut.jpg")
            break;

        case "CHERRY":
            myImage.setAttribute("src", "assets/images/Trees/Cherry.png")
            break;



    }

}

//game logic
function containsLetter(letterToCheck) {
    var containsLetterBoolean = false;
    for (x = 0; x < chosen.length; x++) {
        if (chosen.charAt(x) === letterToCheck) {
            containsLetterBoolean = true;
            underScore[x] = letterToCheck;
            underScoreHTML[0].innerHTML = underScore.join(" ");
            

        }
    }
    if (containsLetterBoolean === false && guessesLeft >= 1 && inputBlocker == false) {
            guessesLeft--;
            guessesLeftHTML[0].innerHTML = guessesLeft;
        
        

    }

    if (guessesLeft == 0) {
        lossDisplay();
        setTimeout(lossNotification, 2000);
        setTimeout(chooseWord, 4000);

    }



    
    else {
        if (underScore.join("") == chosen && inputBlocker == false ) {
            wins++;
            guessesLeft = 8;
            winsHTML[0].innerHTML = wins;
            inputBlocker = true;
            imageChanger();
            setTimeout(winNotification, 1000);
            setTimeout(chooseWord, 2500);
            




        }

    }
}
    
    });
    

//running game logic
chooseWord();


