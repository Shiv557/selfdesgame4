var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg,bgImg;
var stone1,stone1Img;
var stone1Group;
var cloud;
var climber,climberImg;
var relic;

var stone2,stone2Img;
var stone2Group; 
var cloudImg,cloudGroup;
var relicImg,relicGroup;

var bird,birdImg;
var birdGroup; 
var score = 0;

function preload(){
    bgImg = loadImage("background.jpg");
    stone1Img = loadImage("stone1.png");
    stone2Img = loadImage("stone2.png");
    birdImg = loadImage("bird.png");
    cloudImg = loadImage("cloud.png");
    climberImg = loadImage("climber.png");
    relicImg = loadImage("relic.png");
}

function setup(){
    createCanvas(700,600);
    bg = createSprite(200,200);
    bg.addImage(bgImg);
    bg.velocityY = 0.5;
    bg.scale = 0.9;


    climber = createSprite(400,550);
    climber.addImage(climberImg);
    climber.scale = 0.4;

   
  
    //climber.debug = false;
    //climber.setCollider("circle", 50,1,10);
    stone1Group = new Group();
    stone2Group = new Group();
    birdGroup = new Group();
    cloudGroup = new Group();
    relicGroup = new Group();
  

score  = 0  ;
stroke("red");
fill("red");
textSize(20);
    
}





function draw(){
    background(0);

  


    if(gameState === PLAY){

        climber.x=World.mouseX;

        if (relicGroup.isTouching(climber)){
            score = score+100;
            relicGroup.destroyEach();
        }


        if (bg.y>400){
            bg.y = height/2
        }

        if(birdGroup.isTouching(climber)||
           stone1Group.isTouching(climber)||
           stone2Group.isTouching(climber))
           {
           gameState = END
           }
           
    }

    else if (gameState === END) {


       /* if(birdGroup.isTouching(climber)){
            birdGroup.setVelocityYEach(0);
            birdGroup.setVelocityXEach(0); 
            birdGroup.setVisibleEach(false);
            birdGroup.destroyEach();
            //bg.velocityY =0;
        
    }


    if( stone1Group.isTouching(climber)){
        stone1Group.setVelocityYEach(0);
        stone1Group.setVelocityXEach(0); 
        stone1Group.setVisibleEach(false);
        stone1Group.destroyEach();
        
    }
    
    if( stone2Group.isTouching(climber)){
        stone2Group.setVelocityYEach(0);
        stone2Group.setVelocityXEach(0); 
        stone2Group.setVisibleEach(false);
        stone2Group.destroyEach();
        
    
    }*/
    
bg.velocityY =0
        stone2Group.setVelocityYEach(0);
        stone2Group.setVelocityXEach(0); 
        stone2Group.setVisibleEach(false);

        stone1Group.setVelocityYEach(0);
        stone1Group.setVelocityXEach(0); 
        stone1Group.setVisibleEach(false);

        birdGroup.setVelocityYEach(0);
        birdGroup.setVelocityXEach(0); 
        birdGroup.setVisibleEach(false);

}




    createStone1();
    createStone2();
    createbird();
    createcloud();
    createrelic();
    drawSprites();

    text("Score:"+score,300,50);
}

function createStone1(){
if (World.frameCount % 100 == 0){
    var stone1 =createSprite(Math.round(random(50, 350),40, 10, 10));
    stone1.addImage(stone1Img);
    stone1.velocityY = 9;
    stone1.scale = 0.3;
    stone1Group.add(stone1);
}
}

function createStone2(){
    if (World.frameCount % 150 == 0) {
        var stone2 =createSprite(Math.round(random(50, 350),40, 10, 10));
        stone2.addImage(stone2Img);
        stone2.velocityY = 10;
        stone2.scale = 0.3;
        stone2Group.add(stone2);
    }
    }

function createcloud(){
    if(World.frameCount % 500 == 0){
        var cloud =createSprite(Math.round(random(50, 350),40, 10, 10));
        cloud.addImage(cloudImg);
        cloud.velocityY = 5;
        cloud.scale = 0.6;
        cloudGroup.add(cloud);
    }
}    
    

function createrelic(){
    if(World.frameCount % 425 == 0){
         relic =createSprite(Math.round(random(50, 350),40, 10, 10));
        relic.addImage(relicImg);
        relic.velocityY = 5;
        relic.scale = 0.2;
        relicGroup.add(relic);
        
    }
}    
    

function createbird(){
    if (World.frameCount % 600 == 0) {
        var bird =createSprite(Math.round(random(50, 350),40, 10, 10));
        bird.addImage(birdImg);
        bird.velocityY = 10;
        bird.scale = 0.3;
        birdGroup.add(bird);
    }



}