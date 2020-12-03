let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function win(userChoice) {
  userScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "Yon win!";
  scoreBoard_div.classList.add("green-glow");
  setTimeout(function() {
    scoreBoard_div.classList.remove("green-glow")},
    500);
}

function lose(userChoice) {
  computerScore ++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "Yon lost!"
  scoreBoard_div.classList.add("red-glow");
  setTimeout(function() {
    scoreBoard_div.classList.remove("red-glow")},
    500);
}

function draw(userChoice) {
  result_p.innerHTML = "It's a draw!"
  scoreBoard_div.classList.add("grey-glow");
  setTimeout(function() {
    scoreBoard_div.classList.remove("grey-glow")},
    500);
}

function game (userChoice) {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: lose(userChoice);
      break;
    case 1: draw(userChoice);
      break;
    case 2: win(userChoice);
      break;
  }
}

function main (){
rock_div.addEventListener('click', function() {
  game("r")
} )

paper_div.addEventListener('click', function() {
  game("p")
} )

scissor_div.addEventListener('click', function() {
  game("s")
} )
}

main();
