
//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let randomIndex; 
let splitWord;
let displaySplitWord = document.querySelector('.main__randomWord');

//2. Skapa initiate game knapp
let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{

    displaySplitWord.innerHTML = '';

    randomIndex = getRandomWord(words)
    splitWord = wordSplitter(randomIndex)

    console.log(randomIndex);
    //console.log(splitWord);

});

//3. slumpa ut random ord med math.random och lägg i en tom array
function getRandomWord(randomWord){
    const randomIndex = randomWord[Math.floor(Math.random() * randomWord.length)]; 
    //skriv ut det nya ordet på hemsidan
    return randomIndex
}

//lägger ordet i array splittad med 1 bokstav per index
function wordSplitter(randomWord) {
    let splitWord = randomWord.split('')

    hideChars(splitWord);

    //return splitWord;
    console.log(splitWord);
}

function hideChars(splitWord) {
    // forEach loop som skapar en span mellan varje index, för att få understäcken
    splitWord.forEach((item, index) => {
        const span = document.createElement('span');
        span.textContent = item;
        //Göm texten, ej understräcken
        span.innerText = '_';
        //span.style.textDecoration = 'underline';
        span.style.marginRight = '10px';
        displaySplitWord.appendChild(span);
        console.log(span);
});
}



//5. input fält som bara kan ha en bokstav som alternativ
let maxInput = document.getElementById('inputText').addEventListener('input', function(inputMax){
    let maxChars = 1;

    if(inputMax.target.value.length > maxChars) {
        inputMax.target.value = inputMax.target.value.substr(0, maxChars);
    }
})

let wrongArray = []
let wrongChars = document.querySelector('.main__wrongUsedWords')
wrongChars.innerText = wrongArray

//7. If else sats inkluderar bokstaven gör en funktion som skriver ut den på submitknappen
let submitButton = document.querySelector('#submitButton')
submitButton.addEventListener('click', () =>{

    let inputValue = document.getElementById('inputText').value;
    
    if (splitWord.includes(inputValue)) {
        console.log('Letter is in the word');

    } else{
        //8. annars kasta in bostaven i en ny tom array och gör det synligt på hemsidan
        wrongArray.push(inputValue)
        console.log('Letter is NOT in the word');
    }

})
//Gör chars till stora bokstäver
//Få hjälp med att få understräck att fungera
//hjälp med att jämföra bokstäverna i ordet med inputbokstav


//9. + display image och kör en countdown på de 6 försöken
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp











/*

const words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond'];
let randomIndex;
let splitWord;
let wrongArray = [];
const displaySplitWord = document.querySelector('.main__randomWord');
const maxInput = document.getElementById('inputText');
const wrongChars = document.querySelector('.main__wrongUsedWords');
const submitButton = document.querySelector('#submitButton');

// Variables for hangman SVG elements
const hangmanHead = document.getElementById('head');
const hangmanBody = document.getElementById('body');
const hangmanArms = document.getElementById('arms');
const hangmanLegs = document.getElementById('legs');
const hangmanScaffold = document.getElementById('scaffold');

// Counter for wrong guesses
let wrongGuessCount = 0;

function getRandomWordFromArray(wordArray) {
  return wordArray[Math.floor(Math.random() * wordArray.length)];
}

function splitWordIntoChars(randomWord) {
  const splitWord = randomWord.split('');
  hideChars(splitWord);
  return splitWord;
}

function hideChars(splitWord) {
  splitWord.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = '_';
    span.style.marginRight = '10px';
    displaySplitWord.appendChild(span);
  });
}

maxInput.addEventListener('input', function (inputEvent) {
  const maxChars = 1;
  if (inputEvent.target.value.length > maxChars) {
    inputEvent.target.value = inputEvent.target.value.substr(0, maxChars);
  }
});

submitButton.addEventListener('click', () => {
  const guessedLetter = document.getElementById('inputText').value;

  if (splitWord.includes(guessedLetter)) {
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

// Initialize the game by selecting a random word
randomIndex = Math.floor(Math.random() * words.length);
splitWord = splitWordIntoChars(words[randomIndex]);

*/ 