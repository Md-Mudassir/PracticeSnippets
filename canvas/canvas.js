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
let x = 200;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerHeight, innerWidth);
  c.beginPath();
  c.arc(x, 300, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
  x++;
}
animate();
