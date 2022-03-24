document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.getElementsByTagName("button");
}) // event listener to load the dom declare buttons for use later

const yourChoiceDisplay = document.getElementById('your_choice')
const computerChoiceDisplay = document.getElementById('computer_choice')
const resultDisplay = document.getElementById('result')
const userScore = document.getElementById('userpoints')
const robotScore = document.getElementById('robotpoints')
const possibleSelections = document.querySelectorAll('button') // can pick this out by class name also

let yourChoice
let robotChoice
let draw

possibleSelections.forEach(possibleSelection => possibleSelection.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    getComputerChoice()
    getResults()
}))


function getComputerChoice() {
    const randomNumberComputer = Math.floor (Math.random() * possibleSelections.length) + 1 // function to get computer choice using floor for rounding
    
    if (randomNumberComputer === 1) {
        robotChoice = 'rock'
        
    }
    if (randomNumberComputer === 2) {
        robotChoice = 'paper'
    }
    if (randomNumberComputer === 3) {
        robotChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = robotChoice // where to display
}

function getResults() { //need to add to function that it counts and adds scores via consts for each area
    if (robotChoice === yourChoice) {
        result = 'Result : Draw'
    }
    if (robotChoice === 'rock' && yourChoice === 'paper') {
        result = 'Result : You Win'
    }
    if (robotChoice === 'rock' && yourChoice === 'scissors') {
        result = 'Result : You Lose'
    }
    if (robotChoice === 'paper' && yourChoice === 'scissors') {
        result = 'Result : You Win'
    }
    if (robotChoice === 'paper' && yourChoice === 'rock') {
        result = 'Result : You Lose'
    }
    if (robotChoice === 'scissors' && yourChoice === 'rock') {
        result = 'Result : You Win'
    }
    if (robotChoice === 'scissors' && yourChoice === 'paper') {
        result = 'Result : You Lose'
    }
    resultDisplay.innerHTML = result // display result for each game



}









