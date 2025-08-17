function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
	return prompt();
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		humanChoice = humanChoice.toLowerCase();

		//winning condtns for human
		if(humanChoice === "rock" && computerChoice === "scissors" ||
			humanChoice === "paper" && computerChoice === "rock" ||
			humanChoice === "scissors" && computerChoice === "paper") {
			console.log(`You win! ${humanChoice} beats ${computerChoice}`);
			humanScore++;
		} 
		else if (humanChoice === computerChoice) {
			console.log(`Tie! You both chose ${humanChoice}`);
		} 
		else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			computerScore++;
		}
	}

	//five rounds
	for(let i = 0; i < 5; i++) {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}

	console.log(`You scored ${humanScore} to ${computerScore}`);
}

playGame();


