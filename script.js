//Skapa för att kunna nå randomIndex utanför alla funktioner
let randomWord;
let underlines;
let underlinesArray;
let guessedLetter;
let storeWrongLetters = [];

//Variabler kopplade till html
let win = document.querySelector('.header__youWin');
let loose = document.querySelector('.header__youLoose');
let wrongLetter = document.querySelector('.main__wrongUsedWords');
let submitButton = document.querySelector('#submitButton');
let displayGuessedLetter = document.querySelector('.main__randomWord');

//Räknare
let wrongGuessCount = 0;
let triesLeft = 5

//Variabler för att hämta alla delar i SVG filen
const hangmanHead = document.getElementById('head');
const hangmanBody = document.getElementById('body');
const hangmanArms = document.getElementById('arms');
const hangmanLegs = document.getElementById('legs');
const hangmanScaffold = document.getElementById('scaffold');

//Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//disable submitButton innan start av spel
submitButton.disabled = true;

//Skapa startknapp på klick
let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{

    //kalla på restartGame funktionen vid varje omstart
    restartGame();

    //byter ut texten på button
    gameStart.innerText = 'Restart'

    //enable submitButton när spel startat
    submitButton.disabled = false;

    //Byter ut det slumpade ordet(randomWord) till understräck
    displayGuessedLetter.innerHTML = '';
    randomWord = getRandomWord() //sparar det randomiserade ordet i randomWord
    underlines = randomWord.split('').fill('_',0).join('')
    displayGuessedLetter.innerHTML = underlines

    console.log(randomWord); //logga slumpade ordet
});

//koppla enter till submitknappen
document.getElementById('inputText').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('submitButton').click(); //Triggar en 'click'-händelse på submit-knappen
  }
});

//If else sats inkluderar bokstaven gör en funktion som skriver ut den på submitknappen
submitButton.addEventListener('click', () => {
    guessedLetter = document.getElementById('inputText').value;

    //splitta underlines till ny array
    underlinesArray = underlines.split('');

    //Återställa input fältet vid varje submit
    document.getElementById('inputText').value = '';

    //Ej kunna submita samma bokstav 2 ggr
    if (storeWrongLetters.includes(guessedLetter)) {
      return
    }

    if (randomWord.includes(guessedLetter)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guessedLetter) {
                underlinesArray[i] = guessedLetter;
                underlines = underlinesArray.join('')
                console.log(underlinesArray);//logga varje bokstav för att se vart de hamnar i arrayen
                displayGuessedLetter.innerHTML = underlines
                checkWin();
            }
        }
    } else {
        //lägg in felgissade letters i storeWrongLetters
        storeWrongLetters.push(guessedLetter);
        wrongLetter.innerText = storeWrongLetters.join(', '); 
    
        //uppdaterar antalet felgissningar i en counter för att visa hangmanbilderna
        wrongGuessCount++;
        updateHangmanDrawing(wrongGuessCount); 

        //För att skriva ut triesLeft på hemsidan
        triesLeft--;
        document.getElementsByClassName('main__countdown--circle')[0].innerHTML = `${triesLeft}`;
    }
})

////////////////////////////////////////ALL FUNCTIONS////////////////////////////////////////

//slumpa ut random ord och lägg i en tom array
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]; 
}

//Visa hangman bilderna i funktionen
function updateHangmanDrawing(wrongGuessCount) {
  //Visa hangman bilderna i ordning 1-5
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
      //När vi når 5 i wrongguesscount, kör game over funktionen
      gameOver();
      break;
    default:
      break;
  }
}

//Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" 
function checkWin() {
  if (underlines === randomWord) {
      win.classList.remove('header__winHidden');
      console.log(win);
      displayGuessedLetter.innerHTML = randomWord;
      submitButton.disabled = true;
  }
}

function gameOver() {
  //gameOver funktion som ska visa meddelandet (Game Over)
  loose.classList.remove('header__looseHidden');
  // console.log(loose);
  //Visa det slumpade ordet i (you loose)
  document.getElementsByClassName('header__youLooseVisible')[0].innerHTML = `The word is <br> ${randomWord}`
  //Ändrar texten på button till 'Try again'
  gameStart.innerText = 'Try again!'
  submitButton.disabled = true;
}

//Kalla på diven "Game over" och visa det slumpade ordet.
function restartGame(){
  //återställ bilden till gömd
  hangmanScaffold.style.visibility = 'hidden';
  hangmanHead.style.visibility = 'hidden';
  hangmanBody.style.visibility = 'hidden';
  hangmanArms.style.visibility = 'hidden';
  hangmanLegs.style.visibility = 'hidden';

  //nolla/återställ alla variabler till ursprungsläget
  randomWord = null;
  underlines = null;
  underlinesArray = null;
  displayGuessedLetter.innerHTML = '';

  //återställ guessCount
  wrongGuessCount = 0;

  //återställ triesLeft till 5 och skriv ut på hemsidan igen
  triesLeft = 5;
  document.getElementsByClassName('main__countdown--circle')[0].innerHTML = `${triesLeft}`;

  //återställ storeWrongLetters
  storeWrongLetters = [];
  wrongLetter.innerText = '';

  //göm checkWin + loose
  loose.classList.add('header__looseHidden');
  win.classList.add('header__winHidden');

  //återställ submit knappen
  submitButton.disabled = false;
}