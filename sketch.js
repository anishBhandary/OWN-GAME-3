
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var thief,police,police1,diamond,thiefImg,policeImg,diamondImg,wallImg,wall;
var edges;
function preload(){
	

  thiefImg=loadImage("images/thief.png");
  policeImg=loadImage("images/security.png");
  diamondImg=loadImage("images/diamond.png");
  wallImg=loadImage("images/oops.png");
  
}

function setup() {
	createCanvas(800, 650);
    engine = Engine.create();
	world = engine.world;

	
	
	police = createSprite(200,245,20,20);
	police.addImage("police",policeImg);
  police.scale=0.6;
  police.velocityX=2;

	police1 = createSprite(600,540,20,20);
	police1.addImage("police",policeImg);
  police1.scale=0.6;
  police1.velocityX=-2;


  
  thief=createSprite(150,550,20,20);
	thief.addImage(thiefImg);
  thief.scale=0.2
  
  diamond = createSprite(750,50,20,20);
	diamond.addImage(diamondImg);
  diamond.scale= 0.1;
  
  wall = createSprite(400,325,20,20);
  wall.addImage(wallImg);
  wall.visible=false;
	
  edges=createEdgeSprites();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

  if (keyDown(UP_ARROW)){
    thief.y=thief.y-3;
  }
   if (keyDown(DOWN_ARROW)){
    thief.y=thief.y+3;
  }
   if (keyDown(LEFT_ARROW)){
     thief.x=thief.x-5;
   }
   if (keyDown(RIGHT_ARROW))
      thief.x=thief.x+5; 
      
   if(thief.isTouching(diamond)){
     diamond.visible=false;
     police.velocityX=-4;
     police1.velocityX=4;
     
   }

   if(thief.isTouching(police)||thief.isTouching(police1)){
     wall.visible=true;
     police.velocityX=0;
     police1.velocityX=0;
     thief.velocityX=0;
     thief.velocityY=0;
   }

      thief.bounceOff(edges);
      police.bounceOff(edges);
      police1.bounceOff(edges);
  
      
  drawSprites();
 
}



