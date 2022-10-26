let monstarsScoreDisplay = document.getElementById("monstars-score")
let tuneSquadScoreDisplay = document.getElementById("tune-squad-score")
let monstarsScore = 0
let tuneSquadScore = 0

function monstarsPlusOne() {
    monstarsScore += 1
    monstarsScoreDisplay.textContent = monstarsScore
}

function monstarsPlusTwo() {
    monstarsScore += 2
    monstarsScoreDisplay.textContent = monstarsScore
}

function monstarsPlusThree() {
    monstarsScore += 3
    monstarsScoreDisplay.textContent = monstarsScore
}

function tuneSquadPlusOne() {
    tuneSquadScore += 1
    tuneSquadScoreDisplay.textContent = tuneSquadScore
}

function tuneSquadPlusTwo() {
    tuneSquadScore += 2
    tuneSquadScoreDisplay.textContent = tuneSquadScore
}

function tuneSquadPlusThree() {
    tuneSquadScore += 3
    tuneSquadScoreDisplay.textContent = tuneSquadScore
}

function newGame() {
    monstarsScore = 0
    tuneSquadScore = 0
    monstarsScoreDisplay.textContent = monstarsScore
    tuneSquadScoreDisplay.textContent = tuneSquadScore
}