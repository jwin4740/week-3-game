// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];

var word = [bears, packers];
var randomWord;

    function setUp(){
    randomWord = word[Math.floor(Math.random() * word.length)];
    var mainDiv = document.getElementById("board");
	for (var i = 0, n = randomWord.length; i < n; i++)
	{
		var newPa = document.createElement("div");
		newPa.innerHTML = "-";
		mainDiv.appendChild(newPa);
		newPa.setAttribute("id", "insert");
	}
}
setUp();
	


// document.onkeyup = function(event){



	
