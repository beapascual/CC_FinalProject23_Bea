let player;
let lives = 3;
let level = 0;
let img1, img2;
let bool1, bool2, bool3;
let cloud1, cloud2, cloud3;
let lvl1, lvl, lvl3;


function preload(){
  img1 = loadImage('images/bee.png')
  img2 = loadImage('images/cloud.png')
  startImg = loadImage('images/startScreen.jpg')
  loseImg = loadImage('images/loseScreen.jpg')
  winImg = loadImage ('images/winScreen.jpg')
  nextImg = loadImage('images/nextLevel.jpg')
  img3 = loadImage('images/finishLine.png')
}


function setup() {
	new Canvas(3000, 400);
	world.gravity.y = 10; 
  bool1 = false
  bool2 = false
  bool3 = false
  bool4 = false
  lvl1 = false
  lvl2 = false
  lvl3 = false


	player = new Sprite();
	player.x = 200
	player.y = 300;
  player.diameter = 30
  player.img = img1
  player.scale = 0.08 //player settings
  player.collider = 'kinematic'

  finishLine = new Sprite(2800,300,300,2000)
  finishLine.img = img3
  finishLine.scale = 0.4
  finishLine.collider = 'kinematic'
  

  clouds = new Group();
  clouds.img = img2;
  clouds.scale = 0.2
  clouds.collider = 'kinematic' //clouds settings


  clouds1 = new Group();
  clouds1.img = img2;
  clouds1.scale = 0.2
  clouds1.collider = 'kinematic'

  clouds2 = new Group();
  clouds2.img = img2;
  clouds2.scale = 0.2
  clouds2.collider = 'kinematic'

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


function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) { // as y increases inter increases, creating a smooth gradient
    var inter = map(y, 0, 300, 0, 1); // from y=0 to y=300, color will change completely from g1 to g2
    var s1 = lerpColor(g1, g2, inter); // lerp color makes color change from 1 to 2, inter makes smooth gradient
    stroke(s1); // each line is a different color to make gradient ^^
    line(0, y, 5000, y); // makes the color appear
  }
} // gradient for level 2 (taken from midterm)

function start(){
  startButton.hide()
  level = 1
}

function restart(){
  restartButton.hide()
  level = 0
  lives = 3
  bool1 = false
  bool2 = false
  bool3 = false
}

function next(){
  nextButton.hide();
  level++
  nextBool = false
}

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


function level1(){
  new Canvas (3000,600);
  background(115,239,245)
  translate (-player.x + 100, 0)
  fill(255)
  stroke(0)
  strokeWeight(3)
  player.overlaps(finishLine,nextLevel)
  textSize(30)
  text ("LIVES: " + lives, player.x, 50);
  text("LEVEL" + level, player.x + 425, 50);


  clouds.removeAll();
  while (clouds.length < 4) {
    cloud1 = new clouds.Sprite();
    cloud1.x = clouds.length * 500 + 500;
    cloud1.y = 175
    cloud1.w = 100
    cloud1.h = 50

  while(clouds1.length < 3) {
    cloud2 = new clouds1.Sprite();
    cloud2.x = clouds1.length * 500 + 750;
    cloud2.y = 425
    cloud2.w = 100
    cloud2.h = 50
  }
}
}

//cloud pattern for level1


function level2(){
  new Canvas (3000,600);
  background(0);
  setGradient(g1,g2);
  translate (-player.x + 100, 0)
  fill(255)
  stroke(0)
  strokeWeight(3)
  player.overlaps(finishLine,nextLevel)
  textSize(30)
  text ("LIVES: " + lives, player.x, 50);
  text("LEVEL" + level, player.x + 425, 50);


  clouds.removeAll();
  while (clouds.length < 2) {
    cloud1 = new clouds.Sprite();
    cloud1.x = clouds.length * 700 + 700;
    cloud1.y = 100
    cloud1.w = 100
    cloud1.h = 50

  while(clouds1.length < 2) {
    cloud2 = new clouds1.Sprite();
    cloud2.x = clouds1.length * 700 + 700;
    cloud2.y = 500
    cloud2.w = 100
    cloud2.h = 50
  }

  while(clouds2.length < 3) {
    cloud3 = new clouds2.Sprite();
    cloud3.x = clouds2.length * 700 + 350;
    cloud3.y = 300
    cloud3.w = 100
    cloud3.h = 50
  }
}
}


function level3(){
  new Canvas (3000,600);
  background(0,0,100)
  translate (-player.x + 100, 0)
  fill(255)
  stroke(0)
  strokeWeight(3)
  player.overlaps(finishLine,winScreen);
  textSize(30)
  text ("LIVES: " + lives, player.x, 50);
  text("LEVEL" + level, player.x + 425, 50);


  clouds.removeAll();
  while (clouds.length < 6) {
    cloud1 = new clouds.Sprite();
    cloud1.x = clouds.length * 400 + 200;
    cloud1.y = 150
    cloud1.w = 100
    cloud1.h = 50

    cloud1 = new clouds.Sprite();
    cloud1.x = clouds.length * 400 + 100;
    cloud1.y = 450
    cloud1.w = 100
    cloud1.h = 50

    cloud1 = new clouds.Sprite();
    cloud1.x = clouds.length * 400 + 75;
    cloud1.y = 300
    cloud1.w = 100
    cloud1.h = 50
  }
}





function draw() {

  player.debug = true
  clouds.debug = true
  clouds1.debug = true
  clouds2.debug = true
  finishLine.debug = true

  if (level === 0){
      startScreen();
  }
 
  if (level === 1){
    if (!lvl1){
    level1();
    }
    if (!bool1){
      clearSprites()
      setup();
      bool1 = true
    }
}
  

  if (level === 2){
    if (!lvl2){
      level2();
      }
      if (!bool2){
        clearSprites()
        setup();
        bool2 = true
      }
    }
  

  if (level === 3){
    if (!lvl3){
      level3();
      }
      if (!bool3){
        clearSprites()
        setup();
        bool3 = true
      }
    }



  player.collides(clouds,respawn)
  player.collides(clouds1,respawn)
  player.collides(clouds2,respawn)

  if (player.y > height){
      respawn()
  }
  if (player.y < 0){
      respawn()
    }
    

  if (lives === 0){
    loseScreen();
  }
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
  clouds1.removeAll();
  clouds2.removeAll();
  player.remove();
}

function respawn(){
  lives --
  clearSprites()
  setup()
}