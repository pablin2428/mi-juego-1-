var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  playerImg = loadImage("assets/bfc4.png")
  //shooter_shooting = loadImage("assets/")
  player2Img = loadImage("assets/pico.png.png")
  ballImg = loadImage("assets/balon.png")
  bgImg = loadImage("assets/esenario.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-150, displayHeight-300, 50, 50);
 player.addImage(playerImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
  
   player2 = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player2.addImage(player2Img)
     player2.scale = 0.01
     player2.debug = true

     ball = createSprite(displayWidth-575, displayHeight-300, 50, 50);
     ball.addImage(ballImg)
       ball.scale = 0.03
       ball.debug = true

}

function draw() {
  background(0); 
  ball.velocityX = 2
  ball.velocityY = 3
  



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
