const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const choices = document.querySelectorAll('.btn')
const userChoice = document.getElementById('userChoice')
const computerChoice = document.getElementById('computerChoice')
const gameResult = document.getElementById('displayResult')
const finalScore = document.getElementById('totalDiv')
const gameFlow = document.getElementById('gameFlowBtns')

//Scoreboard
const totalScore = {computerScore: 0, playerScore: 0}

//Get random choice from computer
const computerRandom = () => {
    const rpg = ['rock', 'paper', 'scissors']
    
    const randomChoice = 
    Math.floor(Math.random() * rpg.length)
    
    computerChoice.innerHTML = `Computer chose ${rpg[randomChoice]}`
    return rpg[randomChoice]   
}

//Accept player & computer choices as argument and return the score
const displayResult = (player, computer) => {
    let score;

    if (player == computer) {
        score = 0
        gameResult.innerHTML = `It's a tie!`

    }
    else if(player == 'rock' && computer == 'paper') {
        score = -1
        gameResult.innerHTML = `You lose! Paper beats rock.`
    }
    else if(player == 'rock' && computer == 'scissors') {
        score = 1
        gameResult.innerHTML = `You win! Rock beats scissors.`
    }
    else if(player == 'paper' && computer == 'rock') {
        score = 1
        gameResult.innerHTML = `You win! Paper beats rock.`
    }
    else if(player == 'paper' && computer == 'scissors') {
        score = -1
        gameResult.innerHTML = `You lose! Scissors beats paper.`
    }
    else if(player == 'scissors' && computer == 'paper') {
        score = 1
        gameResult.innerHTML = `You win! Scissors beats paper.`
    }
    else if(player == 'scissors' && computer == 'rock') {
        score = -1
        gameResult.innerHTML = `You lose! Rock beats scissors.`
    }

    return score
}

// Event listener for player choice
function getChoice() {
    choices.forEach(choice => {
        choice.onclick = () => onClick(choice.value)
    })
}

//Compare choices, determine winner and store score
function onClick(playerChoice) {
    // console.log(playerChoice)
    const computerValue = computerRandom()
    // console.log(computerValue)

    const score = displayResult(playerChoice, computerValue)
    totalScore['playerScore'] += score
    console.log({score})

    //Handle computer's score
    if (score < 0) {
        totalScore['computerScore'] += 1
    }

    //Display playerChoice
    userChoice.innerText = `You chose ${playerChoice}.`
}

//Erase choices, display score and restart/endGame buttons
function displayScore() {
    finalScore.innerHTML = `Player: ` + totalScore['playerScore'] + `<br> Computer: ` + totalScore['computerScore']
    finalScore.style.fontSize = '30px'
    gameFlow.style.display = 'block'
    gameResult.innerHTML = ''
    computerChoice.innerText = ''
    userChoice.innerText = ''
}

//Resets scoreboard to zero and clears innerText
function endGame() {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    finalScore.style.display = 'visible'
    computerChoice.innerText = ''
    userChoice.innerText = ''
    gameResult.innerHTML = 'Thank you for playing!'
    gameFlow.style.display = 'none'
}