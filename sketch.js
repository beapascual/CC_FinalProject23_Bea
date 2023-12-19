let player, floor;
let lives = 3;
let coins = 0;
let level = 0
let img1, img2;
let bool1, bool2, bool3, bool4;
let bool;
let cloud;
let startBool;
let loseBool;
let nextBool;
let hitBool;
let lvl1, lvl, lvl3;


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
  startBool = false
  loseBool = false
  nextBool = false
  hitBool = false
  lvl1 = false
  lvl2 = false
  lvl3 = false


	player = new Sprite();
	player.x = 50
	player.y = 200;
  player.img = img1
  player.scale = 0.05 //player settings
  player.collider = 'kinematic'

  finishLine = new Sprite(2800,300,50,600)
  finishLine.collider = 'kinematic'
  
  

  clouds = new Group();
  clouds.img = img2;
  clouds.scale = 0.1
  clouds.collider = 'kinematic' //clouds settings

  g1 = color(232, 86, 94);
  g2 = color(232, 170, 69);// colors for gradient

  startButton = createButton ("start");
  startButton.position (750,400);
  startButton.style('font-size','70px')
  startButton.style('background-color','255')
  startButton.mousePressed(start)
  startButton.hide()

  restartButton = createButton ("restart");
  restartButton.position (650,350);
  restartButton.style('font-size','70px')
  restartButton.style('background-color','255')
  restartButton.mousePressed(restart)
  restartButton.hide()

  nextButton = createButton ("continue");
  nextButton.position (650,350);
  nextButton.style('font-size','70px')
  nextButton.style('background-color','255')
  nextButton.mousePressed(next)
  nextButton.hide()

}



function start(){
  startButton.hide()
  level = 1
}

function restart(){
  restartButton.hide()
  level = 0
  lives = 3
  setup();
}

function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) { // as y increases inter increases, creating a smooth gradient
    var inter = map(y, 0, 300, 0, 1); // from y=0 to y=300, color will change completely from g1 to g2
    var s1 = lerpColor(g1, g2, inter); // lerp color makes color change from 1 to 2, inter makes smooth gradient
    stroke(s1); // each line is a different color to make gradient ^^
    line(0, y, 5000, y); // makes the color appear
  }
} // gradient for level 2 (taken from midterm)


function startScreen(){
  new Canvas (1000,600);
  clearSprites();
  background(startImg);
  startButton.show()
}

function nextLevel(){
  lvl1 = true
  lvl2 = true
  clearSprites();
  new Canvas (1000,600);
  background(nextImg);
  nextButton.show()
}

function next(){
  nextButton.hide();
  level++
  nextBool = false
}

function level1(){
  new Canvas (3000,600);
  background(115,239,245)
  translate (-player.x + 50, 0)
  fill(255)
  stroke(0)
  strokeWeight(3)
  player.overlaps(finishLine,nextLevel)
  textSize(30)
  text ("LIVES: " + lives, player.x, 50);
  text("LEVEL" + level, player.x + 425, 50);


  clouds.removeAll();
  while (clouds.length < 5) {
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 400 + 500;
    cloud.y = 200
    cloud.w = 125;
    cloud.h = 50
  }
}//cloud pattern for level1

function level2(){
  new Canvas (3000,600);
  background(0);
  setGradient(g1,g2);
  translate (-player.x + 50, 0)
  fill(255)
  stroke(0)
  strokeWeight(3)
  player.overlaps(finishLine,nextLevel)
  textSize(30)
  text ("LIVES: " + lives, player.x, 50);
  text("LEVEL" + level, player.x + 425, 50);


  clouds.removeAll();
  while (clouds.length < 5) {
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 400 + 500;
    cloud.y = 400
    cloud.w = 125;
    cloud.h = 50
}
}

function level3(){
  new Canvas (3000,600);
  background(0,0,100)
  translate (-player.x + 50, 0)
  fill(255)
  stroke(0)
  strokeWeight(3)
  player.overlaps(finishLine,winScreen);
  textSize(30)
  text ("LIVES: " + lives, player.x, 50);
  text("LEVEL" + level, player.x + 425, 50);


  clouds.removeAll();
  while (clouds.length < 5) {
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 400 + 500;
    cloud.y = 300
    cloud.w = 125;
    cloud.h = 50
  }
}


function loseScreen(){
  new Canvas (1000,600);
  clearSprites();
  background(loseImg);
  restartButton.show();
}

function winScreen(){
  lvl3 = true
  new Canvas (1000,600);
  clearSprites();
  background(winImg);
  restartButton.show();
}



function draw() {
  if (level === 0){
      startScreen();
  }
 

  if (level === 1){
    if (!lvl1){
    level1();
    }
    if (!bool1){
      setup();
      bool1 = true
    }
}
  

  if (level === 2){
    if (!lvl2){
      level2();
      }
      if (!bool2){
        setup();
        bool2 = true
      }
    }
  

  if (level === 3){
    if (!lvl3){
      level3();
      }
      if (!bool3){
        setup();
        bool3 = true
      }
    }



  if (player.collides(clouds)){
    if(!hitBool){
      setup()
      hitBool = true
    }
    lives --
  }

  if (player.y > height){
    if(!hitBool){
      setup()
      hitBool = true
    }
  lives --
  }
  if (player.y < 0){
    if(!hitBool){
      setup()
      hitBool = true
    }
    lives --
  }

 

  if (lives === 0){
    loseScreen();
    }
  


  fill(255)
  stroke(0)
  strokeWeight(2)
  // text ("LIVES: " + lives, player.x, 50);
  // text ("LEVEL" + level, player.x + 500, 50);
// text ("SCORE: " + score, player.x, 75);

}




function keyPressed(){
if (key === ' '){
    player.vel.x = 4
    player.vel.y = -5
    player.collider = 'dynamic'
  }
}



function clearSprites(){
  clouds.removeAll();
  player.remove();
}