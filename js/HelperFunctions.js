//generates a random number
const generateRandomNumber = (max,min) => Math.floor(Math.random() * (+max - +min)) + +min;    
//create a function for filltering outpunctuatiton
const phraseFillteredOfPunctuationAndLowerCase = (stringToBeFilltered) => stringToBeFilltered.toLowerCase().replace(/[.,\/#!$%.?,'\^&\*;:{}=\-_`~()]/g,"")
// Each letter is presented by an empty box, one li element for each letter. 

    // Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces. 
const emptyLetterBox = (letter) => {
    const emptyBox = document.createElement('li');
    emptyBox.classList += "hide" + " " + "letter" + " " + letter
    emptyBox.innerHTML = letter;
    phraseContainer.appendChild(emptyBox); 
} 
const emptySpace = () => {
    const emptySpace = document.createElement('li');
    emptySpace.classList = "space";
    emptySpace.innerText = " ";
    phraseContainer.appendChild(emptySpace);
}
//need to be able to show a matched letter
const showMatchedLetter = (letterToMatch) => {
    const emptyLetterBoxes = document.querySelectorAll('.letter')
    emptyLetterBoxes.forEach(letter => {
        if (letter.classList.contains(letterToMatch)){
            letter.classList.remove("hide")
            letter.classList.add("show")
        } 
    })
}
//need to check if we have won or not
const checkForWin = () => {
    let youWon = true;
    const emptyLetterBoxes = document.querySelectorAll('.letter')

    emptyLetterBoxes.forEach(letter => {
    let hiddentItem = letter.classList.contains("hide")
        if(hiddentItem){
            youWon = false
        }
    })
    console.log(youWon)
    return youWon
}
