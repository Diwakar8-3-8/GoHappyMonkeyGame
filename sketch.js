var monkey , monkey_running;
var banana ,bananaImage, bananaGroup;
var obs, obsImage;
var FoodGroup, obsGroup;
var ground;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obsImage = loadImage("obstacle.png");
  
  bananaGroup = new Group();
 
}



function setup() {
createCanvas(600,400);
  
monkey = createSprite(50,320,20,50);
monkey.addAnimation("Run", monkey_running);
monkey.scale = 0.15;
  
ground = createSprite(300,370,600,10);
ground.velocityX = -10;
}


function draw() {
    background("lightblue");
  
  if(keyDown("space")&& monkey.y >= 180) {
        monkey.velocityY = -11;
  }
    monkey.velocityY = monkey.velocityY + 1.0;
  
  
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  if (frameCount % 80 === 0){
banana = createSprite(500,180,30,30);
banana.velocityX = -10;
banana.addImage("Ban", bananaImage);
banana.scale = 0.10;
banana.y = Math.round(random(120,200));
banana.lifetime = 45;
bananaGroup.add(banana);
}
  
  if (frameCount % 80 === 0){
  obs = createSprite(500,315,20,20);
  obs.velocityX = -10;
  obs.collide(ground);
  obs.addImage("rock", obsImage);
  obs.scale = 0.3;
  }
  


  drawSprites();
 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
}