/*---------Global Variables ------------*/

var wordChoices = ['Tetris', 'Super Mario Bros', 'Sonic the Hedgehog', 'Super Mario Bros', 'Donkey Kong', 'Pokemon', 'The Legend of Zelda', 'Rampage', 'Metroid', 'Prince of Persia', 'R-Type', 'Mega Man', 'Pac Man', 'Dig Dug', 'Final Fantasy', 'Punch Out', 'Duck Hunt', 'Streets of Rage', 'Contra'];
var randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var randomChoiceIndex = wordChoices.indexOf(randomChoice);
var answer = [];
var badGuesses = [];
var lives = 7;
var warningMessage = document.getElementById('warningMessage');
var warningMessageSubText = document.getElementById('warningMessageSubText');
var welcomeScreen = document.getElementById('welcomeScreen');
var myAudio = document.getElementById('myAudio');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var playGameBool = false;
var winsCount = 0;
var lossesCount = 0;

/*--------- Reset function ------------*/

function resetValues() {
	// reset variables
	lives = 7;
	badGuesses = [];
	document.getElementById('badGuesses').innerHTML = '';

    //removed current item
    wordChoices.splice(wordChoices.indexOf(randomChoiceIndex));

    //reinitialize randomChoice
    randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    randomChoiceIndex = wordChoices.indexOf(randomChoice);

    //fill blanks
    fillBlanks(randomChoice);

	//Print to the DOM
	document.getElementById('lives').innerHTML = lives;
	document.getElementById('wins').innerHTML = winsCount;
    document.getElementById('losses').innerHTML = lossesCount;
	bgMusic(randomChoice);
}

/*--------- User is wrong function ------------*/

var wrongLetter = function (letter) {
	//check if the letter is used

	if (badGuesses.indexOf(letter) > -1) {
		warningMessageSubText.innerHTML = "You've already pressed that!";
		warningMessageAnimation();
		return;
	}

	badGuesses.push(letter);
	document.getElementById('badGuesses').innerHTML = badGuesses.join(' ');

	// update lives and display
	--lives;

	document.getElementById('lives').innerHTML = lives;
	losses.innerHTML = lossesCount;

	// if lives == 0 then game is over and reset value
	if (lives === 0) {
		myAudio.setAttribute('src', ' ');
		++lossesCount;
		losses.innerHTML = lossesCount;
		alert('You have lost!');
		resetValues();
	}
};

/*----------Audio Function Area ------------*/
function bgMusic(music) {
	music = randomChoice;
	var randomMusic = './assets/audio/' + music + '.ogg';
	myAudio.setAttribute('src', randomMusic);
}

/*---------- warning Animation ------------*/

function warningMessageAnimation() {
	var pos = 0;
	var id = setInterval(frame, 5);

	function frame() {
		if (pos === 5) {
			clearInterval(id);
		} else {
			pos++;
			warningMessage.style.bottom = pos + 'vh';
			warningMessage.style.opacity = '20';
		}
	}
}

function fillBlanks(randomChoice) {
	for (var i = 0; i < randomChoice.length; i++) {
		//check if the indexOf is a space and if it is the answer equals that array
		if (randomChoice[i] === ' ') {
			answer[i] = ' ';
		} else if (randomChoice[i] === '-') {
			answer[i] = '-';
		} else {
			answer[i] = '_';
		}
    }

    document.getElementById('answer').innerHTML = answer.join('');
}

/*----------call Function Area ------------*/
fillBlanks(randomChoice);
playGame();

/*---------- Play Game function ------------*/

function playGame() {
	document.onkeyup = function (event) {
		var userInputKeyCode = event.keyCode;
		if (userInputKeyCode === 32) {
			setTimeout(function () {
				playGameBool = true;
				welcomeScreen.style.display = 'none';
			}),
				250;
		}
		if (playGameBool) {
			if (wordChoices.length === 0) {
				alert('Game has ended!');
			}
			//get user input
			var userInput = event.key.toLowerCase();

			//if user presses F5 or F12 do nothing
			if (userInputKeyCode === 116 || userInputKeyCode === 123) {
				return;
			}

			// check to see if the user input a character from A-Z
			if (userInputKeyCode > 90 || userInputKeyCode < 57) {
				warningMessageSubText.innerHTML = ' Please press a leter from A-Z';
				//warningMessage.setAttribute("class", warningMessage.getAttribute("class")+ " fade-in");
				warningMessageAnimation();
			} else {
				//create a boolean to stop the wrongLetter function for continously looping
				var found = false;
				warningMessage.style.opacity = '0';

				//index of every letter
				for (var i = 0; i < randomChoice.length; i++) {
					if (userInput === randomChoice[i].toLowerCase()) {
						found = true;
						answer[i] = userInput;
						document.getElementById('answer').innerHTML = answer.join('');
					}
				}

				//user is wrong
				if (!found) {
					wrongLetter(userInput);
				}

				//If you guess all the correct words!
				if (found) {
					var checkAnswer = answer.toString();

					for (var i = 0; i < randomChoice.length; i++) {
						//answer is an array
						checkAnswer = checkAnswer.replace(/,/g, '');
						checkAnswer = checkAnswer.replace(/_/g, ' ');
					}
					if (checkAnswer === randomChoice.toLowerCase()) {
						++winsCount;
						wins.innerHTML = winsCount;
						setTimeout(function () {
							alert('You won!');
							resetValues();
						}, 250);
					}
				}
			}
		}
	};
}
