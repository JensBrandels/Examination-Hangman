//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let pickedWord;
let underlines;
let underlinesArray;
let wrongArray = [];
let wrongChars = document.querySelector('.main__wrongUsedWords');
const submitButton = document.querySelector('#submitButton');
let displaySplitWord = document.querySelector('.main__randomWord');

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
    const guessedLetter = document.getElementById('inputText').value;
    
    console.log(pickedWord);
    underlinesArray = underlines.split('')
    
    if (pickedWord.includes(guessedLetter)) {
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === guessedLetter) {
                underlinesArray[i] = guessedLetter;
                underlines = underlinesArray.join('')
                console.log(underlinesArray);
                displaySplitWord.innerHTML = underlines
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

function gameOver() {
  // gameOver funktion som ska visa meddelandet (Game Over)
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
}
  /*  document.getElementsByClassName('main__countdown--circle').innerText = '5';
  pickedWord = null;
  underlines = null;
  underlinesArray = null;
  wrongArray = [];
  wrongChars.innerText = '';
  displaySplitWord.innerHTML = '';
  wrongGuessCount.innerText = 0;


//Gör chars till stora bokstäver
//Få hjälp med att få understräck att fungera
//hjälp med att jämföra bokstäverna i ordet med inputbokstav


//9. + display image och kör en countdown på de 6 försöken
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp






/*

function checkWin() {
    if (underlines === pickedWord) {
        displaySplitWord.innerHTML = pickedWord;
        gameStart.innerText = 'You won! Play again';
        submitButton.disabled = true;
    }
}

submitButton.addEventListener('click', () => {
    if (gameStart.disabled) return; 
    const guessedLetter = document.getElementById('inputText').value.toLowerCase(); 

    if (wrongArray.includes(guessedLetter)) {
        // Prevent guessing the same letter again
        alert('You already guessed this letter.');
        return;
    }

    underlinesArray = underlines.split('');

    if (pickedWord.includes(guessedLetter)) {
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === guessedLetter) {
                underlinesArray[i] = guessedLetter;
            }
        }
        underlines = underlinesArray.join('');
        displaySplitWord.innerHTML = underlines;
        checkWin(); // Check if the player has won
    } else {
        wrongArray.push(guessedLetter);
        wrongChars.innerText = wrongArray.join(', ');
        wrongGuessCount++;
        triesLeft--;
        document.querySelector('.main__countdown--circle').innerText = `${triesLeft}`;
        updateHangmanDrawing(wrongGuessCount);
        if (wrongGuessCount === 5) {
            gameOver();
        }
    }
});

*/ 