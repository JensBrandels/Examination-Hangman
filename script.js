
//1. Skapa array med ord

let words = ['happy', 'chair', 'water', 'smile', 'philosopher', 'cat', 'diamond']
console.log(words);
//2. Skapa initiate game knapp

let gameStart = document.querySelector('#header__button')
gameStart.addEventListener('click', ()=>{

    getRandomWord(words)

});


//3. slumpa ut random ord med math.random och lägg i en tom array
function getRandomWord(words){

    const randomIndex = words[Math.floor(Math.random() * words.length)]; 
    

    let displayWord = document.querySelector('.main__randomWord')
    displayWord.innerHTML = randomIndex;
    
    return randomIndex;
}
console.log(getRandomWord(words));
//4. Gör den tomma arrayens nyinlagda string till : ['s't'r'i'n'g'] dynamisk nyckel ? 
//5. input fält som bara kan ha en bokstav som alternativ
//6. Jämför den mot den dynamiska nyckeln på submit knappen (enter)
//7. If else sats inkluderar bokstaven gör en funktion som skriver ut den
//8. annars kasta in bostaven i en ny tom array och gör det synligt på hemsidan
//9. + display image och kör en countdown på de 6 försöken
//10. ifall countdown hamnar på 0, kalla på diven "Game over" och visa det slumpade ordet. try again knapp
//11. Ifall man lyckas skriva ut hela ordet, kalla på diven "You Win!" och skapa en play again knapp
