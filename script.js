const buttons = document.querySelectorAll("button");
const paper = document.querySelector(".paper");
const stone = document.querySelector(".stone");
const scissors = document.querySelector(".scissors");

const games = document.querySelector(".stats__games")
let allGames = 0;
const wins = document.querySelector(".stats__wins")
let allWins = 0;
const luck = document.querySelector(".stats__luck")

const options = ['paper', 'stone', 'scissors'];

let your = document.querySelector(".game__your");
let computer = document.querySelector(".game__opponent");
let winner = document.querySelector(".game__winner");

const play = function() {

    //zerowanie
    your.textContent = '';
    computer.textContent = '';
    winner.textContent = '';

    //wszystkie gry
    allGames++;
    games.textContent = allGames;

    //Twój wybór
    your.textContent = this.textContent.toUpperCase();

    //Wybór komputera
    let random = randomNumber = Math.floor(Math.random() * options.length);
    computer.textContent = options[randomNumber].toUpperCase();

    //Wygrany?
    if (your.textContent === computer.textContent) {
        winner.textContent = "DRAW";
    } else if ((your.textContent === "PAPER" && computer.textContent === "STONE") || (your.textContent === "STONE" && computer.textContent === "SCISSORS") || (your.textContent === "SCISSORS" && computer.textContent === "PAPER")) {
        winner.textContent = "YOU";
        allWins++
        wins.textContent = allWins;
    } else {
        winner.textContent = "COMPUTER"
    }

    //luck
    let luckNumber = allWins/allGames*100;
    luck.textContent = Math.floor(luckNumber) + "%";
}

buttons.forEach(function(hand) {
hand.addEventListener('click', play);
})