let computerImage = document.querySelector("#comp");
let userImage = document.querySelector("#user");
let Result = document.querySelector("#Result");

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const userChoice = "paper"
  const computerChoice = randomChoice()
  const winner = compare(userChoice, computerChoice)
  computerImage.src = `${computerChoice}.png`
  userImage.src = `${userChoice}.png`
  Result.textContent = `${winner}`
})

let rock = document.querySelector("#rock")
rock.addEventListener("click", () => {
  const userChoice = "rock"
  const computerChoice = randomChoice()
  const winner = compare(userChoice, computerChoice)
  computerImage.src = `${computerChoice}.png`
  userImage.src = `${userChoice}.png`
  Result.textContent = `${winner}`
})

let scissor = document.querySelector("#scissor")
scissor.addEventListener("click", () => {
  const userChoice = "scissor"
  const computerChoice = randomChoice()
  const winner = compare(userChoice, computerChoice)
  computerImage.src = `${computerChoice}.png`
  userImage.src = `${userChoice}.png`
  Result.textContent = `${winner}`
})

function randomChoice() {
  let choice = ["rock", "paper" , "scissor"]
  let computerChoice = [Math.floor(Math.random() * choice.length)]
  return choice[computerChoice];
}

function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "MATCH TIE"

  }
  else if (userChoice === "rock" && computerChoice === "scissor"
    || userChoice === "paper" && computerChoice === "rock"
    || userChoice === "scissor" && computerChoice === "paper"
  ) {
    return "YOU WON"

  }

  else if (computerChoice === "rock" && userChoice === "scissor"
    || computerChoice === "scissor" && userChoice === "paper"
    || computerChoice === "paper" && userChoice === "rock"
  ) {
    return "COMPUTER WON"
  }


}





