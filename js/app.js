/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.

 //Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
 startButton.addEventListener("click", () => { 
    //game state
    if(firstGame){   
        firstGame = false
    } else {
        game.reset()
    }
    game = new Game();
    game.startGame();
}); 

 //Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.
 keys.forEach(key => {
    key.addEventListener("click", (event) => { 
        // Disable the selected letter’s onscreen keyboard button.
        event.target.disabled = true;
        game.handleInteraction(event.target,game.activePhrase.checkLetter(event.target))
        game.removeLife(game.activePhrase.checkLetter(event.target))
    });  
})