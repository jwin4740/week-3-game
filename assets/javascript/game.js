// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var fumble = ["F", "U", "M", "B", "L", "E"];

var word = [bears, packers, fumble];
var randomWord;

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
	var mainDiv = document.getElementById("board");
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
		if (userGuessCap == randomWord[i])
		{

		mainDiv.innerHTML = "r";	
		}
	}

	

};



	
