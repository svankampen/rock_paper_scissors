//choices and logic stored as const
const CHOICES = [
    {
        id: 'rock',
        name: 'Rock',
        winsOver: 'scissors',
        imageSrc: './assets/images/Rock.png'
    },
    {
        id: 'paper',
        name: 'Paper',
        winsOver: 'rock',
        imageSrc: './assets/images/Paper.png'
    },
    {
        id: 'scissors',
        name: 'Scissors',
        winsOver: 'paper',
        imageSrc: './assets/images/Scissors.png'
    },
]

const playerChoiceDisplay = document.getElementById('your_choice');
const computerChoiceDisplay = document.getElementById('computer_choice');

const resultDisplay = document.getElementById('result');
const userScore = document.getElementById('user_points');
const computerScore = document.getElementById('robot_points');
document.getElementsByClassName('buttonsClick');
const buttonArea = document.getElementById('button_area');


document.addEventListener("DOMContentLoaded", () => {
    initUI();
    initEventListeners();
}); // event listener to load the dom 

function initEventListeners() {
    const possibleChoices = Array.from(document.getElementsByClassName('buttonsClick'));
    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', onChoiceClick));
}

function onChoiceClick(e) {
    const playerChoiceId = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoiceId;
    const computerChoiceId = getComputerChoiceId();
    checkForWinner(playerChoiceId, computerChoiceId);
}


function getComputerChoiceId() {
    const randomNumberComputer = Math.floor (Math.random() * CHOICES.length); // function to get computer choice using floor for rounding
    const randomChoiceId =  CHOICES[randomNumberComputer].id;
    computerChoiceDisplay.innerHTML = randomChoiceId; // where to display
    return randomChoiceId;
}

let result;

function checkForWinner(playerChoiceId, computerChoiceId) {
    const playerChoiceConfig = CHOICES.find(eachChoice => eachChoice.id === playerChoiceId);
    
    if (computerChoiceId === playerChoiceId) {
        result = 'Result : Draw';
        
    } else if(playerChoiceConfig.winsOver === computerChoiceId) {
        // Player won
        result = 'Result : You Win';
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;

    } else {
        // Computer won
        result = 'Result : You Lose';
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    } 

    resultDisplay.innerHTML = result; // display result for each game
}

function initUI() {
    let pictureAreaHtml = '', buttonsHtml = '';
    CHOICES.forEach(eachChoice => {
        pictureAreaHtml+= `<img class="images" src="${eachChoice.imageSrc}" alt="image of ${eachChoice.name}">`;
        buttonsHtml+= `<button class= "buttonsClick" id="${eachChoice.id}" data-selection = "${eachChoice.name}">${eachChoice.name}</button>`;
    });

    const buttonAreaHtml = `<h2>Take Your Pick</h2><div id="picture_area">${pictureAreaHtml}</div><div id="buttons">${buttonsHtml}</div>`;
    buttonArea.innerHTML = buttonAreaHtml;
}