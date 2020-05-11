/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//to create a Phrase class to handle the creation of phrases.
class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }
    //need to make sure the phrase is lowercased and free of punctuation and an array of letters
    fillterPhrase(){
        const stringToArray = phraseFillteredOfPunctuationAndLowerCase(this.phrase).split('');
        return stringToArray
    }
    //The phrase class should have these three methods
    addPhraseToDisplay(){
    // this adds letter placeholders to the display when the game starts. 
    // When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). 
    this.fillterPhrase().forEach(item => {
        if(item === " "){
            emptySpace();
        } else {
            emptyLetterBox(item); 
        }
    })
   } 
   checkLetter(){
    // checks to see if the letter selected by the player matches a letter in the phrase.
   }
   showMatchedLetter(){
       console.log("show matched letter")
    // reveals the letter(s) on the board that matches the player's selection. 
    // To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
   } 
}
