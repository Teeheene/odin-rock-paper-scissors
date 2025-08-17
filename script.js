//written by teehee
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	const viewChoices = document.querySelectorAll(".computer .choices");
	const chosen = choices[Math.floor(Math.random() * 3)];

	console.log(viewChoices);
	viewChoices.forEach((btn, index) => {
		btn.classList.remove("highlight");
		if (chosen === choices[index]) {
			btn.classList.add("highlight");
		}
	});

	return chosen;
}

//getHumanChoice
let getHumanChoice = "rock"; //default value
const btnChoices = document.querySelectorAll(".human .choices");

btnChoices.forEach((btn,index) => {
	btn.addEventListener("click", () => {
		getHumanChoice = choices[index];
		
		//for styling
		btnChoices.forEach(btn => btn.classList.remove("highlight"));
		btn.classList.add("highlight");
	});
});

function playGame() {
	const results = document.querySelector(".results");
	let humanScore = 0;
	let computerScore = 0;

	function checkBestOfFive() {
		//for best to five
		if(humanScore === 5 || computerScore === 5)
		{
			results.textContent = "Game over! ";
			if(humanScore === 5)
				results.textContent += `You won with a score of ${humanScore} to ${computerScore}`;
			else 
				results.textContent += `You lost with a score of ${humanScore} to ${computerScore}`;
			
			btnPlay.textContent = "Retry?";
			btnPlay.style.padding = "5px 171px";

			return 1;
		}
		console.log(`${humanScore}-${computerScore}`);

		return 0;
	}

	function playRound(humanChoice, computerChoice) {
		//winning condtns for human
		if(humanChoice === "rock" && computerChoice === "scissors" ||
			humanChoice === "paper" && computerChoice === "rock" ||
			humanChoice === "scissors" && computerChoice === "paper") {
			console.log(`You win! ${humanChoice} beats ${computerChoice}`);
			results.textContent = `You win! ${humanChoice} beats ${computerChoice}`; 
			humanScore++;
		} 
		else if (humanChoice === computerChoice) {
			console.log(`Tie! You both chose ${humanChoice}`);
			results.textContent = `Tie! You both chose ${humanChoice}`; 
		} 
		else {
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
			results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`; 
			computerScore++;
		}
	}

	function restartGame() {
		humanScore = 0;
		computerScore = 0;
	}

	const btnPlay = document.querySelector(".play");
	btnPlay.addEventListener("click", () => {
		let result = checkBestOfFive();
		
		if(!result) {
			playRound(getHumanChoice, getComputerChoice());
			btnPlay.textContent = "Play";
			btnPlay.style.padding = "5px 183px";
		}
		else
			restartGame();
	});
}

playGame();

