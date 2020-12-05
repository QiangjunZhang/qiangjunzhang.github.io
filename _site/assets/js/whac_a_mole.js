const square = document.querySelectorAll('.cell')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#user-score')
const gameTime = 60
const moleFreq = 800
const numOfMoles = 9
let result = 0
let currentTime = timeLeft.textContent


function randomSquare() {
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random()*numOfMoles)]
  randomPosition.classList.add('mole')
  hitPosition = randomPosition.id
}

function randomMonster() {
  square.forEach(className => {
    className.classList.remove('monster')
  })
  let randomMonsterPosition = square[Math.floor(Math.random()*numOfMoles)]
  randomMonsterPosition.classList.add('monster')
  hitMonsterPosition = randomMonsterPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition){
      result = result + 1
      score.textContent = result
    } else if (id.id === hitMonsterPosition) {
      result = result - 1
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerID = null
  timerID = setInterval(randomSquare, moleFreq)
  let monsterId = setInterval(randomMonster, moleFreq)
}

function stopMole() {
  clearInterval(timerID)
}

moveMole()

function startGame() {
  console.log(currentTime=== gameTime.toString());
  if (currentTime === gameTime.toString()) {
    let stop = setInterval(countDown, 1000)
    function countDown() {
      currentTime--
      timeLeft.textContent = currentTime
      if (currentTime === 0) {
        clearInterval(stop)
        timeLeft.textContent = gameTime
        currentTime = timeLeft.textContent
        score.textContent = 0
        alert('GAME OVER Your final score is' + result)
      }
    }
  }
}
