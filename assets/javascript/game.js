

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
var boolOver = false;
var winCounter = 0;
var lossCounter = 0;
var allLettersGuessed = "";

// START set up functions to be used






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

	function alertWin (){
		var blankP = document.getElementById("alert");
	    var newP = document.createElement("h1");
	    newP.innerHTML = "You won";
	    blankP.appendChild(newP);
};

	function alertLoss (){
		var blankP = document.getElementById("alert");
	    var newP = document.createElement("h1");
	    newP.innerHTML = "You Lossed";
	    blankP.appendChild(newP);
};

function alertGuessedAlready (){
		var blankP = document.getElementById("alert");
	    var newP = document.createElement("h1");
	    newP.innerHTML = "You already guessed that letter; try again";
	    blankP.appendChild(newP);
};

function alertInvalidGuess (){
		var blankP = document.getElementById("alert");
	    var newP = document.createElement("h1");
	    newP.innerHTML = "Invalid guess (not a letter); try again";
	    blankP.appendChild(newP);
};

function reset() {
    var clearBoard = document.getElementById("board");
    var clearGuess = document.getElementById("guesses");
    var clearLoss = document.getElementById("#lose");
    var clearWin = document.getElementById("#win");
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
    boolOver = false;
    
    return;
    

};



setUp();
setWins();
setlosses();

document.onkeyup = function(event) {
    userGuess = event.key;
    console.log(boolOver);
    var userGuessCap = userGuess.toUpperCase();
    guessCounter = 0;
    	
    for (var i = 0, n = randomWord.length; i < n; i++) {
        
	    if (validLetters.indexOf(userGuessCap) > -1 && boolOver == false)
	    {  
	    	if (allLettersGuessed.indexOf(userGuessCap) > -1)
		    {
		    	alertGuessedAlready();
		    	return;
		    }

		    else   
		    {
		        if (userGuessCap == randomWord[i]) 
		        {
					reveal(i);
					counter--;
					console.log(counter);
					 
			    }	      

		        if (userGuessCap != randomWord[i]) 
		        {
		            guessCounter++;
		            guessed = userGuessCap;
		            
		        }
	    	}
	    }
	    else
	    {
	    	alertInvalidGuess();
	    	return;
	    }	
	}

	allLettersGuessed += userGuessCap;
    if (guessCounter == randomWord.length) {
        wrongGuess();
        wrongGuessCounter++;
        console.log("Wrong is: " + wrongGuessCounter);
    }
// user loses the game
    if (wrongGuessCounter == 5) {
        lossCounter++;
        lossCount();
       	alertLoss();
       	boolOver = true;
       	console.log(boolOver);
        wrongGuessCounter = 0;
        guessCounter = 0;

    }
// user wins the game
    if (counter == 0) {
        winCounter++;
        winCount();
        alertWin();
        boolOver = true;
        console.log(boolOver);
        counter = randomWord.length;

    }
console.log("You have guessed" + allLettersGuessed);

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
