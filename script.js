const start = document.querySelector(".start");
const startButton = document.querySelector(".startButton");
const selection = document.querySelector(".selection");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const game = document.querySelector(".game");
const gameBackground = document.querySelector(".game-background");
const ball = document.querySelector(".ball");
const readyButton = document.querySelector(".readyButton");
const ready = document.querySelector(".ready");
const timerCount = document.querySelector(".timer-count");
const redLine = document.querySelector(".redLine");
const final= document.querySelector(".final");
const background = document.querySelector(".background");
const endBallImage = document.querySelector(".endBallImage");
const encouarge= document.querySelector(".encouarge");
const playAgain = document.querySelector(".playAgain");
const homeButton = document.querySelector(".home");

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")

let startGame = false;
let time;
let touch;
let difficulty
let Lowhit
let Mediumhit
let fall
let leftRight
let hitforce
let direction
let ballWidth
let offSetY
let endLine

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        selection.classList.remove("hide")
        time = 30
    }, 200);
})
easy.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        difficulty = 1;
        getReady()
    }, 200);
})
normal.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        difficulty = 2;
        getReady()
    }, 200);

})
hard.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        difficulty = 3;
        getReady()
    }, 200);
})

readyButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        began()
    }, 200);
})

playAgain.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        final.classList.add("hide")
        start.classList.remove("hide")
    }, 200);
})

homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
      location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
})

function getReady(){
    selection.classList.add("hide")
    game.classList.remove("hide")
    timerCount.innerHTML = `${time} s`;
    ready.classList.remove("hide")
    spawnBall()
}

function began(){
    ready.classList.add("hide")
    startGame = true
    ballSize = 1
    beganFalling()
}

ball.addEventListener("click", () => {
    if(startGame == true && ballSize != 5){
        playClickSound()
        touch = true;
        hitforce = Math.random() > 0.5 ? 1 : 2
        direction = Math.random() > 0.5 ? 1 : 2
    }
})
function beganFalling(){
    if(startGame == true){
        direction = Math.random() > 0.5 ? 1 : 2
        window.requestAnimationFrame(fallingBall);
    }
}

function spawnBall(){
    let border = gameBackground.getBoundingClientRect();
    ball.y = 0;
    if(border.width > 768){
        offSetY = 200
        if(difficulty == 1){
            ballWidth = 400
            Lowhit = 4.5
            Mediumhit = 5
            fall = 4
            leftRight = 4
            endLine = border.height - 100
        }
        if(difficulty == 2){
            ballWidth = 325
            Lowhit = 5.5
            Mediumhit = 6
            fall = 5
            leftRight = 5
            endLine = border.height - 160
        }
        if(difficulty == 3){
            ballWidth = 300
            Lowhit = 6.5
            Mediumhit = 7
            fall = 6
            leftRight = 6
            endLine = border.height - 220
        }
    }
    if(border.width < 768){
        offSetY = 125
        if(difficulty == 1){
            ballWidth = 250
            Lowhit = 2.5
            Mediumhit = 3
            fall = 2
            leftRight = 2
            endLine = border.height - 50
        }
        if(difficulty == 2){
            ballWidth = 225
            Lowhit = 3.5
            Mediumhit = 4
            fall = 3
            leftRight = 3
            endLine = border.height - 80
        }
        if(difficulty == 3){
            ballWidth = 200
            Lowhit = 4.5
            Mediumhit = 5
            fall = 4
            leftRight = 4
            endLine = border.height - 110
        }
    }
    ball.style.width = ballWidth + "px";
    ball.style.height = ballWidth + "px";
    redLine.style.top = endLine + 'px';
    ball.x = (border.width / 2) - offSetY
    ball.style.top = ball.y + 'px';
    ball.style.left = ball.x + 'px';
}
function fallingBall(){
    if(startGame){
        moveBall()
        window.requestAnimationFrame(fallingBall);
    }
}
function moveBall(){
    console.log(fall, Lowhit, Mediumhit)
    let border = background.getBoundingClientRect();
    if(direction == 1){
        ball.x = ball.x - leftRight
        ball.style.left = ball.x + 'px';
        if(ball.x < 0){
            direction = 2
        }
    }
    if(direction == 2){
        ball.x = ball.x + leftRight
        ball.style.left = ball.x + 'px';
        if(ball.x > Math.floor(border.width - ballWidth)){
            direction = 1
        }
    }
    if(touch == true){
        if(hitforce == 1){
            ball.y = ball.y - Lowhit
            ball.style.top = ball.y + "px"
            if(ball.y < 0){
                touch = false
            }
            return
        }    
        if(hitforce == 2){
            ball.y = ball.y - Mediumhit
            ball.style.top = ball.y + "px"
            if(ball.y < 0){
                touch = false
            }
            return
        }      
    }
    if(ball.y > endLine){
        startGame = false
            game.classList.add("hide")
            final.classList.remove("hide")
            endBallImage.src = "./img/Paper Ball 5.png"
            encouarge.innerHTML = "So Close!"
    }
    ball.y = ball.y + fall
    ball.style.top = ball.y + "px"
}

function updateCountDown(){
    if(startGame == true){
        timerCount.innerHTML = `${time} s`;
        if(time == 0){
            startGame = false
            game.classList.add("hide")
            final.classList.remove("hide")
            endBallImage.src = "./img/Paper Ball 1.png"
            encouarge.innerHTML = "You did it!"
        }
        time--;
    }
}

setInterval(updateCountDown, 1000)

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });