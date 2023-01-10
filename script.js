const startButton = document.querySelector(".start");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const startPlaying = document.querySelector(".startGame");
const playAgain = document.querySelector(".again");
const homeButton = document.querySelector(".home");

const start = document.querySelector(".startPage");
const selection = document.querySelector(".selectionPage");
const game = document.querySelector(".gamePage");
const instruction = document.querySelector(".instructionPage");
const final= document.querySelector(".finalPage");

const ball = document.querySelector(".ballImage");
const timerCount = document.querySelector(".timer-count");
const redLine = document.querySelector(".redLine");
const background = document.querySelector(".background");
const result = document.querySelector(".result");

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
let once

//CHANGE HERE FOR THE BALL WIDTH AND FALLING SPEED
let defaultBallWidth = 250
let defaultLowhit = 4.5
let defaultMediumhit = 5
let defaultFall = 4
let defaultLeftRight = 4

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        selection.classList.remove("hide")
        time = 30
        once = false
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

startPlaying.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        instruction.classList.add("hide")
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
    instruction.classList.remove("hide")
    timerCount.innerHTML = `${time}s`;
    spawnBall()
}

function began(){
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
        checkEnd()
    }
})

function checkEnd(){
    if(time < 10){
        let delay = setTimeout(() => {
            if(!once){
                completed.currentTime = 0
                completed.play()
                once = true
            }
        },(time + 1) * 1000)
    }
}
function beganFalling(){
    if(startGame == true){
        direction = Math.random() > 0.5 ? 1 : 2
        window.requestAnimationFrame(fallingBall);
    }
}

function spawnBall(){
    let border = background.getBoundingClientRect();
    ball.y = 0;

    //check screen size
    //CHANGE FOR PHONE & COMPUTER 
    if(border.width < 500){
        //CHANGE HERE FOR THE LOSE CONDITION FOR LINE
        endLine = border.height - 300;
        //CHANGE HERE FOR THE BALL WIDTH AND SPEED FOR DIFFERENT LEVEL
        if(difficulty == 1){
            ballWidth = defaultBallWidth
            Lowhit = defaultLowhit
            Mediumhit = defaultMediumhit
            fall = defaultFall
            leftRight = defaultLeftRight
        }
        if(difficulty == 2){
            ballWidth = defaultBallWidth - 50
            Lowhit = defaultLowhit + 1
            Mediumhit = defaultMediumhit + 1
            fall = defaultFall + 1
            leftRight = defaultLeftRight + 1
        }
        if(difficulty == 3){
            ballWidth = defaultBallWidth - 100
            Lowhit = defaultLowhit + 2
            Mediumhit = defaultMediumhit + 2
            fall = defaultFall + 2
            leftRight = defaultLeftRight + 2
        }
        offSetY = ballWidth
    }
    //CHANGE FOR IPAD
    if(border.width > 500){
        //CHANGE HERE FOR THE LOSE CONDITION FOR LINE
        endLine = border.height - 500;
        //CHANGE HERE FOR THE BALL WIDTH AND SPEED FOR DIFFERENT LEVEL
        if(difficulty == 1){
            ballWidth = defaultBallWidth + 100
            Lowhit = defaultLowhit + 2
            Mediumhit = defaultMediumhit + 2
            fall = defaultFall + 2
            leftRight = defaultLeftRight + 2
        }
        if(difficulty == 2){
            ballWidth = defaultBallWidth + 75
            Lowhit = defaultLowhit + 3
            Mediumhit = defaultMediumhit + 3
            fall = defaultFall + 3
            leftRight = defaultLeftRight + 3
        }
        if(difficulty == 3){
            ballWidth = defaultBallWidth + 55
            Lowhit = defaultLowhit + 4
            Mediumhit = defaultMediumhit + 4
            fall = defaultFall + 4
            leftRight = defaultLeftRight + 4
        }
        offSetY = ballWidth
    }
    
    ball.style.width = ballWidth + "px";
    ball.style.height = ballWidth + "px";
    console.log(endLine)
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
    console.log(endLine + ballWidth)
    if(ball.y > (endLine + ballWidth)){
        lose.currentTime = 0
        lose.play()
        startGame = false
            game.classList.add("hide")
            final.classList.remove("hide")
            result.src = "./img/lose.png"
    }
    ball.y = ball.y + fall
    ball.style.top = ball.y + "px"
}

function updateCountDown(){
    if(startGame == true){
        timerCount.innerHTML = `${time}s`;
        if(time == 0){
            completed.currentTime = 0
            completed.play()
            startGame = false
            game.classList.add("hide")
            final.classList.remove("hide")
            result.src = "./img/win.png"
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