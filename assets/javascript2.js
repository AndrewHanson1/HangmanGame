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
var test = [];
//html changes/html variables
var underScoreHTML = document.getElementsByClassName("underScore");
var winsHTML = document.getElementsByClassName("wins");
var buttonTextContentA = document.getElementById("A").innerHTML
var buttonTextContentB = document.getElementById("B").innerHTML
var buttonTextContentC = document.getElementById("C").innerHTML
var buttonTextContentD = document.getElementById("D").innerHTML
var buttonTextContentE = document.getElementById("E").innerHTML
var buttonTextContentF = document.getElementById("F").innerHTML
var buttonTextContentG = document.getElementById("G").innerHTML
var buttonTextContentH = document.getElementById("H").innerHTML
var buttonTextContentI = document.getElementById("I").innerHTML
var buttonTextContentJ = document.getElementById("J").innerHTML
var buttonTextContentK = document.getElementById("K").innerHTML
var buttonTextContentL = document.getElementById("L").innerHTML
var buttonTextContentM = document.getElementById("M").innerHTML
var buttonTextContentN = document.getElementById("N").innerHTML
var buttonTextContentO = document.getElementById("O").innerHTML
var buttonTextContentP = document.getElementById("P").innerHTML
var buttonTextContentQ = document.getElementById("Q").innerHTML
var buttonTextContentR = document.getElementById("R").innerHTML
var buttonTextContentS = document.getElementById("S").innerHTML
var buttonTextContentT = document.getElementById("T").innerHTML
var buttonTextContentU = document.getElementById("U").innerHTML
var buttonTextContentV = document.getElementById("V").innerHTML
var buttonTextContentW = document.getElementById("W").innerHTML
var buttonTextContentX = document.getElementById("X").innerHTML
var buttonTextContentY = document.getElementById("Y").innerHTML
var buttonTextContentZ = document.getElementById("Z").innerHTML

//Create underscores based on length of words
var createUnderscores = function () {
    for (i = 0; i < chosen.length; i++) {

        underScore.push('_');


    }

    underScoreHTML[0].innerHTML = underScore.join(" ")


    return underScore;


}
//start and reset function
createUnderscores();

//Get users guess functions
function grabButtonContentA() {
    document.getElementById("A").innerHTML
    console.log(document.getElementById("A").innerHTML)
}
function grabButtonContentB() {
    document.getElementById("B").innerHTML
    console.log(document.getElementById("B").innerHTML)
}
function grabButtonContentC() {
    document.getElementById("C").innerHTML
    console.log(document.getElementById("C").innerHTML)
}
function grabButtonContentD() {
    document.getElementById("D").innerHTML
    console.log(document.getElementById("D").innerHTML)
}
function grabButtonContentE() {
    document.getElementById("E").innerHTML
    console.log(document.getElementById("E").innerHTML)
}
function grabButtonContentF() {
    document.getElementById("F").innerHTML
    console.log(document.getElementById("F").innerHTML)
}
function grabButtonContentG() {
    document.getElementById("G").innerHTML
    console.log(document.getElementById("G").innerHTML)
}
function grabButtonContentH() {
    document.getElementById("H").innerHTML
    console.log(document.getElementById("H").innerHTML)
}
function grabButtonContentI() {
    document.getElementById("I").innerHTML
    console.log(document.getElementById("I").innerHTML)
}
function grabButtonContentJ() {
    document.getElementById("J").innerHTML
    console.log(document.getElementById("J").innerHTML)
}
function grabButtonContentK() {
    document.getElementById("K").innerHTML
    console.log(document.getElementById("K").innerHTML)
}
function grabButtonContentL() {
    document.getElementById("L").innerHTML
    console.log(document.getElementById("L").innerHTML)
}
function grabButtonContentM() {
    document.getElementById("M").innerHTML
    console.log(document.getElementById("M").innerHTML)
}
function grabButtonContentN() {
    document.getElementById("N").innerHTML
    console.log(document.getElementById("N").innerHTML)
}
function grabButtonContentO() {
    document.getElementById("O").innerHTML
    console.log(document.getElementById("O").innerHTML)
}
function grabButtonContentP() {
    document.getElementById("P").innerHTML
    console.log(document.getElementById("P").innerHTML)
}
function grabButtonContentQ() {
    document.getElementById("Q").innerHTML
    console.log(document.getElementById("Q").innerHTML)
}
function grabButtonContentR() {
    document.getElementById("R").innerHTML
    console.log(document.getElementById("R").innerHTML)
}
function grabButtonContentS() {
    document.getElementById("S").innerHTML
    console.log(document.getElementById("S").innerHTML)
}
function grabButtonContentT() {
    document.getElementById("T").innerHTML
    console.log(document.getElementById("T").innerHTML)
}
function grabButtonContentU() {
    document.getElementById("U").innerHTML
    console.log(document.getElementById("U").innerHTML)
}
function grabButtonContentV() {
    document.getElementById("V").innerHTML
    console.log(document.getElementById("V").innerHTML)
}
function grabButtonContentW() {
    document.getElementById("W").innerHTML
    console.log(document.getElementById("W").innerHTML)
}
function grabButtonContentX() {
    document.getElementById("X").innerHTML
    console.log(document.getElementById("X").innerHTML)
}
function grabButtonContentY() {
    document.getElementById("Y").innerHTML
    console.log(document.getElementById("Y").innerHTML)
}
/*function grabButtonContentZ() {
    document.getElementById("Z").innerHTML
    console.log(document.getElementById("Z").innerHTML)
    
    
    

}*/
//set buttons to listen for clicks and activate functions
document.getElementById("A").onclick = function () { grabButtonContent("") };
document.getElementById("B").onclick = function () { grabButtonContentB("") };
document.getElementById("C").onclick = function () { grabButtonContentC("") };
document.getElementById("D").onclick = function () { grabButtonContentD("") };
document.getElementById("E").onclick = function () { grabButtonContentE("") };
document.getElementById("F").onclick = function () { grabButtonContentF("") };
document.getElementById("G").onclick = function () { grabButtonContentG("") };
document.getElementById("H").onclick = function () { grabButtonContentH("") };
document.getElementById("I").onclick = function () { grabButtonContentI("") };
document.getElementById("J").onclick = function () { grabButtonContentJ("") };
document.getElementById("K").onclick = function () { grabButtonContentK("") };
document.getElementById("L").onclick = function () { grabButtonContentL("") };
document.getElementById("M").onclick = function () { grabButtonContentM("") };
document.getElementById("N").onclick = function () { grabButtonContentN("") };
document.getElementById("O").onclick = function () { grabButtonContentO("") };
document.getElementById("P").onclick = function () { grabButtonContentP("") };
document.getElementById("Q").onclick = function () { grabButtonContentQ("") };
document.getElementById("R").onclick = function () { grabButtonContentR("") };
document.getElementById("S").onclick = function () { grabButtonContentS("") };
document.getElementById("T").onclick = function () { grabButtonContentT("") };
document.getElementById("U").onclick = function () { grabButtonContentU("") };
document.getElementById("V").onclick = function () { grabButtonContentV("") };
document.getElementById("W").onclick = function () { grabButtonContentW("") };
document.getElementById("X").onclick = function () { grabButtonContentX("") };
document.getElementById("Y").onclick = function () { grabButtonContentY("") };
document.getElementById("Z").onclick = function () { grabButtonContent("") };


//game logic




console.log(chosen)
function grabButtonContent() {
    for (x = 0; x < chosen.length; x++) {
        if (chosen.charAt(x) === document.getElementById("Z").innerHTML); {
            underScore[x] = document.getElementById("Z").innerHTML;
            underScoreHTML[0].innerHTML = underScore.join(" ");
            console.log(underScore)
            break;

            
        } 
        
        
    }
    
} 
