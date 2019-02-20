if (userInput === randomChoice[i]) {
    isWord = true;
     console.log("this is randomChoice[i] " + randomChoice[i]);
    answer[i] = randomChoice[i];
    document.getElementById("answer").innerHTML = answer.join(" ");
} 





  //if (userInput === randomChoice[i])
        // if (isWord === true) {
        //     // find out what letter was pressed and occupy that space

        //     console.log("This is the user input in the good guess: " + userInput);
        //     answer[i] = userInput; //got this to work but don't know why.  Ask questions.
        //     document.getElementById("answer").innerHTML = answer.join(" ");

        // }