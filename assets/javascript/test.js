var bowieWord = ["ALADDIN SAIN", "THIN WHITE DUKE", "ZIGGY STARDUST", "MOONAGE DAYDREAM", "TIME", "WATCH THAT MAN", "QUEEN BITCH", "THE JEAN GENIE", "GOLDEN YEARS", "SWEET THING", "DIAMOND DOGS", "SUFFRAGETTE CITY", "FIVE YEARS", "MODERN LOVE", "REBEL REBEL", "SPACE ODDITY", "STARMAN", "LADY STARDUST", "SOUL LOVE", "THE SPIDERS FROM MARS", "PANIC IN DETROIT"]
// variables that hold place in html
    var wordText = document.getElementById("word");
// hit any key to start game/initalize functions
document.onkeyup = function(event) {
    alert("game is starting")
    // when press key to start game random bowie word is chosen
    var randomBowieWord = bowieWord[Math.floor(Math.random() * bowieWord.length)];
    alert("word is " + randomBowieWord) 
    // turn selected word into an array
     var randomBowieWordArray = Array.from(randomBowieWord);
     alert("array is " + randomBowieWordArray)
    // create underscores and spaces
    for (var i = 0; i < randomBowieWordArray.length; i++) {
      if ((randomBowieWordArray[i] === "A") || (randomBowieWordArray[i] === "B") || (randomBowieWordArray[i] === "C") || (randomBowieWordArray[i] === "D") || (randomBowieWordArray[i] === "E") || (randomBowieWordArray[i] === "F") || (randomBowieWordArray[i] === "G") || (randomBowieWordArray[i] === "H") || (randomBowieWordArray[i] === "I")  ||(randomBowieWordArray[i] === "J") || (randomBowieWordArray[i] === "K") || (randomBowieWordArray[i] === "L") || (randomBowieWordArray[i] === "M") || (randomBowieWordArray[i] === "N") || (randomBowieWordArray[i] === "O") || (randomBowieWordArray[i] === "P") || (randomBowieWordArray[i] === "Q") || (randomBowieWordArray[i] === "R") || (randomBowieWordArray[i] === "S") || (randomBowieWordArray[i] === "T") || (randomBowieWordArray[i] === "U") || (randomBowieWordArray[i] === "V") || (randomBowieWordArray[i] === "W") || (randomBowieWordArray[i] === "X") || (randomBowieWordArray[i] === "Y") || (randomBowieWordArray[i] === "Z")) {
        wordText.innerHTML = randomBowieWordArray.join(" ");
        document.write('_ ')
        
      } else if (randomBowieWordArray[i] === " ") {
        
        wordText.innerHTML = "\xa0\xa0";
        document.write("\xa0\xa0")
    } 
  }
}