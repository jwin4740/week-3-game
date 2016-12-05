// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];

var word = [bears, packers];
var randomWord;
var newDiv;

    function setUp(){
	    randomWord = word[Math.floor(Math.random() * word.length)];
	    var blankDiv = document.getElementById("board");
		for (var i = 0, n = randomWord.length; i < n; i++)
			{
				var newDiv = document.createElement("div");
				newDiv.innerHTML = randomWord[i];
				blankDiv.appendChild(newDiv);
				newDiv.setAttribute("id", "child");
				newDiv.setAttribute("class", "insert");
				
			}
		console.log(randomWord);
}

function reveal(){
	var div = document.getElementById("replace");
	div.setAttribute("class", "insert");
}

function keepHidden(){
	var div = document.getElementById("replace");
	div.setAttribute("class", "keepHidden"); 
}

// function clearBoard() {
   
// var div = document.getElementById("board");
// while (div.hasChildNodes()) {   
//     div.removeChild(div.firstChild);
// }
// }

function changeText(){
	document.getElementById("replace").textContent = "Paragraph changed!";
}




setUp();


document.onkeyup = function(event){ 
	
	userGuess = event.key;
	var userGuessCap = userGuess.toUpperCase();
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
			if (userGuessCap != randomWord[i])
			{
				var changer = document.getElementsByClassName("insert");
				changer[3].textContent = "X";

			}
			
			

			
	}
	

};




// do {

// 	guesser();

// }
// while ( win == false);
