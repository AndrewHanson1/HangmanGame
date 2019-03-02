//create an array of words
var words = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIXTEEN"]
//Choose word randomly
var arraySelector = Math.floor(Math.random() * words.length);
var chosen = words[arraySelector]
//vars

var rightLetters = [];
var wrongLetters = [];
var underScore = [];
var wins = 0;
var flag = 0;
var hasntWon = true;
//html changes
var underScoreHTML = document.getElementsByClassName("underScore");
var winsHTML = document.getElementsByClassName("wins");



//Create underscores based on length of words
function createUnderscores() {
    for (i = 0; i < chosen.length; i++) {

        underScore.push('_');


    }
    underScoreHTML[0].innerHTML = "  ";
    underScore = [];
    chosen
    underScoreHTML[0].innerHTML = underScore.join(" ");
}

//start and reset function
createUnderscores();


//Get users guess
document.onkeyup = function (event) {
    var keyWord = String.fromCharCode(event.keyCode);


    for (x = 0; x < chosen.length; x++) {

        //if right 
        if (chosen.charAt(x) == keyWord) {
            console.log(keyWord);
            rightLetters.push(keyWord);
            //replace underscore
            underScore[x] = keyWord;
            underScoreHTML[0].innerHTML = underScore.join(" ");
            flag = 1;






        }
        //declare winner
        if (underScore.join("") == chosen) {

            if (hasntWon) {
                wins++;
                winsHTML[0].innerHTML = wins;
                hasntWon = false
                createUnderscores();
            }










        }
    }
    //if wrong push to wrong array

    if (flag == 0) {
        checkValue(wrongLetters, chosen.charAt(x))
        console.log(keyWord)

        wrongLetters.push(keyWord);

        wrongLettersHTML[0].innerHTML = wrongLetters.join(" ");
    } flag = 0;

}










