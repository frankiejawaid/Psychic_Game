

      ////Create an Array for letters

        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var wins= 0;
        var losses=0;
        var guessesleft=9;
        var lettersused=[];
        var letterToGuess=null;


      ////Computer Generates Random Letter

        var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(getRandomLetter);


      ////Listening for User Key input
        
        document.onkeyup = function pressKey(event) {
        console.log(event.key);  


      ////Recording User guesses

      var UserGuess = event.key;
      lettersused.push(UserGuess);
      document.getElementById('lettersused').innerHTML = "Your Guesses so far: " + lettersused.join(", ");

      ////// Updating Guesses Left

      document.getElementById('guessesleft').innerHTML = "Guesses Left: " + guessesleft;
      guessesleft--;


     
      ////Reset function once lives remaining are = 0 

      var reset = function() {
      wins = 0;
      losses = 0;
      guessesleft = 9;
      lettersused = [];
  
}

      
      //// Recording wins and losses

        if (event.key === getRandomLetter) {
            wins++;
            console.log("you're a winner");
            getRandomLetter=alphabet[Math.floor(Math.random() * 
              alphabet.length)];
            document.querySelector('#wins').innerHTML = "wins: " + wins;
            alert("You're a winner");
          }

        else {
             losses++;
            console.log(losses);
            document.querySelector('#losses').innerHTML = "losses: " + losses; 
            alert("You're a loser");

    }

            if (guessesleft == 0) {
            reset();
  }
        

 
  
};
  

    

