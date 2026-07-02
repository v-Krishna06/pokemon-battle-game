let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Computer Choice
const genCompChoice = () => {
  const options = ["squirtle", "bulbasaur", "charmander"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw
const drawGame = () => {
  msg.innerText = "It's a draw! Battle again!";
  msg.style.backgroundColor = "#081b31";
};

// Winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `You win! ${capitalize(userChoice)} defeats ${capitalize(compChoice)}!`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You lose! ${capitalize(compChoice)} defeats ${capitalize(userChoice)}!`;
    msg.style.backgroundColor = "red";
  }
};

// Capitalize first letter
const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

// Game Logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "squirtle") {
      userWin = compChoice === "bulbasaur" ? false : true;
    } else if (userChoice === "bulbasaur") {
      userWin = compChoice === "charmander" ? false : true;
    } else {
      userWin = compChoice === "squirtle" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Click Events
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
