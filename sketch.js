var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var plans, plan1, plan2, plan3, plan4;

var rocket1_img, rocket2_img, rocket3_img, rocket4_img;

function preload(){
  backgroundImage = loadImage("../images/background.jpg");
  rocket1_img = loadImage("../images/plan1.png");
  rocket2_img = loadImage("../images/plan2.png");
  rocket3_img = loadImage("../images/plan2.png");
  rocket4_img = loadImage("../images/plan2.png");
  /*track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");*/
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  //obstracleGroup = new Group();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  /*if(gameState===Play){
    obstracle();

    if(obstracleGroup.isTounchimg(plans)){
      gameState = End;
    }
  }

  if(gameState===End){
    strock(4);
    fill("red");
    textSize(20);
    text("Game Over",displayWidth/2, displayHeight/2);

    obstracleGroup.destroyEach();
  }

  drawSprites();*/
}

/*function obstracleGroup(){
  if(frameCount%125 === 0){
    obstracle = createSprite(displayWidth*6, displayHeight*3,20,20);
    obstracle.x = Math.round(random(displayWidth*2, displayHeight*4));

    obstracleGroup.add(obstracle);
  }
}*/

