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

    //koppla enter till submitbutton 
    
    underlinesArray = underlines.split('');

    //Ej kunna submita samma bokstav 2 ggr
    if (wrongArray.includes(guessedLetter)) {
      return
    }

    if (pickedWord.includes(guessedLetter)) {
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === guessedLetter) {
                underlinesArray[i] = guessedLetter;
                underlines = underlinesArray.join('')
                console.log(underlinesArray);//logga varje bokstav för att se vart de hamnar i arrayen
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
//10. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" 
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

//11. Kalla på diven "Game over" och visa det slumpade ordet.
function restartGame(){
  // återställ bilden till gömd
  hangmanScaffold.style.visibility = 'hidden';
  hangmanHead.style.visibility = 'hidden';
  hangmanBody.style.visibility = 'hidden';
  hangmanArms.style.visibility = 'hidden';
  hangmanLegs.style.visibility = 'hidden';

  pickedWord = null;
  underlines = null;
  underlinesArray = null;
  displaySplitWord.innerHTML = '';

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
  submitButton.disabled = false;
}

//Återställa input fältet vid varje submit
// Enter på submit knappen
// Visa det slumpade ordet i (you loose)




/*

let pickedWord;
let initialPickedWord;
let underlines;
let underlinesArray;
let guessedLetter;
let wrongArray = [];
let wrongChars = document.querySelector('.main__wrongUsedWords');
let submitButton = document.querySelector('#submitButton');
let displaySplitWord = document.querySelector('.main__randomWord');
let win = document.querySelector('.header__youWin');
let lose = document.querySelector('.header__youLose');
let hangmanParts = {
  scaffold: document.getElementById('scaffold'),
  head: document.getElementById('head'),
  body: document.getElementById('body'),
  arms: document.getElementById('arms'),
  legs: document.getElementById('legs'),
};
let wrongGuessCount = 0;
let triesLeft = 5;

function initializeGame() {
  initialPickedWord = getRandomWord();
  pickedWord = initialPickedWord;
  underlines = pickedWord.split('').fill('_', 0).join('');
  displaySplitWord.textContent = underlines;
  for (const part in hangmanParts) {
    hangmanParts[part].style.visibility = 'hidden';
  }
  win.style.visibility = 'hidden';
  lose.style.visibility = 'hidden';
  wrongArray = [];
  wrongChars.textContent = '';
  triesLeft = 5;
  document.querySelector('.main__countdown--circle').textContent = `${triesLeft}`;
  submitButton.disabled = false;
}

let gameStart = document.querySelector('#header__button');
gameStart.addEventListener('click', () => {
  initializeGame();
  gameStart.innerText = 'Restart';
});

function getRandomWord() {
  let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond'];
  return words[Math.floor(Math.random() * words.length)];
}

submitButton.addEventListener('click', () => {
  guessedLetter = document.getElementById('inputText').value;
  document.getElementById('inputText').value = '';
  if (wrongArray.includes(guessedLetter)) {
    return;
  }
  underlinesArray = underlines.split('');
  if (pickedWord.includes(guessedLetter)) {
    for (let i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i] === guessedLetter) {
        underlinesArray[i] = guessedLetter;
        underlines = underlinesArray.join('');
        displaySplitWord.textContent = underlines;
        checkWin();
      }
    }
  } else {
    wrongArray.push(guessedLetter);
    wrongChars.textContent = wrongArray.join(', ');
    wrongGuessCount++;
    triesLeft--;
    document.querySelector('.main__countdown--circle').textContent = `${triesLeft}`;
    updateHangmanDrawing(wrongGuessCount);
  }
});

function updateHangmanDrawing(wrongGuessCount) {
  const parts = Object.keys(hangmanParts);
  if (wrongGuessCount <= parts.length) {
    hangmanParts[parts[wrongGuessCount - 1]].style.visibility = 'visible';
  }
  if (wrongGuessCount === parts.length) {
    gameOver();
  }
}

function checkWin() {
  if (underlines === pickedWord) {
    win.style.visibility = 'visible';
    displaySplitWord.textContent = pickedWord;
    submitButton.disabled = true;
  }
}

function gameOver() {
  lose.style.visibility = 'visible';
  displaySplitWord.textContent = initialPickedWord;
  gameStart.innerText = 'Try again!';
  submitButton.disabled = true;
  lose.textContent = `You lose! The word was: ${initialPickedWord}`;
}

window.addEventListener('load', () => {
  initializeGame();
});

*/ 