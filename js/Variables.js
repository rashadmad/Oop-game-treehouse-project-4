//need to be able to interact with the overlay
const gameStartOverlay = document.getElementById('overlay');

//variable for start button
const startButton = document.getElementById('btn__reset');

//create a list of phrases
const phraseArray = ["Frankly, my dear, I don't give a damn.", "I'm going to make him an offer he can't refuse", "Here's looking at you, kid.", "May the force be with you.", "You talking to me?"]

//need to have a place to add
const phraseContainer = document.getElementById('phrase').getElementsByTagName('ul')[0];

//need to make all keys interactive
const keys = document.querySelectorAll('.key')

//Need to be able punish user for wrong selections
const hearts = document.querySelectorAll('.tries')
const heart = (amountOfHearts) => hearts[amountOfHearts].childNodes[0];
let lifePoints = 5;

//game end messages
const gameOverContainer = document.getElementById('game-over-message')
const gameWinMessage = "Congratulations You Won"
const gameLoseMessage = "Sorry Uou failed, Try Again?"

//scoreBoard
const scoreboard = document.getElementById('scoreboard').childNodes[0]


