//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let randomIndex; 
let pickedWord;
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

    let pickedWord = getRandomWord()
    let underlines = pickedWord.split('').fill('_',0).join('')
    displaySplitWord.innerHTML = underlines

    console.log(pickedWord);
    //console.log(splitWord);

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
    } else {
      wrongArray.push(guessedLetter);
      console.log('Letter is NOT in the word');
      wrongChars.innerText = wrongArray.join(', '); // Display wrong letters
  
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

let randomIndex; 
let pickedWord;
let wrongArray = [];
const wrongChars = document.querySelector('.main__wrongUsedWords');
const submitButton = document.querySelector('#submitButton');
const displaySplitWord = document.querySelector('.main__randomWord');

const hangmanHead = document.getElementById('head');
const hangmanBody = document.getElementById('body');
const hangmanArms = document.getElementById('arms');
const hangmanLegs = document.getElementById('legs');
const hangmanScaffold = document.getElementById('scaffold');
const countdownCircle = document.querySelector('.main__countdown--circle');

let wrongGuessCount = 0;
const maxWrongGuesses = 6;

let gameStart = document.querySelector('#header__button');
gameStart.addEventListener('click', () => {
    displaySplitWord.innerHTML = '';
    wrongChars.innerText = 'Wrong Guesses: ';
    countdownCircle.innerText = maxWrongGuesses;
    wrongArray = [];
    wrongGuessCount = 0;

    let pickedWord = getRandomWord();
    let underlines = pickedWord.split('').fill('_', 0).join('');
    displaySplitWord.innerHTML = underlines;
});

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

submitButton.addEventListener('click', () => {
    const guessedLetter = document.getElementById('inputText').value;
    let newWord = pickedWord.split();

    if (newWord.includes(guessedLetter)) {
        // Letter is in the word
        displaySplitWord.innerHTML = displayWordWithGuess(pickedWord, displaySplitWord.innerHTML, guessedLetter);
        if (displaySplitWord.innerHTML === pickedWord) {
            gameWin();
        }
    } else {
        // Letter is NOT in the word
        wrongArray.push(guessedLetter);
        wrongChars.innerText = 'Wrong Guesses: ' + wrongArray.join(', ');
        wrongGuessCount++;
        countdownCircle.innerText = maxWrongGuesses - wrongGuessCount;
        updateHangmanDrawing(wrongGuessCount);
    }
});

function displayWordWithGuess(word, displayedWord, guessedLetter) {
    let newDisplayedWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guessedLetter || displayedWord[i] !== '_') {
            newDisplayedWord += word[i];
        } else {
            newDisplayedWord += '_';
        }
    }
    return newDisplayedWord;
}

function updateHangmanDrawing(wrongGuessCount) {
    switch (wrongGuessCount) {
        case 1:
            hangmanScaffold.style.display = 'block';
            break;
        case 2:
            hangmanHead.style.display = 'block';
            break;
        case 3:
            hangmanBody.style.display = 'block';
            break;
        case 4:
            hangmanArms.style.display = 'block';
            break;
        case 5:
            hangmanLegs.style.display = 'block';
            break;
        case 6:
            gameOver();
            break;
        default:
            break;
    }
}

function gameWin() {
    console.log('You win!');
    submitButton.disabled = true;
}

function gameOver() {
    console.log('Game over');
    submitButton.disabled = true;
}


*/ 