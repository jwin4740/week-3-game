// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];

var word = [bears, packers, fumble];
var randomWord;
var zCounter;

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
		zCounter = randomWord.length;					
	}
	console.log(randomWord);
	console.log(zCounter);
}

function changeTextBefore(){
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
		var changer = document.getElementsByClassName("insert");
		changer[i].textContent = "Z";
	}
}

// END set up functions to be used

setUp();
changeTextBefore();

document.onkeyup = function(event){ 
	
	userGuess = event.key;
	var userGuessCap = userGuess.toUpperCase();

	for (var i = 0, n = randomWord.length; i < n; i++)
	{
		
		function reveal(){
			var changer = document.getElementsByClassName("insert");
			changer[i].textContent = randomWord[i];
			changer[i].style.color = "black";
			changer[i].style.borderColor = "#b7c5df";
			// newDiv.setAttribute("id", "replace");
		}
			 if (userGuessCap == randomWord[i])
			{
				reveal();
				zCounter--;
				console.log(zCounter);	
			}
			
	}
		if (zCounter <= 0)
			{
				alert("You win!");
			}
};





// // do {

// // 	guesser();

// // }
// // while ( win == false);
