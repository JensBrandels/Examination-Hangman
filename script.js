
//1. Skapa array med ord
let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']

//Skapa för att kunna nå randomIndex utanför alla funktioner
let randomIndex; 
let splitWord;

//2. Skapa initiate game knapp
let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{

    randomIndex = getRandomWord(words)
    splitWord = wordSplitter(randomIndex)

    console.log(randomIndex);
    console.log(splitWord);

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
    let displaySplitWord = document.querySelector('.main__randomWord')
    displaySplitWord.innerHTML = splitWord.join('');
    return splitWord;
    // console.log(splitWord);
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

//9. + display image och kör en countdown på de 6 försöken
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp
