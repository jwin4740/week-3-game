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
		newPa.setAttribute("id", "insert");
	}
	console.log(randomWord);
}
setUp();

document.onkeyup = function(event){ 
	
	userGuess = event.key;
	var userGuessCap = userGuess.toUpperCase();
	
	if (userGuessCap != randomWord[0])
		{
			document.getElementById("board").innerHTML = '<div id="replace">' + userGuessCap + '<div>';
			var mainDiv = document.getElementById("board");
			for (var i = 1, n = randomWord.length; i < n; i++)
					{
						var newPa = document.createElement("div");
						newPa.innerHTML = randomWord[i];
						mainDiv.appendChild(newPa);
						newPa.setAttribute("id", "insert");
					}	
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