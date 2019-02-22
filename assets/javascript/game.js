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
var lives;
var warningMessage = document.getElementById("warningMessage");
var warningMessageSubText = document.getElementById("warningMessageSubText");
var welcomeScreen = document.getElementById("welcomeScreen");
var myAudio = document.getElementById("myAudio");
var playGameBool = true;
/*--------- Reset function ------------*/

function blankValues() {

    // reset variables
    answer = [];
    lives = 10;
    badGuesses = [];
    console.log(badGuesses);
    //reinitialize randomChoice
    randomChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)].toLowerCase();

    //create blank spaces
    for (var i = 0; i < randomChoice.length; i++) {


        answer[i] = "_";

    }

    //Print to the DOM
    document.getElementById("answer").innerHTML = answer.join(" ");
    document.getElementById("lives").innerHTML = lives;
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

    // if lives == 0 then game is over and reset value
    if (lives === 0) {
        myAudio.setAttribute("src", " ");
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
//playGame();
blankValues();

/*--------- one key up Function ------------*/
document.onkeyup = function (event) {


    // /([A-Z])\w+/g

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
        warningMessage.style.opacity = "0";

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
                    alert("You won!");
                    blankValues();

                }

            }

        }

        //Check to see if the user has completed the word
        //This works, but can't remove underscore
      // console.log(answer.join("") + " randomchoice is " + randomChoice);

    }

}