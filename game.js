const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

let player = {x:200, y:500};

document.addEventListener("keydown", e => {
  if(e.key==="ArrowLeft") player.x -= 10;
  if(e.key==="ArrowRight") player.x += 10;
  if(e.key==="ArrowUp") player.y -= 10;
  if(e.key==="ArrowDown") player.y += 10;
});

function draw(){
  ctx.clearRect(0,0,400,600);

  ctx.fillStyle="blue";
  ctx.fillRect(player.x, player.y, 20, 20);

  requestAnimationFrame(draw);
}
draw();
