var boy, boyImg
var beach1,beach2, beachImg;
var invisibleGround;

function preload(){
boyImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png","run9.png","run10.png","run11.png","run12.png",)
beachImg = loadImage("background_beach.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  beach1=createSprite(width/2, height/2, width,height)
  beach1.addImage(beachImg);
  beach1.velocityX = -4
  beach1.scale=0.5

  beach2=createSprite(width+width/2, height/2, width,height)
  beach2.addImage(beachImg);
  beach2.velocityX = -4
  beach2.scale=0.5
  boyImg.frameDelay=3



  boy = createSprite(50,height-120,20,50);
  boy.addAnimation("running",boyImg)
  boy.scale=0.3



  invisibleGround=createSprite(width/2,height-35,width,20 )
  invisibleGround.visible=false;
}



function draw() {
  background("white")

   /*if(beach.x < width/4+200){
     beach.x = width/2
     console.log (width/4)
 }
  */

 if(beach1.x<-width/2){
  beach1.x=width/2
 }
 if(beach2.x<width/2){
  beach2.x=width+width/2
 }
 if (touches.length>0||(keyDown("space")&& boy.y>height-400)){
  boy.velocityY = -10;
  touches = []
  console.log(boy.y)
}
boy.velocityY+=0.8;



boy.collide(invisibleGround )
  drawSprites();
}