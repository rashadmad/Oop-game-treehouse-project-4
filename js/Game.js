/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
 //The class should include a constructor that initializes the following properties:
 class Game {
    constructor (missed= 0, phrases= [], activePhrase= null, healthPoints= 5) {
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
      this.missed = missed;
    //phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
      this.phrases = phrases;
    //activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
      this.activePhrase = activePhrase;
    //need to chart health
      this.healthPoints = healthPoints;
    }
    startGame(){
        //hides the start screen overlay
        gameStartOverlay.style.display = "none"
        //calls the getRandomPhrase() method  &  sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        this.createPhrases()
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
        gameStartOverlay.className = "start"
        hearts.forEach(heart => {
            heart.childNodes[0].src = "images/liveHeart.png";
         });
    }
    createPhrases(){ 
        //creates and returns an array of 5 new Phrase objects, and then set the `phrases` property to call that method.
        let myArray = phraseArray.forEach(phraseString => {
            const phraseObject = new Phrase(phraseString);
            this.phrases.push(phraseObject)
        })
    }
    
    //this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase = () => this.phrases[generateRandomNumber(phraseArray.length,0)] 
       
    handleInteraction(buttonClicked,matchFound){
        buttonClicked.classList.add('chosen');
        // this method controls most of the game logic. 
        if(matchFound){
            // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
            showMatchedLetter(buttonClicked.innerHTML)
            if(checkForWin()){
                this.gameOver()
            }
        } else {
            buttonClicked.classList.add('wrong');
        }
    }
    qwertyInteractions(letterPressed,matchFound){
        const selectedButtonClass = 'key ' + letterPressed;
        const clickedButton = document.getElementsByClassName(selectedButtonClass)[0];
        console.log(clickedButton)
        clickedButton.classList.add('chosen');
        clickedButton.disabled = true;

        if(matchFound){
            // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
            showMatchedLetter(letterPressed)
            if(checkForWin()){
                this.gameOver()
            }
        } else {
            clickedButton.classList.add('wrong');
        }
    }

    removeLife(matchFound,matchedLetters){
        console.log("matchFound " + matchFound)
        console.log("matchLetters " + matchedLetters)
        let letterAlreadyMatched = false
        alreadyMatchedLetters.forEach(letter => {
            if(letter === matchedLetters){
                letterAlreadyMatched = true
            } 
        })

        if(!letterAlreadyMatched || !matchedLetters){ 
            if(!matchFound){
                if(this.healthPoints === 1){
                    this.gameOver()
                } else {
                    // this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
                    this.healthPoints = this.healthPoints - 1
                    let amountOfHearts = this.healthPoints
                    heart(amountOfHearts).src = "images/lostHeart.png";
                    //end the game when you have ran out of health
                }
            }
        }
        alreadyMatchedLetters.push(matchedLetters);
    }
    reset(){
        //remove letter boxes
        phraseContainer.innerHTML = " "
        //hides the start screen overlay
        gameStartOverlay.style.display = "none"
        //calls the getRandomPhrase() method  &  sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        this.createPhrases()
        this.healthPoints = 5;
        gameStartOverlay.className = "start"
        hearts.forEach(heart => {
            heart.childNodes[0].src = "images/liveHeart.png";
        });
        //reset keys
        keys.forEach(key => {
            key.className = "key " + key.innerHTML
            key.disabled = false
        });
    }
    gameOver(){
        setTimeout(function(){ 
            // this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
            gameStartOverlay.style.display = "inline"
            // need to have a message to illustrate is some one has won or lost
            gameOverContainer.innerHTML = checkForWin() ? gameWinMessage : gameLoseMessage
            gameStartOverlay.className = checkForWin() ? "win" : "lose"
        }, 1000);
    }
 }
