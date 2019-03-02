//create an array of words
var words = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIXTEEN"]
//html changes
var underScoreHTML = document.getElementsByClassName("underScore");
var winsHTML = document.getElementsByClassName("wins");
var chosen;
var wins = 0;
var startingGuessAmount = 5;
var guessesLeft = startingGuessAmount;
var underScore = [];
var letterButtons = document.getElementsByClassName("letter");
for (i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", grabButtonContent)
}



//choose word and genereate underscores and push to html
function chooseWord() {
    var arraySelector = Math.floor(Math.random() * words.length);
    chosen = words[arraySelector];
    underScore = [];
    for (i = 0; i < chosen.length; i++) {

        underScore.push('_');

    }
    underScoreHTML[0].innerHTML = underScore.join(" ");

}
//getting inner html of button and processing it
function grabButtonContent() {
    var letter = this.innerHTML;
    containsLetter(letter)



}

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
         if(guessesLeft == 0){
             alert("you lost");
             chooseWord();
         }



    }
    else {
        if (underScore.join("") == chosen) {
            wins++;
            guessesLeft = startingGuessAmount;
            winsHTML[0].innerHTML = wins;
            chooseWord();


        }

    }
}
chooseWord()


