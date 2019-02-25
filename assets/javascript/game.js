/*---------Global Variables ------------*/

var wordChoices = ["Tetris",
    "Super Mario Bros",
    "Sonic the Hedgehog",
    "Super Mario Bros",
    "Donkey Kong",
    "Pokemon",
    "The Legend of Zelda",
    "Rampage",
    "Metroid",
    "Prince of Persia",
    "R Type",
    "Mega Man",
    "Pac Man",
    "Dig Dug",
    "Final Fantasy",
    "Punch Out",
    "Duck Hunt",
    "Streets of Rage",
    "Contra"
];
var randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)].toLowerCase();
var answer = [];
var badGuesses = [];
var lives = 7;
var warningMessage = document.getElementById("warningMessage");
var warningMessageSubText = document.getElementById("warningMessageSubText");
var welcomeScreen = document.getElementById("welcomeScreen");
var myAudio = document.getElementById("myAudio");
var wins =  document.getElementById("wins");
var losses =  document.getElementById("losses");
var playGameBool = false;
var winsCount = 0;
var lossesCount = 0

/*--------- Reset function ------------*/

function blankValues() {

    // reset variables
    answer = [];
    lives = 7;
    badGuesses = [];
    document.getElementById("badGuesses").innerHTML = "";

    //reinitialize randomChoice
    randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)].toLowerCase();

    //create blank spaces
    for (var i = 0; i < randomChoice.length; i++) {

        //check  if the indexOf is a space and if it is the answer equals that array
        if (randomChoice[i] === " ") {
            answer[i] = " ";
        } else {

            answer[i] = "_";
        }

    }

    //Print to the DOM
    document.getElementById("answer").innerHTML = answer.join("");
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("wins").innerHTML = winsCount;
    document.getElementById("losses").innerHTML = lossesCount;
    bgMusic(randomChoice);
}

/*--------- User is wrong function ------------*/

var wrongLetter = function (letter) {

    // badGuesses.push(randomChoice[i]);
    //check if the letter is used 

    if (badGuesses.indexOf(letter) > -1) {
        warningMessageSubText.innerHTML = "You've already pressed that!";
        warningMessageAnimation();
        return;
    }

    badGuesses.push(letter);
    document.getElementById("badGuesses").innerHTML = badGuesses.join(" ");

    // update lives and display
    --lives;

    
    document.getElementById("lives").innerHTML = lives;
    losses.innerHTML = lossesCount;

    // if lives == 0 then game is over and reset value
    if (lives === 0) {
        myAudio.setAttribute("src", " ");
        ++lossesCount;
        losses.innerHTML = lossesCount
        alert("You have lost!");
        blankValues();
    }
}

/*----------Audio Function Area ------------*/
function bgMusic(music) {
    //
    music = randomChoice;
    //var randomMusic Audio("./assets/audio/"+music+".ogg";
    var randomMusic = "./assets/audio/" + music + ".ogg";
    console.log(randomMusic);

    myAudio.setAttribute("src", randomMusic);
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
            warningMessage.style.bottom = pos + "vh";
            warningMessage.style.opacity = "20";
        }
    }
}

/*----------call Function Area ------------*/
blankValues();
playGame();

/*---------- Play Game function ------------*/

function playGame() {


    document.onkeyup = function (event) {
        var userInputKeyCode = event.keyCode;
        if (userInputKeyCode === 32) {

            setTimeout(function () {
                playGameBool = true;
                welcomeScreen.style.display = "none";
            }), 250;

        }
        if (playGameBool) {

            //get user input
            var userInput = event.key.toLowerCase();

            //if user presses F5 or F12 do nothing
            if (userInputKeyCode === 116 || userInputKeyCode === 123) {
                return;
            }

            // check to see if the user input a character from A-Z
            if (userInputKeyCode > 90 || userInputKeyCode < 57) {
                warningMessageSubText.innerHTML = " Please press a leter from A-Z";
                //warningMessage.setAttribute("class", warningMessage.getAttribute("class")+ " fade-in");
                warningMessageAnimation();

            } else {

                //create a boolean to stop the wrongLetter function for continously looping
                var found = false;
                warningMessage.style.opacity = "0";

                //index of every letter
                for (var i = 0; i < randomChoice.length; i++) {
                    if (userInput === randomChoice[i]) {

                        found = true;
                        //console.log("entered true statement here is the user input: " + userInput);
                        answer[i] = userInput;
                        document.getElementById("answer").innerHTML = answer.join("");
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
                        console.log(checkAnswer);
                        checkAnswer = checkAnswer.replace(/,/g, "");
                        checkAnswer = checkAnswer.replace(/_/g, " ");
                    }
                    if (checkAnswer === randomChoice) {
                       
                        ++winsCount;
                        wins.innerHTML = winsCount;
                        setTimeout(function () {             
                            alert("You won!");
                            blankValues();
                        }, 250);

                    }

                }

            }
        }
    }

}