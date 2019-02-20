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
        badGuesses[i] = " ";

    }
    // reset variables
    lives = 10;

    //join the answer array and show it.
    document.getElementById("answer").innerHTML = answer.join(" ");
    document.getElementById("badGuesses").innerHTML = badGuesses.join(" ");
    document.getElementById("lives").innerHTML = lives;


}

blankValues();

// USER INPUT
document.onkeyup = function (event) {

    //get user input
    var userInput = event.key;
    var randomChoiceArray = Array.from(randomChoice);
    //get each random choice letter and test against it


    var rightLetter = function (letter) {


        console.log("this is randomChoice[i] " + randomChoice[i]);
        console.log("this is letter " + letter);
        answer[i] = letter;
        document.getElementById("answer").innerHTML = answer.join(" ");

    }

    var wrongLetter = function (letter) {

        // badGuesses.push(randomChoice[i]);
        
        console.log("this is bad randomChoice[i] " + randomChoice[i]);
        console.log("this is bad letter " + letter);
        badGuesses[i] = letter;
        document.getElementById("badGuesses").innerHTML = badGuesses.join(" ");

        // update lives and display
        --lives;
        document.getElementById("lives").innerHTML = lives;

        if (lives === 0) {
            alert("You have lost!");
        }
    }


    for (var i = 0; i < randomChoice.length; i++) {

        if (userInput === randomChoice[i]) {
            rightLetter(userInput);
        }

        if (userInput !== randomChoice[i]) {
            wrongLetter(userInput);
        }
    }




    /* CREATE A FUNCTION THAT HANDLES FOR LOOP CHECK OF LETTERS*/


}