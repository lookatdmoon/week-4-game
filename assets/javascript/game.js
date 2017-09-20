//jQuery for Crystals Collector!

$(document).ready(function() {

	// Define variables
	var ranNum; 
	var totalScore;
	var crystalRed;
	var crystalBlue;
	var crystalYellow;
	var crystalGreen;
	var totalScore;
	var wins = 0;
	var losses = 0;


	// Function for new games
	function newGame() {
		ranNum = 3 + Math.floor(Math.random() * 100);
		crystalRed = Math.floor(Math.random()*10)+1;
		crystalBlue = Math.floor(Math.random()*11)+1;
		crystalYellow = Math.floor(Math.random()*12)+1;
		crystalGreen = Math.floor(Math.random()*13)+1;
		totalScore = 0;

		$("#ranNum").html(ranNum);
		$("#totalScore").html(totalScore);
		$("#wins").html(wins);
		$("#losses").html(losses);
	}

	// Clicking on a crystal
	newGame();
	$(".crystals").on("click", function() {
	
		var key = $(this).attr("value");

		
	// Function to check for W vs L
	function checkForWinsAndLossess() {
		if (totalScore == randonNumGenerator){
			wins++
			newGame();
		}
				
		if (totalScore > randonNumGenerator){
			losses++;
			newGame();
		}

	}



	checkForWinsAndLossess();
	$("#userScore").html(totalScore);

	});

});
