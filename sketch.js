
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivaltime;
var background;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600,60)
  score=0;
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  banana=createSprite(300,200 ,20,20);
  banana.addImage("banana20",bananaImage);
  banana.scale=0.1
   
  obstacle=createSprite(300,330,20,20);
  obstacle.addImage("obstacles",obstacleImage);
  obstacle.scale=0.1;

   ground=createSprite(400,350,900,10);

  ground.x=ground.width/2;
  console.log(ground.x)
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("white");
  text ("Score:"+ score,500,50);
}


function draw() {
 background("green")


  
  
  
 
  drawSprites();
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time:"+ survivalTime,100,50);
}
  function spawnbanana(){
 if (frameCount % 60 === 0){
   var banana = createSprite(600,165,10,40);
   banana.velocityX = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1:banana.addImage(bananaImage);
             
      default: 
      banana.scale=0.6;
        banana.lifetime=300
         if(gameState === PLAY){

    gameOver.visible = false;
    restart.visible = false;
    
    ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(frameCount/60);
    
    if(score>0 && score%100 === 0){
       checkPointSound.play() 
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
        
    }

 }
  }

  }


