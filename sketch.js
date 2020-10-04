var player,computer;
var player_img,computer_img;
var explosion;
var score = 0
var coins,coinsIMG;
var play = 1;
var end = 0;
var gameState = play;
function preload()
{
  player_img = loadImage("fighterplane.png");
  computer_img = loadImage("computerplane.png");
  explosion = loadImage("explosion.jpg");
  coinsIMG = loadAnimation("coin.png","coin1.png","coin2.png","coin3.png","coin4.png");
}
function setup(){
  canvas = createCanvas(500,1000);
  player = createSprite(100,950);
  computer = createSprite(400,950);
  coins = createSprite(random(0,500),random(0,900))
}
function draw(){
  background("white");
  if (gameState === play){
  coins.addAnimation("coins",coinsIMG);
  player.addImage(player_img);
  computer.addImage(computer_img);
  computer.velocityY = -2;
  player.velocityY = -2.5;
  if (keyDown (LEFT_ARROW))
  {
    player.velocityX = -5;
  }
  if(keyWentUp (LEFT_ARROW))
  {
    player.velocityX = 0;
  }
  if (keyDown (RIGHT_ARROW))
  {
    player.velocityX = 5;
  }
  if (keyWentUp (RIGHT_ARROW))
  {
    player.velocityX = 0;
  }
  if (player.isTouching(computer))
  {
    gameState = end
    }
  }
  if(gameState === end){
    player.addImage(explosion);
    player.scale = 0.1
    player.velocityX = 0;
    player.velocityY = 0;
    computer.velocityY = 0;
  }
  drawSprites();
}