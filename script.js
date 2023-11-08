//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let randomIndex; 
let pickedWord;
let underlines;
let underlinesArray;
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
        wrongArray.push(guessedLetter);
        console.log('Letter is NOT in the word');
        wrongChars.innerText = wrongArray.join(', '); 
        // Display wrong letters
    
        // Increment wrong guess count and update hangman drawing
        wrongGuessCount++;
        updateHangmanDrawing(wrongGuessCount);
        
    }
})


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

submitButton.addEventListener('click', () => {
    const guessedLetter = document.getElementById('inputText').value.toLowerCase(); // Convert input to lowercase

    if (pickedWord.includes(guessedLetter)) {
        // The guessed letter is in the word
        let underlinesArray = underlines.split('');
        for (let i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i] === guessedLetter) {
                underlinesArray[i] = guessedLetter;
            }
        }
        underlines = underlinesArray.join('');
        displaySplitWord.innerHTML = underlines;
        
        // Check if the player has guessed the entire word
        if (underlines === pickedWord) {
            // You win! Implement win logic here
            gameWon();
        }
    } else {
        // The guessed letter is not in the word
        wrongArray.push(guessedLetter);
        wrongChars.innerText = wrongArray.join(', ');
        
        // Increment wrong guess count and update hangman drawing
        wrongGuessCount++;
        updateHangmanDrawing(wrongGuessCount);
        
        // Check if the player has reached the maximum wrong guesses
        if (wrongGuessCount === 6) {
            // Game over - implement game over logic here
            gameOver();
        }
    }
});


*/ 