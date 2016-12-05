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
				newDiv.setAttribute("class", "insert");
				
								
			}
		console.log(randomWord);
}

// function reveal(){
// 	var div = document.getElementById("child");
// 	div.setAttribute("class", "replace");
// }

// function clearBoard() {
   
// var div = document.getElementById("board");
// while (div.hasChildNodes()) {   
//     div.removeChild(div.firstChild);
// }
// }
function changeTextBefore(){
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
			var changer = document.getElementsByClassName("insert");
			changer[i].textContent = "Z";
	}

}





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

			}		
	}
};




// // do {

// // 	guesser();

// // }
// // while ( win == false);
