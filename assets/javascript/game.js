var wordCHoices = ["madonna", "michael jackson", "george michael"];
var randomChoice = wordCHoices[Math.floor(Math.random() * wordCHoices.length)];
var answer = [];
var badGuesses = [];
var lives = 10;
//var matchWord = wordCHoices.includes(userInput);

function blankValues() {
    // TODO: Turn this into a function that can reset all values
    //create blank spaces
    for (var i = 0; i < randomChoice.length; i++) {
        answer[i] = "_";

    }
    //join the answer array and show it.
    document.getElementById("answer").innerHTML = answer.join(" ");
    document.getElementById("lives").innerHTML = lives;


}

blankValues();

// USER INPUT
document.onkeyup = function (event) {

    //get user input
    var userInput = event.key;
    var randomChoiceArray = Array.from(randomChoice);
    //get each random choice letter and test against it



    if (userInput === randomChoiceArray) {

        answer[userInput] = randomChoice.indexOf(userInput);
        console.log(answer);

        document.getElementById("word").innerHTML = answer;
        document.getElementById("word").style.backgroundColor = "red";
    }

    for (var i = 0; i < randomChoice.length; i++) {

        var isWord = false;
        //This code works but only displays one character even if there are two in the word.
        /*console.log(randomChoice.includes(userInput));
            if (randomChoice.includes(userInput)){
                var indexOfUserInput = randomChoice.indexOf(userInput);

                answer[indexOfUserInput] = userInput;
                document.getElementById("answer").innerHTML = answer.join(" ");
                console.log (randomChoice);
            }*/

        //if (userInput === randomChoice[i])
        if (userInput === randomChoice[i]) {
            // find out what letter was pressed and occupy that space

            console.log("This is the user input in the good guess: " + userInput);
            answer[i] = userInput; //got this to work but don't know why.  Ask questions.
            document.getElementById("answer").innerHTML = answer.join(" ");

        }

        //if the user input is wrong, start marking the bad guesses.
        else {
            console.log("This is the user input in the bad guess: " + userInput);

            badGuesses.push(userInput);
            document.getElementById("badGuesses").innerHTML = badGuesses.join(" ");
            --lives;
            document.getElementById("lives").innerHTML = lives;
            if (lives === 0) {
                alert("You have lost!");
            }
        }

        /* CREATE A FUNCTION THAT HANDLES FOR LOOP CHECK OF LETTERS*/
    }

}