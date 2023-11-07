
//1. Skapa array med ord

let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']
//2. Skapa initiate game knapp

let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{

    getRandomWord(words)

});

//3. slumpa ut random ord med math.random och lägg i en tom array
function getRandomWord(randomWord){

    const randomIndex = randomWord[Math.floor(Math.random() * randomWord.length)]; 
    
    //skriv ut det nya ordet på hemsidan
    let displayWord = document.querySelector('.main__randomWord')
    displayWord.innerHTML = randomIndex;

    
    //lägger ordet i array splittad med 1 bokstav per index
    let splitWord = randomIndex.split('')

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



//6. Jämför den mot den splittade stringen på submit knappen (enter)
function compareCharacters(split, input) {
    let inputValue = input.document.getElementById('inputText').value
    split = getRandomWord(words)

    if(inputValue === )
}


//7. If else sats inkluderar bokstaven gör en funktion som skriver ut den
//8. annars kasta in bostaven i en ny tom array och gör det synligt på hemsidan
//9. + display image och kör en countdown på de 6 försöken
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp
