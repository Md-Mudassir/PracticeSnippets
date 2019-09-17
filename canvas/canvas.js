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

function Circle(x, y) {
  this.x = x;
  this.y = y;

  this.draw = function() {
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };
}

let circle = new Circle(200, 200);

let x = 200;
let dx = 4;
let radius = 30;
let y = 100;
let dy = 4;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  circle.draw();
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
animate();
