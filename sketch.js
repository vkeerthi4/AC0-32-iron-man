var ironman;
var bg, backgroundImg;
var stoneGroup,stoneImage;
var diamondGroup,diamondImage;
var diamondScore=0;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanimg=loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png");
  diamondImage = loadAnimation("images/diamond.png");

}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=1;

  ironman=createSprite(50,500);
  ironman.addImage(ironmanimg)
  ironman.scale=0.4; 
  ground = createSprite(200,585,400,10);

  ground.visible = false;
  stoneGroup = new Group();
  diamondGroup = new Group();

}

function draw() {
  ironman.x= mouseX;
  ironman.y= mouseY; 
  if(bg.x<100)
       bg.x=bg.width/4;
   
      if(ironman.x<200){
        ironman.x=200;
      }
    
      if(ironman.y<50){
        ironman.y=50;
      }
      ironman.velocityY =  ironman.velocityY + 0.5;
     
    
  generatestone();
      for(var i = 0 ; i< (stoneGroup).length ;i++){
        var temp = (stoneGroup).get(i) ;
        
        if (temp.isTouching( ironman)) {
          ironman.collide(temp);
          }
            
        }
     
     

generatediamond();
  
for(var i = 0 ; i< (diamondGroup).length ;i++){
  var temp = (diamondGroup).get(i) ;
  
  if (temp.isTouching(ironman)) {
  
    diamondScore++;
    temp.destroy();
    temp=null;
    }
}    
  

ironman.collide(ground);

drawSprites();
textSize(20);
fill("brown")
text("diamond Collected: "+ diamondScore, 500,50);

}
function generatestone() {
    console.log(frameCount);
  if (frameCount %70 ===0) {
        var stone = createSprite(1200,10,40,10);
        stone.x = random(50,450);
        stone.addImage(stoneImage);
        stone.scale = 0.5;
        stone.velocityY = 5;
        stone.lifetime =250;
        stoneGroup.add(stone);
    }
}
function generatediamond() {
if (frameCount % 50 === 0) {
    var diamond = createSprite(1200,120,40,10);
    diamond.addAnimation("diamond", diamondImage);
    diamond.x = Math.round(random(80,350));
    diamond.scale = 0.4;
    diamond.velocityY = 3;
    diamond.lifetime = 1200;
    diamondGroup.add(diamond);
  }
}