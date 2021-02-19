'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent = "Correct Number 🎊";
//
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
//
// console.log(document.querySelector(".guess").value = 23);
//

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
//When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = "Not a number ❌";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number 🎊";
        document.querySelector(".score").textContent = score;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = score
        }

    }
    //When score is too Hight
 else if(guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high 😩";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector('.message').textContent = "GAME OVER 😭";
            document.querySelector(".score").textContent = 0;
        }

    //When score is too Low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too low 😩";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector('.message').textContent = "GAME OVER 😭";
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".reset").addEventListener("click", function() {
    location.reload();
});
