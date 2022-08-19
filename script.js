const start = document.querySelector(".start");
const startButton = document.querySelector(".startButton");
const selection = document.querySelector(".selection");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const game = document.querySelector(".game");
const ball = document.querySelector(".ball");
const timerCount = document.querySelector(".timer-count");
const final= document.querySelector(".final");
const background = document.querySelector(".background");
let startGame = false;
let time;
let touch;
let currentHit;
Lowhit = {step: 1}
Mediumhit = {step: 2}
fall = {step: 0.5}
leftRight = {step: 0.5}
let hitforce
let direction
let totalHit = 5;
let ballSize = 1;
startButton.addEventListener("click", () => {
    start.classList.add("hide")
    selection.classList.remove("hide")
})
easy.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    time = 30
    startGame = true
    ballSize = 1
    currentHit = 0;
    began()
    timerCount.innerHTML = `${time} s`;
    spawnBall()
})
normal.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    time = 50
    startGame = true
    ballSize = 1
    currentHit = 0;
    began()
    timerCount.innerHTML = `${time} s`;
    spawnBall()
})
hard.addEventListener("click", () => {
    selection.classList.add("hide")
    game.classList.remove("hide")
    time = 100
    startGame = true
    ballSize = 1
    currentHit = 0;
    began()
    timerCount.innerHTML = `${time} s`;
    spawnBall()
})
ball.addEventListener("click", () => {
    if(startGame == true && ballSize != 5){
        currentHit = currentHit + 1
        let changeBallSize = document.querySelector(".size");
        if(ballSize == 1){
            if(currentHit == 1){
                changeBallSize.style.width = "48vh"; 
            }
            if(currentHit == 2){
                changeBallSize.style.width = "46vh"; 
            }
            if(currentHit == 3){
                changeBallSize.style.width = "44vh"; 
            }
            if(currentHit == 4){
                changeBallSize.style.width = "42vh"; 
            }
            if(currentHit == 5){
                changeBallSize.style.width = "40vh"; 
            }
        }
        if(ballSize == 2){
            if(currentHit == 1){
                changeBallSize.style.width = "38vh"; 
            }
            if(currentHit == 2){
                changeBallSize.style.width = "36vh"; 
            }
            if(currentHit == 3){
                changeBallSize.style.width = "34vh"; 
            }
            if(currentHit == 4){
                changeBallSize.style.width = "32vh"; 
            }
            if(currentHit == 5){
                changeBallSize.style.width = "30vh"; 
            }
        }
        if(ballSize == 3){
            if(currentHit == 1){
                changeBallSize.style.width = "28vh"; 
            }
            if(currentHit == 2){
                changeBallSize.style.width = "26vh"; 
            }
            if(currentHit == 3){
                changeBallSize.style.width = "24vh"; 
            }
            if(currentHit == 4){
                changeBallSize.style.width = "22vh"; 
            }
            if(currentHit == 5){
                changeBallSize.style.width = "20vh"; 
            }
        }
        if(ballSize == 4){
            if(currentHit == 1){
                changeBallSize.style.width = "18vh"; 
            }
            if(currentHit == 2){
                changeBallSize.style.width = "16vh"; 
            }
            if(currentHit == 3){
                changeBallSize.style.width = "14vh"; 
            }
            if(currentHit == 4){
                changeBallSize.style.width = "12vh"; 
            }
            if(currentHit == 5){
                changeBallSize.style.width = "10vh"; 
            }
        }
        console.log("c " + currentHit)
        if(currentHit == totalHit){
            ballSize = ballSize + 1
            if(ballSize == 2){
                console.log("2")
                ball.innerHTML = `
                <img class="size" src="./img/Paper Ball 2.png">`
                currentHit = 0
                ball.style.width = "40vh"; 
                changeBallSize = document.querySelector(".size");
                changeBallSize.style.width = "40vh";  
            }
            if(ballSize == 3){
                console.log("3")
                ball.innerHTML = `
                <img class="size" src="./img/Paper Ball 3.png">`
                currentHit = 0
                ball.style.width = "30vh"; 
                changeBallSize = document.querySelector(".size");
                changeBallSize.style.width = "30vh";  
            }
            if(ballSize == 4){
                console.log("4")
                ball.innerHTML = `
                <img class="size" src="./img/Paper Ball 4.png">`
                currentHit = 0
                ball.style.width = "20vh";
                changeBallSize = document.querySelector(".size");
                changeBallSize.style.width = "20vh";  
            }
            if(ballSize == 5){
                console.log("5")
                ball.innerHTML = `
                <img class="size" src="./img/Paper Ball 5.png">`
                currentHit = 0
                ball.style.width = "10vh";
                changeBallSize = document.querySelector(".size"); 
                changeBallSize.style.width = "10vh"; 
            }
        }
        touch = true;
        hitforce = Math.random() > 0.5 ? 1 : 2
        direction = Math.random() > 0.5 ? 1 : 2
        console.log(touch)
    }
    console.log("hit")
})
function began(){
    if(startGame == true){
        direction = Math.random() > 0.5 ? 1 : 2
        window.requestAnimationFrame(fallingBall);
    }
}

function spawnBall(){
    ball.y = 0;
    ball.x = 25
    ball.style.top = ball.y + 'vh';
    ball.style.left = ball.x + 'vmin';
}
function fallingBall(){
    if(startGame){
        moveBall()
        window.requestAnimationFrame(fallingBall);
    }
}
function moveBall(){
    let border = background.getBoundingClientRect();
    if(direction == 1){
        ball.x = ball.x - leftRight.step
        ball.style.left = ball.x + 'vmin';
        if(ball.x < 0){
            direction == 2
        }
        /*if(ballSize == 1){
            if(currentHit == 0 && ball.x < 12){
                direction = 2;
            }
            if(currentHit == 1 && ball.x < 10){
                direction = 2;
            }
            if(currentHit == 2 && ball.x < 8){
                direction = 2;
            }
            if(currentHit == 3 && ball.x < 5){
                direction = 2;
            }
            if(currentHit == 4 && ball.x < 2){
                direction = 2;
            }
        }
        if(ballSize == 2){
            if(currentHit == 0 && ball.x < -20){
                direction = 2;
            }
            if(currentHit == 1 && ball.x < -20){
                direction = 2;
            }
            if(currentHit == 2 && ball.x < -20){
                direction = 2;
            }
            if(currentHit == 3 && ball.x < -20){
                direction = 2;
            }
            if(currentHit == 4 && ball.x < -20){
                direction = 2;
            }
        }*/
    }
    if(direction == 2){
        ball.x = ball.x + leftRight.step
        ball.style.left = ball.x + 'vmin';
        if(ball.x > (border.width - 50)){
            direction == 1
        }
        /*if(ballSize == 1){
            if(currentHit == 0 && ball.x > 37){
                direction = 1;
            }
            if(currentHit == 1 && ball.x > 40){
                direction = 1;
            }
            if(currentHit == 2 && ball.x > 42){
                direction = 1;
            }
            if(currentHit == 3 && ball.x > 45){
                direction = 1;
            }
            if(currentHit == 4 && ball.x > 47){
                direction = 1;
            }
        }
        if(ballSize == 2){
            if(currentHit == 0 && ball.x > 30){
                direction = 1;
            }
            if(currentHit == 1 && ball.x > 30){
                direction = 1;
            }
            if(currentHit == 2 && ball.x > 30){
                direction = 1;
            }
            if(currentHit == 3 && ball.x > 30){
                direction = 1;
            }
            if(currentHit == 4 && ball.x > 30){
                direction = 1;
            }
        }*/
    }
    if(touch == true){
        console.log("h")
        if(hitforce == 1){
            console.log("1")
            ball.y = ball.y - Lowhit.step
            ball.style.top = ball.y + "vh"
            if(ball.y < 0){
                touch = false
            }
        }    
        if(hitforce == 2){
            console.log("2")
            ball.y = ball.y - Mediumhit.step
            ball.style.top = ball.y + "vh"
            if(ball.y < 0){
                touch = false
            }
        }      
    }
    if(ball.y > 100){
        console.log("lose")
        startGame = false
            game.classList.add("hide")
            final.classList.remove("hide")
            let ballImage
            if(ballSize == 1){
                ballImage = "./img/Paper Ball 1.png"
            }
            if(ballSize == 2){
                ballImage = "./img/Paper Ball 2.png"
            }
            if(ballSize == 3){
                ballImage = "./img/Paper Ball 3.png" 
            }
            if(ballSize == 4){
                ballImage = "./img/Paper Ball 4.png"
            }
            if(ballSize == 5){
                ballImage = "./img/Paper Ball 5.png"
            }
            final.innerHTML = `
            <img class="title" src="./img/title.png">
            <img class="ballImage" src="${ballImage}">
            <img class="text" src="./img/So Close.png">
            <button class="playAagin">
                <img class="btn" src="./img/tryAgain.png">
            </button>`
            let playAagin= document.querySelector(".playAagin");
            playAagin.addEventListener("click", () => {
                final.classList.add("hide")
                selection.classList.remove("hide")
            })
    }
    ball.y = ball.y + fall.step
    ball.style.top = ball.y + "vh"
}

function updateCountDown(){
    if(startGame == true){
        timerCount.innerHTML = `${time} s`;
        if(time == 0){
            startGame = false
            game.classList.add("hide")
            final.classList.remove("hide")
            let ballImage
            if(ballSize == 1){
                ballImage = "./img/Paper Ball 1.png"
            }
            if(ballSize == 2){
                ballImage = "./img/Paper Ball 2.png"
            }
            if(ballSize == 3){
                ballImage = "./img/Paper Ball 3.png" 
            }
            if(ballSize == 4){
                ballImage = "./img/Paper Ball 4.png"
            }
            if(ballSize == 5){
                ballImage = "./img/Paper Ball 5.png"
            }
            final.innerHTML = `
            <img class="title" src="./img/title.png">
            <img class="ballImage" src="${ballImage}">
            <img class="text" src="./img/You did it.png">
            <button class="playAagin">
                <img class="btn" src="./img/tryAgain.png">
            </button>`
            let playAagin= document.querySelector(".playAagin");
            playAagin.addEventListener("click", () => {
                final.classList.add("hide")
                selection.classList.remove("hide")
            })
        }
        time--;
    }
}

setInterval(updateCountDown, 1000)