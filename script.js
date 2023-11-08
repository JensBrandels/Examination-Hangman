//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let pickedWord;
let underlines;
let underlinesArray;
let guessedLetter;
let wrongArray = [];
let wrongChars = document.querySelector('.main__wrongUsedWords');
let submitButton = document.querySelector('#submitButton');
let displaySplitWord = document.querySelector('.main__randomWord');
let win = document.querySelector('.header__youWin');
let loose = document.querySelector('.header__youLoose');

// Variables for hangman SVG elements
const hangmanHead = document.getElementById('head');
const hangmanBody = document.getElementById('body');
const hangmanArms = document.getElementById('arms');
const hangmanLegs = document.getElementById('legs');
const hangmanScaffold = document.getElementById('scaffold');

// Counters
let wrongGuessCount = 0;
let triesLeft = 5

//2. Skapa initiate game knapp
let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{
    // kalla på restartGame funktionen för att nolställa bilden och triesLeft
    restartGame();
    // byter ut texten på button
    gameStart.innerText = 'Restart'

    // understräcken
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
    guessedLetter = document.getElementById('inputText').value;
    guessedLetter.value = '';//ändra sen
    
    console.log(pickedWord);
    underlinesArray = underlines.split('')
    
    if (pickedWord.includes(guessedLetter)) {
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === guessedLetter) {
                underlinesArray[i] = guessedLetter;
                underlines = underlinesArray.join('')
                console.log(underlinesArray);
                displaySplitWord.innerHTML = underlines
                checkWin();
            }
        }
    } else {
        // lägg in fel i wrongarray
        wrongArray.push(guessedLetter);
        console.log('Letter is NOT in the word');
        wrongChars.innerText = wrongArray.join(', '); 
    
        // uppdaterar fel i en counter och visar hangman bilderna på hemsidan via funktionen update hangmanDrawing
        wrongGuessCount++;
        triesLeft--
        document.getElementsByClassName('main__countdown--circle')[0].innerHTML = `${triesLeft}`
        updateHangmanDrawing(wrongGuessCount);
    }
})
//9. display image funktion
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
      // Game over - implement game over logic here
      gameOver();
      break;
    default:
      break;
  }
}

function checkWin() {
  if (underlines === pickedWord) {
      win.style.visibility = 'visible';
      displaySplitWord.innerHTML = pickedWord;
      submitButton.disabled = true;
  }
}

function gameOver() {
  // gameOver funktion som ska visa meddelandet (Game Over)
  loose.style.visibility = 'visible';
  console.log('Game over');

  // Ändrar texten på button till 'Try again'
  gameStart.innerText = 'Try again!'
  submitButton.disabled = true;
}

function restartGame(){
  // återställ bilden till gömd
  hangmanScaffold.style.visibility = 'hidden';
  hangmanHead.style.visibility = 'hidden';
  hangmanBody.style.visibility = 'hidden';
  hangmanArms.style.visibility = 'hidden';
  hangmanLegs.style.visibility = 'hidden';
  // återställ guessCount
  wrongGuessCount = 0;

  // återställ triesLeft till 5
  triesLeft = 5;
  document.getElementsByClassName('main__countdown--circle')[0].innerHTML = `${triesLeft}`;

  // återställ wrongArray
  wrongArray = [];
  wrongChars.innerText = '';

  // göm checkWin + loose
  win.style.visibility = 'hidden';
  loose.style.visibility = 'hidden';

  // återställ submit knappen

}
  /*  document.getElementsByClassName('main__countdown--circle').innerText = '5';
  pickedWord = null;
  underlines = null;
  underlinesArray = null;
  wrongArray = [];
  wrongChars.innerText = '';
  displaySplitWord.innerHTML = '';
  wrongGuessCount.innerText = 0;


//Ej kunna submita samma bokstav 2 ggr
//Återställa input fältet vid varje submit
//Gör chars till stora bokstäver
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp






/*
document.addEventListener('DOMContentLoaded', function () {
  const randomWords = ['apple', 'banana', 'cherry', 'date', 'elderberry']; // Add more words
  let currentWord = '';
  let guessedWord = [];
  let remainingTries = 5;

  const headerButton = document.getElementById('header__button');
  const submitButton = document.getElementById('submitButton');
  const inputText = document.getElementById('inputText');
  const hangmanFigureParts = document.querySelectorAll('#scaffold, #legs, #arms, #body, #head');
  const countdownCircle = document.querySelector('.main__countdown--circle');
  const wrongUsedWords = document.querySelector('.main__wrongUsedWords');
  const youWinMessage = document.querySelector('.header__youWin');
  const youLoseMessage = document.querySelector('.header__youLoose');

  function initializeGame() {
    // Reset game variables
    currentWord = getRandomWord();
    guessedWord = Array(currentWord.length).fill('_');
    remainingTries = 5;
    updateHangman(remainingTries);
    updateWordDisplay();
    countdownCircle.textContent = remainingTries;
    wrongUsedWords.textContent = '';
    youWinMessage.style.display = 'none';
    youLoseMessage.style.display = 'none';
  }

  function getRandomWord() {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  }

  function updateWordDisplay() {
    const wordDisplay = guessedWord.join(' ');
    document.querySelector('.main__randomWord').textContent = wordDisplay;
  }

  function updateHangman(tries) {
    hangmanFigureParts.forEach((part, index) => {
      if (index < 5 - tries) {
        part.style.display = 'none';
      } else {
        part.style.display = 'block';
      }
    });
  }

  function checkGuess() {
    const guessedChar = inputText.value.toLowerCase();
    inputText.value = '';

    if (currentWord.includes(guessedChar)) {
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guessedChar) {
          guessedWord[i] = guessedChar;
        }
      }
      updateWordDisplay();

      if (!guessedWord.includes('_')) {
        // All letters guessed, player wins
        youWinMessage.style.display = 'block';
      }
    } else {
      remainingTries--;
      updateHangman(remainingTries);
      countdownCircle.textContent = remainingTries;

      if (remainingTries === 0) {
        // No more tries left, player loses
        youLoseMessage.style.display = 'block';
      }

      wrongUsedWords.textContent += `${guessedChar} `;
    }
  }

  headerButton.addEventListener('click', initializeGame);
  submitButton.addEventListener('click', checkGuess);

  initializeGame();
});


*/ 