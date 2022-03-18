document.addEventListener("DOMContentLoaded", => e {
    let buttons = document.getElementsByTagName("button");
})

const yourChoice = document.getElementById('your_choice')
const computerChoice = document.getElementById('computer_choice')
const result = document.getElementById('result')

const CHOICES = [
    {
        id: 'rock',
        name: 'Rock',
        winsOver: 'scissors',
        imageSrc: '<path_to_image>'
    },
    {
        id: 'paper',
        name: 'Paper',
        winsOver: 'rock',
        imageSrc: '<path_to_image>'
    },
    {
        id: 'scissors',
        name: 'Scissors',
        winsOver: 'paper',
        imageSrc: '<path_to_image>'
    },
]





