
function check() {
    console.log('test');
}

function submit() {
    alert('Your volume is now: ' + output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }

}
function plus() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function Random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const Num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Num;
  }

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', Random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


//// for the moving + & - on the screen
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
    constructor(x, y, xVel, yVel, color, size, pm) {
        this.x = x;
        this.y = y;
        this.xVel = xVel;
        this.yVel = yVel;
        this.color = color;
        this.size = size;
        this.pm = pm;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI, this.pm);
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

// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

const balls = [];
// how many balls we want
while (balls.length < 25) {
    const size = random(10,30);  // determining the smallest and largest ball we could have
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
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);

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

function getXY(canvas, event){ //adjust mouse click to canvas coordinates
  const rect = canvas.getBoundingClientRect()
  const y = event.clientY - rect.top
  const x = event.clientX - rect.left
  return {x:x, y:y}
}

document.addEventListener("click",  function (plus) {
  const XY = getXY(canvas, plus)
  //use the shape data to determine if there is a collision
  if(ctx.isPointInPath(path, XY.x, XY.y)) {
    // Do Something with the click
    plus()
  }
}, false)

loop();

