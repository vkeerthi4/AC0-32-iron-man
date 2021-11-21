var ironman;

var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanimg=loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=1;

  ironman=createSprite(50,500);
  ironman.addImage(ironmanimg)
  ironman.scale=0.4; 
}

function draw() {
  ironman.x= mouseX;
  ironman.y= mouseY; 
 
    
    drawSprites();
   
}

