class Player {
  constructor(name, type, x, y, size = 30) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.arrows = type == "Police" ? [65, 68, 87, 83] : [37, 39, 38, 40];
    this.color = type == "Police" ? "red" : "black";
    this.x = x;
    this.y = y;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, (0 * Math.PI) / 180, 2 * Math.PI);
    ctx.fill();
  }
  move(ctx) {
    this.x = this.x + -speed;
    this.y = this.y + -speed;
  }
}

class Game {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    canvas.width = width;
    canvas.height = height;
    this.ctx = canvas.getContext("2d");
    this.players = this.createPlayers(2);
    document.addEventListener("keydown", this.keyPress.bind(this));
  }
  createPlayers(num) {
    let players = [];
    for (let i = 0; i < num; i++) {
      let type = i < num / 2 ? "Police" : "Thief";
      let name = type + " " + ((i % num) / 2 + 1);
      let x = Math.floor(Math.random() * this.width);
      let y =
        Math.floor((Math.random() * this.height) / 3) + (type == "Thief")
          ? (2 * this.height) / 3
          : 0;
      let player = new Player(name, type, x, y);
      players.push(player);
    }
    return players;
  }

  play() {
    this.ctx.clearRect(0, 0, this.width, this.height); // just clear the whole game area
    this.players.forEach(player => {
      player.draw(this.ctx);
    });
    requestAnimationFrame(this.play.bind(this));
  }

  keyPress(e) {
    console.log(e.keyCode);
    let keys = e.keyCode;

    // this.players.filter(pressed => {
    //   if (pressed.type == "Police" && pressed.arrows == 40) {
    //     console.log("press");
    //   }
    // });

    this.players.filter(x => {
      return console.log("yay");
    });

    // let red = this.players[0];
    // let black = this.players[1];
    // What is the key ,
    // I will adjust the x, y value of thief and police
    // [-x,+x,-y,+y]
    // if (keys == 40) {
    //   console.log(this.players[0].name, this.players[1].name);
    //   this.players.filter(x => );
    // }
    // this.players[0].y = this.players[0].x = -1;
    // switch (keys) {
    //   case 40:
    //     red.y += 3;
    //     break;
    //   case 38:
    //     red.y -= 3;
    //     break;
    //   case 39:
    //     red.x += 3;
    //     break;
    //   case 37:
    //     red.x -= 3;
    //     break;
    //   case 83:
    //     black.y += 3;
    //     break;
    //   case 87:
    //     black.y -= 3;
    //     break;
    //   case 68:
    //     black.x += 3;
    //     break;
    //   case 65:
    //     black.x -= 3;
    //     break;
    // }

    // this.players.filter(police);

    // function police(x )

    // this.players
    //   .filter(x => x == "Police")
    //   .map(v => console.log(this.players[0].y));
  }
}

function initGame() {
  // alert("Onload");
  let canvas = document.getElementById("game");
  //jquery
  // let canvas = $("#game")[0];
  let game = new Game(canvas, 400, 300);
  // console.log(game);
  game.play();
}
// document.onload = function(){
initGame();
// }
