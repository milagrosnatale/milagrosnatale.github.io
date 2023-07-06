let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") {
    return "Rock 👊";
  } else if (letter === "p") {
    return "Paper 🤚";
  } else if (letter === "s") {
    return "Scissors ✌";
  }
}

function win(userChoice, compChoice) {
  // const smallUserWord = "user".fontsize(3).sub();
  // const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  // result_p.innerHTML = `${convertToWord(
  //   userChoice)}
  //${smallUserWord} beats ${convertToWord(
  //   compChoice
  // )}${smallCompWord}. You win.`;

  result_p.innerHTML = `
  <p> You win 🏆<p>
  <p class="make-choice">Your choice: ${convertToWord(userChoice)} </p>
  <p class="make-choice">Computer choice: ${convertToWord(compChoice)} </p>
  
  `;

  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 650);
}

function lose(userChoice, compChoice) {
  // const smallUserWord = "user".fontsize(3).sub();
  // const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  // result_p.innerHTML = `${convertToWord(
  //   userChoice
  // )}${smallUserWord} loses to ${convertToWord(
  //   compChoice
  // )}${smallCompWord}. You lost.`;

  result_p.innerHTML = `
  <p> You lost 💩<p>
  <p class="make-choice">Your choice: ${convertToWord(userChoice)} </p>
  <p class="make-choice">Computer choice: ${convertToWord(compChoice)} </p>
  `;

  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 650);
}

function draw(userChoice, compChoice) {
  // const smallUserWord = "user".fontsize(3).sub();
  // const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  // result_p.innerHTML = `${convertToWord(
  //   userChoice
  // )}${smallUserWord} equals ${convertToWord(
  //   compChoice
  // )}${smallCompWord}. Its a draw.`;

  result_p.innerHTML = `
  <p> It's a draw 🤝<p>
  <p class="make-choice">Your choice: ${convertToWord(userChoice)} </p>
  <p class="make-choice">Computer choice: ${convertToWord(compChoice)} </p>
  
  `;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 650);
}

function checkGameOver() {
  if (userScore === 10 || compScore === 10) {
    if (userScore === 10) {
      alert("Congrats! You have won this match.");
    } else {
      alert("You have lost this match. Don't worry, try again.");
    }
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `
    <p> Let's play again!<p>`;
  }
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, compChoice);
  }

  checkGameOver();
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();
