let canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

//rec
let c = canvas.getContext("2d");
c.fillStyle = "red";
c.fillRect(120, 120, 100, 100);
c.fillStyle = "green";
c.fillRect(190, 90, 200, 200);

//line
c.beginPath();
c.moveTo(30, 100);
c.lineTo(200, 10);
c.lineTo(600, 80);
c.lineTo(400, 80);
c.stroke();

//arc
for (let i = 0; i <= 4; i++) {
  let x = Math.random() * window.innerHeight;
  let y = Math.random() * window.innerWidth;
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();
}
