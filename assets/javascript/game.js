// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];

var word = [bears, packers, fumble];
var randomWord;
var newPa;

    function setUp(){
    randomWord = word[Math.floor(Math.random() * word.length)];
    var mainDiv = document.getElementById("board");
	for (var i = 0, n = randomWord.length; i < n; i++)
		{
			var newPa = document.createElement("div");
			newPa.innerHTML = randomWord[i];
			mainDiv.appendChild(newPa);
			newPa.setAttribute("id", "replace");
		}
	console.log(randomWord);
}


setUp();

document.onkeyup = function(event){ 
	
	userGuess = event.key;
	var userGuessCap = userGuess.toUpperCase();
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
		if (userGuessCap != randomWord[0])
			{
				document.getElementById("board").innerHTML = '<div id="replace">' + userGuessCap + '<div>';
				var mainDiv = document.getElementById("board");
				for (var j = 1, n = randomWord.length; j < n; j++)
						{
							var newPa = document.createElement("div");
							newPa.innerHTML = randomWord[j];
							mainDiv.appendChild(newPa);
							newPa.setAttribute("id", "insert");
						}	
			}

		// else if (userGuessCap == randomWord[0])
		// 	{
		// 		document.getElementById("board").innerHTML = '<div id="insert">' + userGuessCap + '<div>';
		// 		var mainDiv = document.getElementById("board");
		// 		for (var k = 1, n = randomWord.length; i < n; k++)
		// 				{
		// 					var newPa = document.createElement("div");
		// 					newPa.innerHTML = randomWord[0];
		// 					mainDiv.appendChild(newPa);
		// 					newPa.setAttribute("id", "replace");
		// 				}	
		// 	}

	}
	// if 
	// for (var i = 1, n = randomWord.length; i < n; i++)
				
				
	// 						var newPa = document.createElement("div");
	// 						newPa.innerHTML = "-";
	// 						mainDiv.appendChild(newPa);
	// 						newPa.setAttribute("id", "replace");
	// 					}
	// 			}

};




// do {

// 	guesser();

// }
// while ( win == false);
