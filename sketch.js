let player, floor;
let lives = 3;
let coins = 0;
let level = 0
let img1, img2;
let bool1, bool2, bool3, bool4;
let bool;
let cloud;

function preload(){
  img1 = loadImage('images/bee.png')
  img2 = loadImage('images/cloud.png')
  startImg = loadImage('images/startScreen.jpg')
  loseImg = loadImage('images/loseScreen.jpg')
  winImg = loadImage ('images/winScreen.jpg')
  nextImg = loadImage('images/nextLevel.jpg')
}


function setup() {
	new Canvas(3000, 400);
	world.gravity.y = 10;
  textSize(20); 
  bool1 = false
  bool2 = false
  bool3 = false
  bool4 = false
  bool = false// world basics

	player = new Sprite();
	player.x = 50
	player.y = 200;
  player.img = img1
  player.scale = 0.05 //player settings
  player.collider = 'kinematic'
  

  clouds = new Group();
  clouds.img = img2;
  clouds.scale = 0.1
  clouds.collider = 'kinematic' //clouds settings

  g1 = color(232, 86, 94);
  g2 = color(232, 170, 69);// colors for gradient

  button = createButton ("start");
  button.position (200,200);
  button.mousePressed(start)




}



function start(){
  button.hide()
  level = 1
}

function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) { // as y increases inter increases, creating a smooth gradient
    var inter = map(y, 0, 300, 0, 1); // from y=0 to y=300, color will change completely from g1 to g2
    var s1 = lerpColor(g1, g2, inter); // lerp color makes color change from 1 to 2, inter makes smooth gradient
    stroke(s1); // each line is a different color to make gradient ^^
    line(0, y, width, y); // makes the color appear
  }
} // gradient for level 2 (taken from midterm)


function startScreen(){
  new Canvas (1000,600);
  clearSprites();
  background(startImg);
}

function level1(){
  clouds.remove();
  while (clouds.length < 5) {
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 400 + 500;
    cloud.y = 200
    cloud.w = 125;
    cloud.h = 50
  }
}//cloud pattern for level1

function level2(){
  clouds.remove();
  while (clouds.length < 5) {
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 800 + 500;
    cloud.y = 100
    cloud.w = 125;
    cloud.h = 50
  }
}






function draw() {

  //level2();
  if (level === 0){
    if (!bool){
      startScreen();
      bool = true
      // clearSprites();
    }
  }
 

  if (level === 1){
    if (!bool1){
      text ("LIVES: " + lives, player.x, 50);
  text ("LEVEL" + level, player.x + 500, 50);
      player.x = 50
      bool1 = true
    }
    level1();
    if (lives > 0){
	    translate (-player.x + 50, 0)
	    clear();
      background(115,239,245)
    if (player.x > 2800) {
      level = 2
      }
    }
  }

  if (level === 2){
    if (!bool2){
      
      player.x = 50
      bool2 = true
  
    }
    level2();
    if (lives > 0){
    translate (-player.x + 50, 0)
    clear();
    setGradient(g1,g2);
    if (player.x > 2800) {
      level = 3
      }
    }
  }

  if (level === 3){
    if (!bool3){
      level2();
      player.x = 50
      bool3 = true
      
    }
    if (lives > 0){
    translate (-player.x + 50, 0)
    clear();
    background(0,0,100)
    if (player.x > 2800) {
    level = 4
      }
    }
  }

  if (level === 4){
    if (!bool4){
      background (255);
    clearSprites();
      bool4 = true
    }
    
  }


  if (player.collides(clouds)){
    player.x = 50
    lives --
    // coins = 0
  }

  if (player.y > height){
  player.x = 50
  player.y = 200
  lives --
  }
  if (player.y < 0){
    player.x = 50
    player.y = 200
    lives --
  }

  // if (coins = 10){
  //   lives++
  //   coins = 0
  // }

  if (lives === 0){
    clearSprites();
  }


  fill(255)
  stroke(0)
  strokeWeight(2)
  text ("LIVES: " + lives, player.x, 50);
  text ("LEVEL" + level, player.x + 500, 50);
// text ("COINS: " + coins, player.x, 75);

}




function keyPressed(){
if (key === ' '){
    player.vel.x = 4
    player.vel.y = -5
    player.collider = 'dynamic'
  }
}



function clearSprites(){
  clouds.remove();
  player.remove();
  // text.remove();
}