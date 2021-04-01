var backgroundimages;
var policeman,policemanImages;
var invisibleGround;
//var bank,bankImages;
var coin,coinimg ;
var score=0;
var coinsgroup;
function preload(){
 backgroundimages=loadImage("images/background.png"); 
 policemanImages=loadImage("images/human.png");
 //bankImages=loadImage ("images/bank.png") ;
 coinimg=loadImage("images/coin.png");
 
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    policeman=createSprite(1500,800,70,70);
    policeman.addImage(policemanImages);
    ////bank=createSprite(900,250,70,70);
   //// bank.addImage(bankImages);
   coinsgroup=new Group();
   
    
    invisibleGround=createSprite(displayWidth,displayHeight,3500,20);
    invisibleGround.visible=false;
}
function draw(){
    background(backgroundimages);
 spawncoin();
if(keyDown("space")){
    policeman.velocityY=-5;
}
if(keyDown("RIGHT_ARROW")){
    policeman.x=policeman.x+5;
}


policeman.velocityY=policeman.velocityY+0.5;
policeman.collide(invisibleGround);
if(policeman.isTouching(coinsgroup)){
score=score+1;
}

    drawSprites();
textSize(36);
fill("red");
    text("score"+score,800,190 );
    






}
 function spawncoin(){
     if(frameCount%150===0){

     
     coin=createSprite(displayWidth,displayHeight-80,70,70);
     coin.addImage(coinimg);
     coin.velocityX=-5;
     coinsgroup.add(coin);
 } 
 }