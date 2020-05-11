/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//to create a Phrase class to handle the creation of phrases.
class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }
    //The phrase class should have these three methods
    addPhraseToDisplay(){
    console.log(this.phrase)
    // this adds letter placeholders to the display when the game starts. 
    const stringToArray = phraseFillteredOfPunctuationAndLowerCase(this.phrase).split('');
    // When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). 
    stringToArray.forEach(item => {
        if(item === " "){
            emptySpace();
        } else {
            emptyLetterBox(item); 
        }
    })
    // Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces. 
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
