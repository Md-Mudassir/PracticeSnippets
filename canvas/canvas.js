let canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

//rec
let c = canvas.getContext("2d");

// c.fillStyle = "red";
// c.fillRect(120, 120, 100, 100);
// c.fillStyle = "green";
// c.fillRect(190, 90, 200, 200);

//line
// for (let i = 0; i < 5; i++) {
//   let x = Math.random() * window.innerHeight;
//   let y = Math.random() * window.innerWidth;
//   c.beginPath();
//   c.moveTo(30, 100);
//   c.lineTo(x, y);

//   c.stroke();
// }

// arc;
// for (let i = 0; i <= 50; i++) {
//   let x = Math.random() * window.innerHeight;
//   let y = Math.random() * window.innerWidth;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }
let mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener("click", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
});

let colors = ["red", "blue", "green", "purple"];

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    c.fill();
  };

  this.update = function() {
    if (this.x + radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circleArr = [];
for (let i = 0; i < 50; i++) {
  let x = Math.random() * innerWidth;
  let dx = Math.random() - 0.5;
  let radius = 30;
  let y = Math.random() * innerHeight;
  let dy = Math.random() - 0.5;

  circleArr.push(new Circle(x, y, dx, dy, radius));
}
console.log(circleArr);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //   circle.update();

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}
animate();
