
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

var bananaGroup, bananaImage;
var obstacleGroup, obstacleImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 400);
  
monkey = createSprite(50, 350, 40, 20);
monkey.addAnimation("sprite_0.png", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(300, 395, 10000, 10);
ground.velocityX = -3;

  
}


function draw() {
background("red");
  
if(ground.x<0){
ground.x = ground.width/10;
}
  
if(keyDown("space")&&monkey.y >= 100){
monkey.velocityY = -12;

}
  
monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(ground);

  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100, 50);

  
food();
obstacle();
  

  
drawSprites();
  
}

function food(){
 if(frameCount%80===0){
 banana = createSprite(Math.round(random(100, 550)), Math.round(random(120, 200)), 20, 20); 
 banana.addImage("banana", bananaImage);
 banana.scale = 0.05;
 banana.velocityX = -3;
 banana.lifetime = 700;
   

   
   
 }
  
  
  
}

function obstacle(){
 if(frameCount%300===0){
 obstacles = createSprite(Math.round(random(100, 550)), 385, 20, 20); 
 obstacles.addImage("obstacle", obstacleImage);
 obstacles.scale = 0.1;
 obstacles.velocityX = -3;
 obstacles.lifetime = 700;
 
   

   
   
 }  
  
  
  
  
}



