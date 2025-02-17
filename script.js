const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function () {
        let userChoice = this.id; 
        let computerChoice = choices[Math.floor(Math.random() * 3)]; 

        let result = getWinner(userChoice, computerChoice);

        document.getElementById("result").innerHTML = `
            You chose: ${userChoice} <br>
            Computer chose: ${computerChoice} <br>
            <strong>${result}</strong>
        `;

        if (result.includes("win 😁")) {
            playerScore++;
        } else if (result.includes("win 😞")) {
            computerScore++;
        }
        updateScoreboard();
    });
});

function getWinner(user, computer) {
    if (user === computer) {
        return "It's a draw 😐";
    } else if (
        (user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper") 
    ) {
        return "You win 😁";
    } else {
        return "Computer win 😞"; 
    }
}

function updateScoreboard() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;

}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScoreboard();
}