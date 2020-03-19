var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuess = 10;

function gameEnded() {
	document.getElementById('newGameBtn').style.display = 'inline';
	document.getElementById('easyBtn').style.display = 'none';
	document.getElementById('hardBtn').style.display = 'none';
	document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function easyMode() {
	maxGuess = 10;
	document.getElementById('easyBtn').className = 'activeButton';
	document.getElementById('hardBtn').className = '';
}

function hardMode() {
	maxGuess = 5;
	document.getElementById('hardBtn').className = 'activeButton';
	document.getElementById('easyBtn').className = '';
}

function init() {
	computerGuess = Math.floor(Math.random() * 100 + 1);
	// console.log(computerGuess);
	document.getElementById('newGameBtn').style.display = 'none';
}

function newGame() {
	window.location.reload();
}

function compareGuess() {
	var userGuess = " " + document.getElementById('inputBox').value;
	// console.log(userGuess);

	userGuessLog.push(userGuess);
	// console.log(userGuessLog);
	document.getElementById('guessLog').innerHTML = userGuessLog;

	attempts++
	document.getElementById('attempts').innerHTML = attempts;

	if (userGuessLog.length < maxGuess) {
		if (userGuess > computerGuess) {
			document.getElementById('textOutput').innerHTML = "Your Guess is too High.";
			document.getElementById('inputBox').value = "";
		} else if (userGuess < computerGuess) {
			document.getElementById('textOutput').innerHTML = "Your Guess is too Low.";
			document.getElementById('inputBox').value = "";
		} else {
			document.getElementById('textOutput').innerHTML = "Correct! You got it in " + attempts + " attempts.";
			document.getElementById('container').style.backgroundColor = 'green';
			gameEnded();
		}
	} else {
		document.getElementById('textOutput').innerHTML = "Game Over. You Lose! <br> The number was " + computerGuess;
		document.getElementById('container').style.backgroundColor = '#e82c4e';
		gameEnded();
		
	}
	

}