var wordCHoices = ["madonna", "michael jackson", "george michael"];
var randomChoice = wordCHoices[Math.floor(Math.random() * wordCHoices.length)];
var answer = [];
var badGuesses = [];
var lives;
//var matchWord = wordCHoices.includes(userInput);

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


}

blankValues();

// USER INPUT
document.onkeyup = function (event) {

    //get user input
    var userInput = event.key;

    // is correct function
    var rightLetter = function (letter) {


        console.log("this is randomChoice[i] " + randomChoice[i]);
        console.log("this is letter " + letter);
        // answer[i] = letter;
        document.getElementById("answer").innerHTML = answer.join(" ");

    }

    //is wrong function

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

        if (lives === 0) {
            alert("You have lost!");
        }
    }


    //looking for the position of every letter
    var found = false;


    for (var i = 0; i < randomChoice.length; i++) {
        if (userInput === randomChoice[i]) {
            found = true;
            console.log("entered true statement here is the user input: " + userInput);
            answer[i] = userInput;
            document.getElementById("answer").innerHTML = answer.join(" ");
            console.log("Inside the true statement: " + userInput);
        }
    }

    if (!found) {
        wrongLetter(userInput);
    }



    /* CREATE A FUNCTION THAT HANDLES FOR LOOP CHECK OF LETTERS*/


}