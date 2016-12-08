// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];
var safety = ["S", "A", "F", "E", "T", "Y"];
var cowboys = ["C", "O", "W", "B", "O", "Y", "S"];
var validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var word = [bears, cowboys];
var randomWord;
var counter;
var guessed;
var guessCounter;
var wrongGuessCounter = 0;
var boolWin = false;
var winCounter = 0;
var lossCounter = 0;
var allLettersGuessed = "";

// START set up functions to be used





function reset() {
    var clearBoard = document.getElementById("board");
    var clearGuess = document.getElementById("guesses");
    var clearLoss = document.getElementById("lose");
    var clearWin = document.getElementById("win");
    while (clearBoard.hasChildNodes()) {
        clearBoard.removeChild(clearBoard.firstChild);
    }
    while (clearGuess.hasChildNodes()) {
        clearGuess.removeChild(clearGuess.firstChild);
    }
    while (clearWin.hasChildNodes()) {
        clearWin.removeChild(clearWin.firstChild);
    }
    while (clearLoss.hasChildNodes()) {
        clearLoss.removeChild(clearLoss.firstChild);
    }

    setUp();
    return;

};

function setUp() {
    randomWord = word[Math.floor(Math.random() * word.length)];
    var blankDiv = document.getElementById("board");
    for (var i = 0, n = randomWord.length; i < n; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "j";
        blankDiv.appendChild(newDiv);
        newDiv.setAttribute("class", "insert");
        counter = randomWord.length;
    }
    console.log(randomWord);
    console.log(counter);
};

function setWins() {
    var spanDiv = document.getElementById("winner");
    var newDiv = document.createElement("p");
    newDiv.innerHTML = winCounter;
    spanDiv.appendChild(newDiv);

};

function setlosses() {
    var spanDiv = document.getElementById("loser");
    var newDiv = document.createElement("p");
    newDiv.innerHTML = lossCounter;
    spanDiv.appendChild(newDiv);

};

function winCount() {
    var changer = document.getElementById("winner");
    changer.textContent = winCounter;
}

function lossCount() {
    var changer = document.getElementById("loser");
    changer.textContent = lossCounter;
};

function wrongGuess() {
    var blankP = document.getElementById("guesses");
    var newP = document.createElement("p");
    newP.innerHTML = guessed;
    blankP.appendChild(newP);
    newP.setAttribute("class", "guesser");
};

function reveal(i) {
    var changer = document.getElementsByClassName("insert");
    changer[i].textContent = randomWord[i];
    changer[i].style.color = "black";
    changer[i].style.borderColor = "transparent";

};



setUp();
setWins();
setlosses();
document.onkeyup = function(event) {
validLettersGuessed = "DEG";
    userGuess = event.key;
    var userGuessCap = userGuess.toUpperCase();
    console.log(validLettersGuessed.indexOf(userGuessCap) + "progress");
    if (userGuessCap){
    	if (validLetters.indexOf(userGuessCap) > -1)
    	{
    		console.log(userGuessCap);
    		console.log(validLetters.indexOf(userGuessCap));
    		console.log("awesome it worked ic");
    	}
    }
    guessCounter = 0;
	
    for (var i = 0, n = randomWord.length; i < n; i++) {
        
        if (userGuessCap == randomWord[i]) 
        {
        	if (document.getElementsByClassName("insert")[i].textContent == "p");
				{
				reveal(i);
		        counter--;
		        console.log(counter);
		    	}
	    }	      

        if (userGuessCap != randomWord[i]) {
            guessCounter++;
            guessed = userGuessCap;
            console.log("Guess counter is: " + guessCounter);
        }
    }

    if (guessCounter == randomWord.length) {
        wrongGuess();
        wrongGuessCounter++;
        console.log("Wrong is: " + wrongGuessCounter);
    }

    if (wrongGuessCounter == 5) {
        lossCounter++;
        lossCount();
        setTimeout(function() { confirm("Play again???"); }, 10);
        document.getElementById("lose").style.display = "block";
        wrongGuessCounter = 0;
        guessCounter = 0;

    }

    if (counter == 0) {
        winCounter++;
        winCount();
        document.getElementById("win").style.display = "block";
        setTimeout(function() { confirm("Play again??? Click 'Play again' button"); }, 500);
        ev.stopPropagation();
        counter = randomWord.length;

    }


};




// scroll animation //



$(function() {
    $('.marqueetop').marquee({
        //speed in milliseconds of the marquee
        duration: 7500,
        //gap in pixels between the tickers
        gap: 500,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
});

$(function() {
    $('.marqueebottom').marquee({
        //speed in milliseconds of the marquee
        duration: 7500,
        //gap in pixels between the tickers
        gap: 1000,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: false,
    });
});




// // do {

// // 	guesser();

// // }
// // while ( win == false);
