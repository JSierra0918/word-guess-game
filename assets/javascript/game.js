/*---------Global Variables ------------*/

var wordCHoices = ["madonna", "michael jackson", "george michael"];
var randomChoice = wordCHoices[Math.floor(Math.random() * wordCHoices.length)];
var answer = [];
var badGuesses = [];
var lives;

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
}

/*--------- User is correct function ------------*/
var rightLetter = function () {

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

/*----------call Function Area ------------*/

blankValues();

/*--------- one key up Function ------------*/
document.onkeyup = function (event) {

    //get user input
    var userInput = event.key;

    //create a boolean to stop the wrongLetter function for continously looping
    var found = false;

    //index of every letter
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

}