const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg;
var character,characterImg;
var maxSnow=15;
var ran;
var snowArray=[];

function preload(){ 
  backgroundImg=loadImage("snow2.jpg");
  //characterImg=loadImage("")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  
  if(frameCount%4===0){
    snowArray.push(new Snowflake(random(0,700)),30,30);

  }
  for(var i=0;snowArray.length;i++){
    snowArray[i].display;
  }
  drawSprites();

}