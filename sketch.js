var boy;
var path;
var pathImg;
var boyImg;
var invisible_edge1;
var invisible_edge2;

function preload(){
  //pre-load images
pathImg=loadImage("path.png");
boyImg=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=6;
path.scale=1.2;

boy=createSprite(200,250,30,30);
boy.addAnimation("boy_running",boyImg);
boy.scale=0.1;
boy.velocityx=2;
boy.velocityx=-2;

invisible_edge1=createSprite(360,200,10,400);
invisible_edge1.visible=false;
invisible_edge2=createSprite(50,200,10,400);
invisible_edge2.visible=false;
}

function draw() {
  background(0);

if(path.y>400){
  path.y=height/2;
}

boy.collide(invisible_edge1);
boy.collide(invisible_edge2);

boy.x=World.mouseX;

drawSprites();
}
