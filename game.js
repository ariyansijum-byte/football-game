const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

// Player
let player = {x: 180, y: 500, size: 20};

// Ball
let ball = {x: 200, y: 300, size: 10};

// Controls
document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowLeft") player.x -= 10;
  if(e.key === "ArrowRight") player.x += 10;
  if(e.key === "ArrowUp") player.y -= 10;
  if(e.key === "ArrowDown") player.y += 10;
});

// Draw game
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Field border
  ctx.strokeStyle = "white";
  ctx.strokeRect(50, 50, 300, 500);

  // Center circle
  ctx.beginPath();
  ctx.arc(200, 300, 50, 0, Math.PI * 2);
  ctx.stroke();

  // Player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);

  // Ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  requestAnimationFrame(draw);
}

draw();
