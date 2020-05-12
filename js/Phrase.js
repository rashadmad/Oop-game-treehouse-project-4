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
}
