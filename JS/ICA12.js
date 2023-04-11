// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
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
    update() {
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
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.size + ball.size) {
            ball.color = this.color = randomRGB();
          }
        }
      }
    }
}

const balls = [];
// how many balls we want
while (balls.length < 25) {
    const size = random(1,30);  // determining the smallest and largest ball we could have
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-5,5),
        random(-5,5),
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
