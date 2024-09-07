let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "black";
}



const showWinner = (userWin, userchoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userchoiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        CompScorePara.innerText = compScore;
        console.log("You Lost");
        msg.innerText = `You Lost ${compChoice} beats your ${userchoiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoiceId) => {
    console.log("user choice = ", userchoiceId);
    // generate comp choice
    const compChoice = genCompchoice();
    console.log("comp choice = ", compChoice);
    

    if(userchoiceId === compChoice) {
        // draw
        drawGame();
    } else {
        let userWin = true;
        if(userchoiceId === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoiceId = "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoiceId, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceId = choice.getAttribute("id");
        playGame(userchoiceId);
    })
})

