let canvas = document.querySelector("canvas");

canvas.width = innerWidth - 40;
canvas.height = innerHeight - 20;

let c = canvas.getContext("2d");
c.fillStyle = "red";
c.fillRect(120, 120, 100, 100);
c.fillStyle = "green";
c.fillRect(190, 90, 200, 200);

c.beginPath();
c.moveTo(30, 100);
c.lineTo(200, 10);
c.lineTo(600, 80);
c.lineTo(400, 80);
c.stroke();
