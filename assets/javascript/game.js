// // creating arrays for words//

var bears = ["B", "E", "A", "R", "S"];
var packers = ["P", "A", "C", "K", "E", "R", "S"];
var five = [" ", " ", " ", " ", " "];


// insert the words in the document
var x = document.getElementById("board");

for (var i = 0, n = bears.length; i < n; i++)
{
   x.innerHTML += '<div id="letter">' + bears[i] + '</div>';
}

// for (var i = 0, n = packers.length; i < n; i++)
// {
//    x.innerHTML += '<div class="letter">' + packers[i] + '</div>';
// }

$("#letter:eq(0)").hide();