class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    plan1 = createSprite(600,200);
    plan1.addImage("plan2",rocket1_img);
    plan1.scale = 0.5;
    plan2 = createSprite(1400,200);
    plan2.addImage("plan1",rocket2_img);
    plan2.scale = 0.5;
    plan3 = createSprite(2200,200);
    plan3.addImage("plan2",rocket3_img);
    plan3.scale = 0.5;
    plan4 = createSprite(3000,200);
    plan4.addImage("plan2",rocket4_img);
    plan4.scale = 0.5;
    plans = [plan1, plan2, plan3, plan4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(backgroundImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        plans[index-1].x = x;
        plans[index-1].y = y;

        if (index === player.index){
          plans[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = plans[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
