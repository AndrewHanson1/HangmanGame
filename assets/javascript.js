//create an array of words
var words = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIXTEEN"]
//Choose word randomly
var arraySelector = Math.floor(Math.random() * words.length);
var chosen = words[arraySelector]
//vars
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var rightLetters = [];
var wrongLetters = [];
var underScore = [];
var wins = 0;
var losses = 0;
var flag = 0;
//html changes
var underScoreHTML = document.getElementsByClassName("underScore");
var winsHTML = document.getElementsByClassName("wins");
var wrongLettersHTML = document.getElementsByClassName("wrong1");
//var stored = chosen.charAt(x)



//Create underscores based on length of words
 var createUnderscores = function () {
    for (i = 0; i < chosen.length; i++) {
        
        underScore.push('_');


    }
    
    underScoreHTML[0].innerHTML = underScore.join(" ")
    
    
    return underScore;


}
createUnderscores();
//start and reset function

 
    
 
//run underscore function



//Get users guess
document.onkeyup = function (event) {
    var keyWord = String.fromCharCode(event.keyCode);

    for (x = 0; x < chosen.length; x++) {

        //if right 
        if (chosen.charAt(x) == keyWord) {
            console.log(x)
            rightLetters.push(keyWord);
            //replace underscore
            underScore[x] = keyWord;
            underScoreHTML[0].innerHTML = underScore.join(" ");
            flag = 1;
            
            
            


        }
        //declare winner
        if (underScore.join("") == chosen) {
            wins++
            winsHTML[0].innerHTML = wins
            
            underScoreHTML[0] = "test"
            
            
            
            
            
            
        }
    }
    //if wrong push to wrong array

    if (flag == 0) { 
        wrongLetters.push(keyWord);
        
        wrongLettersHTML[0].innerHTML = wrongLetters.join(" ");
    } flag = 0;

}

    








