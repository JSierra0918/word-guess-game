/*---------Global Variables ------------*/

var wordCHoices = ["Tetris",
    "Super Mario Bros",
    "SimCity",
    "Super Mario Bros",
    "Donkey Kong",
    "Defender",
    "The Legend of Zelda",
    "Rampage",
    "Metroid",
    "Prince of Persia",
    "R Type",
    "Mega Man",
    "Pac Man",
    "Dig Dug",
    "Boulder Dash",
    "Final Fantasy",
    "Punch Out",
    "Duck Hunt",
    "Contra"
];
var randomChoice = wordCHoices[Math.floor(Math.random() * wordCHoices.length)].toLowerCase();
var answer = [];
var badGuesses = [];
var lives;
var warningMessage = document.getElementById("warningMessage");
var warningMessageSubText = document.getElementById("warningMessageSubText");
var welcomeScreen = document.getElementById("welcomeScreen");
var playGameBool = true;
/*--------- Reset function ------------*/

function blankValues() {

    // TODO: Turn this into a function that can reset all values
    //create blank spaces
    for (var i = 0; i < randomChoice.length; i++) {

        answer[i] = "_";
    }

    // reset variables
    lives = 10;

    //Print to the DOM
    document.getElementById("answer").innerHTML = answer.join(" ");
    document.getElementById("lives").innerHTML = lives;
    bgMusic(randomChoice);
}

/*--------- User is correct function ------------*/
var rightLetter = function (letter) {

}

/*--------- User is wrong function ------------*/

var wrongLetter = function (letter) {

    // badGuesses.push(randomChoice[i]);
    //check if the letter is used 

    if (badGuesses.indexOf(letter) > -1) {
        alert("You've already pressed that");
        return;
    }

    badGuesses.push(letter);
    document.getElementById("badGuesses").innerHTML = badGuesses.join(" ");

    // update lives and display
    --lives;
    document.getElementById("lives").innerHTML = lives;

    // if lives == 0 then game is over and reset value
    if (lives === 0) {
        alert("You have lost!");
        blankValues();

    }
}

/*----------Audio Function Area ------------*/
function bgMusic(music) {
    var randomMusic = new Audio();
    var test = "assets/audio/" + music + ".ogg"
    console.log(test);

    // /"assets/audio/"+music+".mp3"

}

/*---------- warning Animation ------------*/

function warningMessageAnimation() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 5) {
            clearInterval(id);
        } else {
            pos++;
            warningMessage.style.bottom = pos + "vh";
            warningMessage.style.opacity = "20";
        }
    }
}

/*---------- Play Game function ------------*/

function playGame() {
    if (!playGameBool) {

        document.onkeyup = function (event) {

            playGameBool = true;
            welcomeScreen.style.display = "none";
        }
    }
}
/*----------call Function Area ------------*/
playGame();
blankValues();

/*--------- one key up Function ------------*/
document.onkeyup = function (event) {

    //get user input
    var userInput = event.key.toLowerCase();
    var userInputKeyCode = event.keyCode;


    // check to see if the user input a character from A-Z
    if (userInputKeyCode > 90 || userInputKeyCode < 57) {
        warningMessageSubText.innerHTML = " Please press a leter from A-Z";
        //warningMessage.setAttribute("class", warningMessage.getAttribute("class")+ " fade-in");
        warningMessageAnimation();

    } else {

        //create a boolean to stop the wrongLetter function for continously looping
        var found = false;

        //index of every letter
        for (var i = 0; i < randomChoice.length; i++) {
            if (userInput === randomChoice[i]) {

                found = true;
                //console.log("entered true statement here is the user input: " + userInput);
                answer[i] = userInput;
                document.getElementById("answer").innerHTML = answer.join(" ");
                //console.log("Inside the true statement: " + userInput);
                console.log(answer.includes(randomChoice));
            }
        }

        //user is wrong
        if (!found) {
            wrongLetter(userInput);
        }

        //If you guess all the correct words!
        if (found) {
            for (var i = 0; i < randomChoice.length; i++) {
                //answer is an array
                var checkAnswer = answer.toString();
                checkAnswer = checkAnswer.replace(/,/g, "");
                checkAnswer = checkAnswer.replace(/_/g, " ");


                console.log(checkAnswer + " " + randomChoice);

                if (checkAnswer === randomChoice) {
                    console.log("You've won, here are the results: " + checkAnswer + randomChoice);
                    blankValues();
                }

            }

        }

        //check to see if the answer is equal to the random choice
        if (answer.includes(randomChoice) === true) {
            alert("You won!");
        }

        //Check to see if the user has completed the word
        //This works, but can't remove underscore
        console.log(answer.join("") + " randomchoice is " + randomChoice);

    }

}