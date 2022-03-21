document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.getElementsByTagName("button");
})

const yourChoiceDisplay = document.getElementById('your_choice')
const computerChoiceDisplay = document.getElementById('computer_choice')
const resultDisplay = document.getElementById('result')
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
    const randomNumberComputer = Math.floor (Math.random() * possibleSelections.length) + 1
    
    if (randomNumberComputer === 1) {
        robotChoice = 'rock'
        
    }
    if (randomNumberComputer === 2) {
        robotChoice = 'paper'
    }
    if (randomNumberComputer === 3) {
        robotChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = robotChoice
}

function getResults() {
    if (robotChoice === yourChoice) {
        result = 'draw'
    }
    if (robotChoice === 'rock' && yourChoice === 'paper') {
        result = 'You Win'
    }
    if (robotChoice === 'rock' && yourChoice === 'scissors') {
        result = 'You Lose'
    }
    if (robotChoice === 'paper' && yourChoice === 'scissors') {
        result = 'You Win'
    }
    if (robotChoice === 'paper' && yourChoice === 'rock') {
        result = 'You Lose'
    }
    if (robotChoice === 'scissors' && yourChoice === 'rock') {
        result = 'You Win'
    }
    if (robotChoice === 'scissors' && yourChoice === 'paper') {
        result = 'You Lose'
    }
    resultDisplay.innerHTML = result



}









