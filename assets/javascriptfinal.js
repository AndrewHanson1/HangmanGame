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
var startingGuessAmount = 6;
var guessesLeft = startingGuessAmount;
var underScore = [];
var buttonClass = document.querySelectorAll("li");
var letterButtons = document.getElementsByClassName("letter");
for (i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", grabButtonContent);

}


//choose word and genereate underscores and push to html
function chooseWord() {

    var arraySelector = Math.floor(Math.random() * words.length + 1);
    myImage.setAttribute("src", "assets/images/Trees/question.png");
    guessesLeft = startingGuessAmount;
    guessesLeftHTML[0].innerHTML = startingGuessAmount;
    chosen = words[arraySelector];
    underScore = [];
    for (i = 0; i < chosen.length; i++) {

        underScore.push('_');
    }
    underScoreHTML[0].innerHTML = underScore.join(" ");
    for (j = 0; j <= buttonClass.length; j++) {
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
function lossNotification(){
    underScoreHTML[0].innerHTML = "You lose! Try Again!"
}
// win notification
function winNotification(){
    underScoreHTML[0].innerHTML = "You Won! Play Again!"
}
//display word when they lose
function lossDisplay(){
    underScoreHTML[0].innerHTML = "The Word Was " + chosen;
}
//image changer
function imageChanger(){
    var number = Math.floor(Math.random() * words.length + 1);
    switch(number){
        case 0: 
        myImage.setAttribute("src", "assets/images/Trees/Ash.jpg")
        break;
        
        case 1: 
        myImage.setAttribute("src", "assets/images/Trees/Asepn.jpg")
        break;

        case 3: 
        myImage.setAttribute("src", "assets/images/Trees/Hawthorn.jpg")
        break;
        
        case 4: 
        myImage.setAttribute("src", "assets/images/Trees/Birch.jpg")
        break;

        case 5: 
        myImage.setAttribute("src", "assets/images/Trees/Hickory.jpg")
        break;

        case 6: 
        myImage.setAttribute("src", "assets/images/Trees/Hornbeam.jpg")
        break;

        case 7: 
        myImage.setAttribute("src", "assets/images/Trees/Cottonwood.jpg")
        break;

        case 8: 
        myImage.setAttribute("src", "assets/images/Trees/Elm.jpg")
        break;

        case 9: 
        myImage.setAttribute("src", "assets/images/Trees/Hemlock.jpg")
        break;

        case 10: 
        myImage.setAttribute("src", "assets/images/Trees/Basswood.jpg")
        break;

        case 11: 
        myImage.setAttribute("src", "assets/images/Trees/Maple.jpg")
        break;
        
        case 12: 
        myImage.setAttribute("src", "assets/images/Trees/Spruce.jpg")
        break;

        case 13: 
        myImage.setAttribute("src", "assets/images/Trees/Cedar.jpg")
        break;

        case 14: 
        myImage.setAttribute("src", "assets/images/Trees/Oak.jpg")
        break;

        case 15: 
        myImage.setAttribute("src", "assets/images/Trees/Pine.jpg")
        break;

        case 16: 
        myImage.setAttribute("src", "assets/images/Trees/Sycamore.jpg")
        break;

        case 17: 
        myImage.setAttribute("src", "assets/images/Trees/Willow.jpg")
        break;

        case 18: 
        myImage.setAttribute("src", "assets/images/Trees/Beech.jpg")
        break;

        case 19: 
        myImage.setAttribute("src", "assets/images/Trees/Butternut.jpg")
        break;

        case 20: 
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
    if (containsLetterBoolean === false) {
        guessesLeft--;
        guessesLeftHTML[0].innerHTML = guessesLeft;

    }

    if (guessesLeft == 0) {
        lossDisplay();
        setTimeout(lossNotification, 2000);
        setTimeout(chooseWord, 4000);

    }




    else {
        if (underScore.join("") == chosen) {
            wins++;
            guessesLeft = 8;
            winsHTML[0].innerHTML = wins;
            imageChanger();
            setTimeout(winNotification, 1000);
            setTimeout(chooseWord, 2500);
            



        }

    }
}
chooseWord();


