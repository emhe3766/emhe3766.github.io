// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// let NewNumsBalls = 20;
// let NewSpeedBalls = 5;

function Numball() {
    let NumsBalls = 20;
    NumsBalls = prompt("How many balls do you want?");
    loop();
    console.log(NumsBalls);
    if (NumsBalls <= 0){
        NumsBalls = prompt("Please pick a number greater than 0");
        loop();
    }
    return NumsBalls;
    // NewNumsBalls.append(NumsBalls)
    // return NewNumsBalls
}
function speed() {
    let SpeedBalls = 5;
    SpeedBalls = prompt("How fast do you want them to go");
    console.log(SpeedBalls);
    if (SpeedBalls <= 0){
        SpeedBalls = prompt("Please pick a number greater than 0");
    }
    NewSpeedBalls.append(SpeedBalls)
    return NewSpeedBalls
}

const ballButton = document.querySelector('.ball-button').addEventListener('click', Numball);
const speedButton = document.querySelector('.speed-button').addEventListener('click', speed);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball{
    constructor(x, y, xVel, yVel, color, size) {
        this.x = x;
        this.y = y;
        this.xVel = xVel;
        this.yVel = yVel;
        this.color = color;
        this.size = size;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }
    update(){
      if ((this.x + this.size) >= width) {
        this.xVel = -(this.xVel);
      }

      if ((this.x - this.size) <= 0) {
        this.xVel = -(this.xVel);
      }

      if ((this.y + this.size) >= height) {
        this.yVel = -(this.yVel);
      }

      if ((this.y - this.size) <= 0) {
        this.yVel = -(this.yVel);
      }

      this.x += this.xVel;
      this.y += this.yVel;
    }
    collisionDetect() {
      for (const ball of balls) {
        if (this !== ball) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);  // finds the distance between 2 circles

          const vCollisionNorm = {x: dx / distance, y: dy / distance};  // the normalized collision vector
          const vRelativeVelocity = {x: this.xVel - ball.xVel, y: this.yVel - ball.yVel};
          const speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

          if (distance <= this.size + ball.size) {  // looks for when the distance between 2 circles is smaller than the sum of 2 radius
            ball.color = this.color = randomRGB();
            this.xVel -= (speed * vCollisionNorm.x);
            this.yVel -= (speed * vCollisionNorm.y);
            ball.xVel += (speed * vCollisionNorm.x);
            ball.yVel += (speed * vCollisionNorm.y);
          }
        }
      }
    }
}

const balls = [];
// how many balls we want
while (balls.length < Numball) {
    const size = random(1,30);  // determining the smallest and largest ball we could have
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-5,speed),
        random(-5, speed),
        randomRGB(),
        size
    );

    balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

// const testBall = new Ball(100, 100, 2, 2, "red", 10);
// // const testBall1 = new Ball(20, 60, 2, 2, "blue", 40);
// // const testBall2 = new Ball(80, 20, 2, 2, "aquamarine", 60);
// testBall.draw();

// const i = 0;
// while (i<100){
//     testBall.update();
//     i += 1;
// }
// testBall1.draw();
// testBall2.draw();
