//questions
//testing  timer = 9;

window.onload = function () {
//countdown of the game
setTimeout(countdown, 1000 * 20);
setTimeout(countdown2, 1000 * 10);
setTimeout(results, 1000 * 5);




function countdown(){
  $("#countdown").append("Time is running out");
  console.log("10 seconds left");}
  function countdown2(){
  $("#countdown2").append("Almost over..");
  console.log("10 seconds left");}

function timeUp() {
  /* th*/
  console.log("done");
  $("#results").append("<div>Time's Up!</div>");
  console.log("time is up");}


}


//questions
//Is Nicki Minaj 

function submitAnswers(){

	var total = 3; //results are shown
	var score = 0;

	//user input from quiz and three questions
	var q1 = document.forms["quiz"]["q1"].value
	var q2 = document.forms["quiz"]["q2"].value
	var q3 = document.forms["quiz"]["q3"].value

	//test alert(q1);

	// checks to make sure you answer the form 	
	for (i = 1; i< total ; i++){
		if(eval('q' + i) === null || eval('q' + i) === "" ) {
		alert("You missed a question");
		return false;
						}
	}

	//answers to the questions sway
	 var answers = ["a", "c", "a"];

	 // checks the answers

	 if(q1 == answers[0]){
	 	score++;
	 }
	 if(q2 == answers[1]){
	 	score++;
	 }

	 if(q3 == answers[2]){
	 	score++;
	 }
	 alert( "you got" + " " + score + " " + "out of" + " " + total + " " + "correct.");

	 

// tells the user about the amount of time left 




function results (){

	if (score === 3)
		alert("you got it!");
	else
		alert("gjj")
}


var seconds = 10;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds;

    if (seconds <= 0)
    {
       document.getElementById('timer_div').innerHTML = "You are Ready!";
       clearInterval(interval);
    }
}, 1000);


}//end bracket









