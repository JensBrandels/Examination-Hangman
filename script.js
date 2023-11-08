//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let randomIndex; 
let pickedWord;
let underlines;
let wrongArray = [];
const wrongChars = document.querySelector('.main__wrongUsedWords');
const submitButton = document.querySelector('#submitButton');
let displaySplitWord = document.querySelector('.main__randomWord');

// Variables for hangman SVG elements
const hangmanHead = document.getElementById('head');
const hangmanBody = document.getElementById('body');
const hangmanArms = document.getElementById('arms');
const hangmanLegs = document.getElementById('legs');
const hangmanScaffold = document.getElementById('scaffold');

// Counter for wrong guesses
let wrongGuessCount = 0;

//2. Skapa initiate game knapp
let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{

    displaySplitWord.innerHTML = '';

    pickedWord = getRandomWord()
    underlines = pickedWord.split('').fill('_',0).join('')
    displaySplitWord.innerHTML = underlines

    console.log(pickedWord);
    console.log(underlines);
});

//3. slumpa ut random ord med math.random och lägg i en tom array
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]; 
}

//7. If else sats inkluderar bokstaven gör en funktion som skriver ut den på submitknappen
submitButton.addEventListener('click', () => {
    const guessedLetter = document.getElementById('inputText').value;
    let newWord = pickedWord.split('');
    console.log(pickedWord);
  
    if (newWord.includes(guessedLetter)) {
      console.log('Letter is in the word');
      for (let i = 0; i < pickedWord.length; i++) {
        guessedLetter = underlines[i]
        console.log(pickedWord[i]);
      }
    } else {
      wrongArray.push(guessedLetter);
      console.log('Letter is NOT in the word');
      wrongChars.innerText = wrongArray.join(', '); 
      // Display wrong letters
  
      // Increment wrong guess count and update hangman drawing
      wrongGuessCount++;
      updateHangmanDrawing(wrongGuessCount);
    }
  });
//Gör chars till stora bokstäver
//Få hjälp med att få understräck att fungera
//hjälp med att jämföra bokstäverna i ordet med inputbokstav


//9. + display image och kör en countdown på de 6 försöken
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp


function updateHangmanDrawing(wrongGuessCount) {
  // Display hangman parts one by one for each wrong guess
  switch (wrongGuessCount) {
    case 1:
      hangmanScaffold.style.visibility = 'visible';
      break;
    case 2:
      hangmanHead.style.visibility = 'visible';
      break;
    case 3:
      hangmanBody.style.visibility = 'visible';
      break;
    case 4:
      hangmanArms.style.visibility = 'visible';
      break;
    case 5:
      hangmanLegs.style.visibility = 'visible';
      break;
    case 6:
      // Game over - implement game over logic here
      gameOver();
      break;
    default:
      break;
  }
}

function gameOver() {
  // Implement game over logic here, e.g., showing a message and disabling further input
  console.log('Game over');
  // You can add more actions like disabling input and displaying a message to indicate the game is over.
  maxInput.disabled = true;
  submitButton.disabled = true;
}




/*

let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond'];

let currentWord;
let guessedLetters;
let remainingTries;

document.addEventListener('DOMContentLoaded', () => {

currentWord = getRandomWord(words);
guessedLetters = [];
remainingTries = 6;

const startButton = document.getElementById('header__button');
const inputText = document.getElementById('inputText');
const submitButton = document.getElementById('submitButton');
const randomWordDisplay = document.querySelector('.main__randomWord');
const countdownCircle = document.querySelector('.main__countdown--circle');
const wrongUsedWords = document.querySelector('.main__wrongUsedWords');

startButton.addEventListener('click', () => {
  // Reset game variables and UI elements
  currentWord = getRandomWord(words);
  guessedLetters = [];
  remainingTries = 6;
  randomWordDisplay.textContent = currentWord.replace(/[a-zA-Z]/g, '_ ');
  countdownCircle.textContent = remainingTries;
  wrongUsedWords.textContent = '';
  inputText.value = '';
});

submitButton.addEventListener('click', (e) => {
e.preventDefault(); 
const inputLetter = inputText.value.trim().toLowerCase();

    if (inputLetter.length !== 1 || !inputLetter.match(/[a-z]/)) {
  alert('Please enter a valid letter (a-z).');
  return;
}

  if (guessedLetters.includes(inputLetter)) {
  alert('You already guessed that letter.');
  return;
}

    guessedLetters.push(inputLetter);
if (!currentWord.includes(inputLetter)) {
  remainingTries--;
}

updateWordDisplay();
updateCountdown();
updateWrongUsedWords();
inputText.value = '';

if (remainingTries === 0) {
  alert(`Game Over! The word was "${currentWord}".`);
  inputText.disabled = true; 
} else if (currentWord.split('').every(letter => guessedLetters.includes(letter))) {
  alert('Congratulations! You Win!');
  inputText.disabled = true; 
}
});

function getRandomWord(wordList) {
const randomIndex = Math.floor(Math.random() * wordList.length);
return wordList[randomIndex];
}

function updateWordDisplay() {
  let display = '';
  for (const letter of currentWord) {
    if (guessedLetters.includes(letter)) {
      display += letter;
    } else {
      display += '_';
    }
    display += ' ';
  }
  randomWordDisplay.textContent = display;
}

function updateCountdown() {
  countdownCircle.textContent = remainingTries;
}

  function updateWrongUsedWords() {
  wrongUsedWords.textContent = guessedLetters.join(' ');
}
});

*/ 