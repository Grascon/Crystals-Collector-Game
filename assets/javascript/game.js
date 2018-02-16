$(document).ready(function(){

	//selecting random number 
	var numberChoosen = Math.floor(Math.random()*120+19);
	$(".Random-Number").text("The number to reach is: " + numberChoosen);


	//values for the crystals
	var crystalValue1 = Math.floor(Math.random()*12+1);
	var crystalValue2 = Math.floor(Math.random()*12+1);
	var crystalValue3 = Math.floor(Math.random()*12+1);
	var crystalValue4 = Math.floor(Math.random()*12+1);
	
	//game tracker
	var score = 0;
	var wins = 0;
	var losses = 0;
	
	//updates html
	$("#Score").text("Your score is: " + score);
	$("#wins").text(wins);
	$("#losses").text(losses);

	//resets game by resetting score variable back to zero and getting a new random number and new random numbers for each crystal value
	function reset(){
		numberChoosen = Math.floor(Math.random()*120+19);
		$(".Random-Number").text("The number to reach is: " + numberChoosen);
		crystalValue1 = Math.floor(Math.random()*12+1);
		crystalValue2 = Math.floor(Math.random()*12+1);
		crystalValue3 = Math.floor(Math.random()*12+1);
		crystalValue4 = Math.floor(Math.random()*12+1);
		score = 0;
		$("#Score").text("Your score is: " + score);	
	}

	//when a win occurs
	function victory (){
		wins++;
		$("#wins").text(wins);
		reset();
	}

	//when a loss occurs
	function loss (){
		losses++;
		$("#losses").text(losses);
		reset();
	}
	
	/*what happens when you click on each crystal image.
	The score updates from the current score plus the value of crystalValue#.
	Each crystal has a corresponding crystalValue#, for example emerald always corresponds with crystalValue1.
	The html is then updated
	if score equals the random number you win, which sets off the victory function above which then resets the game.
	If your score goes above the random number you lose, setting off the loss function above which then resets the game.
	This happens for all crystal images when clicked.
	*/

	$("#emerald").click(function(){
		score = score + crystalValue1;
		$("#Score").text("Your score is: " + score);
			if (score === numberChoosen){
				alert("Victory!");
				alert("The game will now reset.");
				victory();
			}
			else if (score > numberChoosen){
				alert("I'm sorry, you have lost. The game will now restart.");
				loss();
			}
	});

	$("#quartz").click(function(){
		score = score + crystalValue2;
		$("#Score").text("Your score is: " + score);
			if (score === numberChoosen){
				alert("Victory!");
				alert("The game will now reset.");
				victory();
			}
			else if (score > numberChoosen){
				alert("I'm sorry, you have lost. The game will now restart.");
				loss();
			}
	});

	$("#rose-quartz").click(function(){
		score = score + crystalValue3;
		$("#Score").text("Your score is: " + score);
			if (score === numberChoosen){
				alert("Victory!");
				alert("The game will now reset.");
				victory();
			}
			else if (score > numberChoosen){
				alert("I'm sorry, you have lost. The game will now restart.");
				loss();
			}
	});

	$("#ruby").click(function(){
		score = score + crystalValue4;
		$("#Score").text("Your score is: " + score);
			if (score === numberChoosen){
				alert("Victory!");
				alert("The game will now reset.");
				victory();
			}
			else if (score > numberChoosen){
				alert("I'm sorry, you have lost. The game will now restart.");
				loss();
			}
	});

});
