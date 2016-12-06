// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];
var safety = ["S", "A", "F", "E", "T", "Y"];

var word = [bears, packers];
var randomWord;
var counter;
var guessed;
var boolGuess;
var guessCounter;
var wrongGuessCounter = 0;

// START set up functions to be used

function setUp(){
	randomWord = word[Math.floor(Math.random() * word.length)];
	var blankDiv = document.getElementById("board");
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
		var newDiv = document.createElement("div");
		newDiv.innerHTML = randomWord[i];
		blankDiv.appendChild(newDiv);
		newDiv.setAttribute("class", "insert");
		counter = randomWord.length;					
	}
	console.log(randomWord);
	console.log(counter);
}

function wrongGuess(){
    var blankP = document.getElementById("guesses");
	var newP = document.createElement("p");
	newP.innerHTML = guessed;
	blankP.appendChild(newP);
	newP.setAttribute("class", "guesser");
}
// END set up functions to be used

setUp();


function reveal(i){
			var changer = document.getElementsByClassName("insert");
			changer[i].textContent = randomWord[i];
			changer[i].style.color = "black";
			changer[i].style.borderColor = "#b7c5df";
			
		}

document.onkeyup = function(event){ 
	
	userGuess = event.key;
	var userGuessCap = userGuess.toUpperCase();
	guessCounter = 0;
	

	for (var i = 0, n = randomWord.length; i < n; i++)
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
		 	console.log("Guess counter is: " + guessCounter);
		}
	}
 		
        if (guessCounter == randomWord.length)
        {
   			wrongGuess();
   			wrongGuessCounter++;
   			console.log("Wrong is: " + wrongGuessCounter);
        }
	
        if (wrongGuessCounter == 5)
	{
		document.getElementById("lose").style.display = "block";
	}

	// if (counter <= 0)
	// {
	// 	document.getElementById("win").style.display = "block";
	// }
	
	
	
};





// // do {

// // 	guesser();

// // }
// // while ( win == false);
