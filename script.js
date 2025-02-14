const choices = ["rock", "paper", "scissors"];

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
    });
});

function getWinner(user, computer) {
    if (user === computer) {
        return "It's a draw";
    } else if (
        (user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper") 
    ) {
        return "You win";
    } else {
        return "Computer win"; 
    }
}