const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'yellow', 'blue']
let time = 0
let score = 0
startBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', (event) =>{
    if (event.target.classList.contains('time-btn')){
        time = perseInt(evemt.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})
board.addEventListener('click', (event) =>{
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})
function startGame () {
    setInterval(decreasetime, 1000)
    createRandomCircle()
    setTimeout()
}
function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current <10) {
        current ='0${current}'
        }
        setTime(current)
    }
}
function setTime(value){
    timeEl.innerHTML = '00:${value}'
}
function finishGame(){
    timeEl.parentNode.classlist.add('hide')
    board.innerHTML = '<h1>Score: <span class="primary">${scrore}</span></h1>'
}
function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width,height}= board.getBoundingClientRect()
    const x = getRandomNumber(0, width - seze)
    const y = getRandomNumber(0, height - seze)
    const randomColorIndex = getRandomNumber(0, colors.length)
    circle.classList.add('cirlce')
    circle.style.width = '${size}px'
    circle.style.height = '${size}px'
    circle.style.top = '${y}px'
    circle.style.left = '${x}px'
    circle.style.background = colors[randomColorIndex]
    board.append(circle)
}
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max- - min) + (min))
}