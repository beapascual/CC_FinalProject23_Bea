//Bea Pascual - Creative Coding Final Project

/*References
images for sprites taken from google
images for screen made with google slides

https://www.youtube.com/watch?v=Ouza_4SsbLc - video only used for sidescrolling effect (does not teach p5js :( )
https://p5play.org/learn/group.html - used specifically to learn how to make groups for my clouds
https://p5play.org/ - used in general to learn pretty much everything for this project
https://p5js.org/reference/ - used in case I forgot any previous concepts
*/



let player;
let lives = 3;
let level = 0;
let lvl1, lvl, lvl3; // used to run level functions once
let bool1, bool2, bool3; // used to rerun setup once before every level
let cloud, cloud1, cloud2, cloud3; // sprites in the cloud groups


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
  textFont('Comic Sans MS');
	world.gravity.y = 10; 
  g1 = color(232, 86, 94);
  g2 = color(232, 170, 69);// colors for gradient
  bool1 = false
  bool2 = false
  bool3 = false
  bool4 = false
  lvl1 = false
  lvl2 = false
  lvl3 = false // world basics

//starting settings for the player (bee)
	player = new Sprite();
	player.x = 200
	player.y = 300;
  player.diameter = 30 //bee's hitbox
  player.img = img1
  player.scale = 0.08 //scales the image of the bee
  player.collider = 'kinematic' //makes it so the bee isn't affected by gravity before you start playing 

//settings for the finish line
  finishLine = new Sprite(2800,300,300,2000) // constructors (x,y,w,h)
  finishLine.img = img3
  finishLine.scale = 0.4 //scales the image of the finish line
  finishLine.collider = 'kinematic' // finish line will not move from gravity or collisions

//basic settings for all the cloud groups
  clouds = new Group(); //allows multiple stripes in same group to have the same settings
  clouds.img = img2;
  clouds.scale = 0.2 //scales the size of the clouds
  clouds.collider = 'kinematic'//clouds will not move fromg gravity or collisions

  clouds1 = new Group();
  clouds1.img = img2;
  clouds1.scale = 0.2
  clouds1.collider = 'kinematic'

  clouds2 = new Group();
  clouds2.img = img2;
  clouds2.scale = 0.2
  clouds2.collider = 'kinematic'

  clouds3 = new Group();
  clouds3.img = img2;
  clouds3.scale = 0.5
  clouds3.collider = 'kinematic'

//settings for all of the buttons (knowledge taken from sketch4)
  startButton = createButton ("start"); //what the button says
  startButton.position (750,400); 
  startButton.style('font-family', "Comic Sans MS")
  startButton.style('font-size','70px') // also determines size of button
  startButton.style('background-color','255')
  startButton.mousePressed(start) //if button is pressed by mouse, function inside parentheses will run
  startButton.hide() //button won't show without being called

  restartButton = createButton ("restart");
  restartButton.position (650,350);
  restartButton.style('font-family', "Comic Sans MS")
  restartButton.style('font-size','70px')
  restartButton.style('background-color','255')
  restartButton.mousePressed(restart)
  restartButton.hide()

  nextButton = createButton ("continue");
  nextButton.position (365,350);
  nextButton.style('font-family', "Comic Sans MS")
  nextButton.style('font-size','70px')
  nextButton.style('background-color','255')
  nextButton.mousePressed(next)
  nextButton.hide()
}// end of setup function


function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) { // as y increases inter increases, creating a smooth gradient
    var inter = map(y, 0, 600, 0, 1); // from y=0 to y=600, color will change completely from g1 to g2
    var s1 = lerpColor(g1, g2, inter); // lerp color makes color change from 1 to 2, inter makes smooth gradient
    stroke(s1); // each line is a different color to make gradient ^^
    line(0, y, 5000, y); // makes the color appear, width was changed to 5000 so gradient stays on screen while bee is still moving near the end of the canvas
  }
} // gradient for level 2 (knowledge taken from midterm)

// button functions called when buttons are pressed
function start(){
  startButton.hide() //hides the start button after it's pressed
  level = 1 //switches screen to level 1
}

function restart(){
  restartButton.hide()
  level = 0 //resets level back to 0, switches screen back to start screen
  lives = 3 //resets amount of lives
  bool1 = false //booleans 1,2, and 3 are returned to false so that they can be used again to play the game without refreshing the page
  bool2 = false
  bool3 = false
}

function next(){
  nextButton.hide();
  level++ //switches screen to next level
  nextBool = false //boolean is returned to false so it can be used again for the next levels without refreshing
}

//functions for the different screens
function startScreen(){
  new Canvas (1000,600); //changes size of canvas to something that can fit on the screen
  clearSprites(); //removes the bee and the clouds
  background(startImg);
  startButton.show() // calls the start button to show
} //start screen

function nextLevel(){
  lvl1 = true
  lvl2 = true //levels 1 and 2 are called to be true so that their functions only run once within the draw loop in order to not interfere with future levels
  clearSprites();
  new Canvas (1000,600);
  background(nextImg);
  nextButton.show()
} // waiting screen that appears between levels

function loseScreen(){
  new Canvas (1000,600);
  clearSprites();
  background(loseImg);
  restartButton.show();
}// losing screen that appears after player loses all 3 lives

function winScreen(){
  lvl3 = true //level 3 is called to be true so the function only runs once within the draw loop in order to not interfere with the appearance of the win screen
  new Canvas (1000,600);
  clearSprites();
  background(winImg);
  restartButton.show();
}//winning screen that appears after player successfully completes all 3 levels

//functions to create the levels
function level1(){
  new Canvas (3000,600); //canvas is stretched to be long in order to fit more obstacles and allow screen to be translated with the position of the player (sidescrolling)
  background(115,239,245) // color of the morning sky
  translate (-player.x + 100, 0) // screen will appear to scroll as the player moves
  player.overlaps(finishLine,nextLevel) //when player reaches the finish line, screen will switch to next level waiting screen
  fill(255)//beginning of settings for text
  stroke(0)
  strokeWeight(3)
  textSize(30)
  text ("LIVES: " + lives, player.x-50, 50); //lives will change depending on how many lives the player has left, position will allow it to remain in the top left corner of the screen
  text("LEVEL " + level, player.x + 375, 50); //levels will change depending on what level the player is on, position will allow it to remain in the center of the screen

  clouds.removeAll(); //makes sure the obstacles from other levels are cleared before creating a new level
  while (clouds.length < 4) { //top row of clouds, allows 4 clouds to appear in the row
    cloud = new clouds.Sprite(); //cloud is called as part of the clouds group, collider and image settings will apply to each individual cloud sprite
    cloud.x = clouds.length * 500 + 500;// clouds are all 500 apart, starting x position is 500
    cloud.y = 175
    cloud.w = 145 // width and height determine hitbox of the clouds
    cloud.h = 55
  }

  while(clouds1.length < 3) {//bottom row of clouds, allows 3 clouds to appear in the row
    cloud1 = new clouds1.Sprite();//cloud1 is part of the clouds1 group to create a separate row in the same function
    cloud1.x = clouds1.length * 500 + 750;//clouds are all 500 apart, starting x position is 750
    cloud1.y = 425
    cloud1.w = 145
    cloud1.h = 55
  }
}

function level2(){
  new Canvas (3000,600);//explanation in level 1
  background(0);
  setGradient(g1,g2); //sunset background for level 2, levels go day, sunset, night
  translate (-player.x + 100, 0) // explanation in level 1
  player.overlaps(finishLine,nextLevel)//explanation in level 1
  fill(255)
  stroke(0)
  strokeWeight(3)
  textSize(30)
  text ("LIVES: " + lives, player.x-50, 50); //explanation in level 1
  text("LEVEL " + level, player.x + 375, 50);


  clouds.removeAll(); //clears obstacles from level 1
  while (clouds.length < 2) {//top row of clouds, allows 2 to appear
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 700 + 700; //clouds are 700 apart, starting x position is 700
    cloud.y = 100 // top row
    cloud.w = 145
    cloud.h = 55
  }
  while(clouds1.length < 2) {//bottom row of clouds, allows 2 to appear
    cloud1 = new clouds1.Sprite();
    cloud1.x = clouds1.length * 700 + 700; //clouds are 700 apart, starting x position is 700 (same as top row)
    cloud1.y = 500 // bottom row
    cloud1.w = 145
    cloud1.h = 55
  }

  while(clouds2.length < 3) {//middle row of clouds, allows 3 to appear
    cloud2 = new clouds2.Sprite();
    cloud2.x = clouds2.length * 700 + 350;// clouds are 700 apart, starting x positionis 350 (halfway between the clouds of the other rows)
    cloud2.y = 300 //middle row, right in between
    cloud2.w = 145
    cloud2.h = 55
  }
}

function level3(){
  new Canvas (3000,600); //explained in level 1
  background(0,0,100) //color of the night sky
  translate (-player.x + 100, 0)// explained in level 1
  player.overlaps(finishLine,winScreen); //explained in level 1
  fill(255)
  stroke(0)
  strokeWeight(3)
  textSize(30)
  text ("LIVES: " + lives, player.x-50, 50); // explained in level 1
  text("LEVEL " + level, player.x + 375, 50);


  clouds.removeAll();// removes obstacles from level 2
  while (clouds.length < 2) {// top row of clouds, allows 2 to appear
    cloud = new clouds.Sprite();
    cloud.x = clouds.length * 800 + 400;//clouds are 800 apart, starting position is 400 (right in between big clouds)
    cloud.y = 100
    cloud.w = 145
    cloud.h = 55
  }
  while(clouds1.length < 2) {//bottom row of clouds
    cloud1 = new clouds1.Sprite();
    cloud1.x = clouds1.length * 800 + 400;//same x position as top row
    cloud1.y = 500
    cloud1.w = 145
    cloud1.h = 55
  }

  while(clouds3.length < 2) {//middle row of clouds
    cloud3 = new clouds3.Sprite();//bigger sized clouds
    cloud3.x = clouds3.length * 800 + 800;//clouds are 800 apart, starting position is 800
    cloud3.y = 300
    cloud3.w = 430//bigger hitbox bc clouds3 group is bigger
    cloud3.h = 145
  }
}


function draw() {
  if (level === 0){ //start
      startScreen();
  }
 
  if (level === 1){ //level 1, easy difficulty, daytime
    if (!lvl1){
    level1();
    }// so that level 1 function will only run once,, lvl1 isn't called to be true yet so that the level 1 function can still loop for the translate and background functions when the bee moves
    if (!bool1){
      clearSprites() //clears the bee and obstacles from previous levels and setup functions, clears sprites before calling setup to prevent duplicates
      setup(); //starts bee in original position from setup, allows bee to stay still until user presses the space bar
      bool1 = true // makes sure setup function only runs once
    }
  }
  
  if (level === 2){ // level 2, medium difficulty, sunset
    if (!lvl2){
      level2();
      }// so that level 2 function will only run once,, lvl2 isn't called to be true yet so that the level 2 function can still loop for the translate and background functions when the bee moves
      if (!bool2){
        clearSprites()//clears the bee and obstacles from previous levels and setup functions, clears sprites before calling setup to prevent duplicates
        setup(); //starts bee in original position from setup, allows bee to stay still until user presses the space bar
        bool2 = true // makes sure setup function only runs once
      }
    }
  
  if (level === 3){ // level 3, hard(ish) difficulty, night time
    if (!lvl3){
      level3();
      }// so that level 3 function will only run once,, lvl3 isn't called to be true yet so that the level 3 function can still loop for the translate and background functions when the bee moves
      if (!bool3){
        clearSprites()//clears the bee and obstacles from previous levels and setup functions, clears sprites before calling setup to prevent duplicates
        setup(); //starts bee in original position from setup, allows bee to stay still until user presses the space bar
        bool3 = true // makes sure setup function only runs once
      }
    }


    if (lives === 0){
      loseScreen();
    } // lose screen appears if player loses all 3 lives

  // resets player back to starting position if they collide with any clouds
    player.collides(clouds,respawn)
    player.collides(clouds1,respawn)
    player.collides(clouds2,respawn)
    player.collides(clouds3,respawn) 
  
  // resets player back to starting position if they go off the screen
    if (player.y > height){
      respawn()
    }
    if (player.y < 0){
      respawn()
    } 
}


function clearSprites(){ //clears all sprites
  clouds.removeAll(); //removeAll removes all the sprites within the group without removing the group itself (learned from the eroor console)
  clouds1.removeAll();
  clouds2.removeAll();
  clouds3.removeAll();
  player.remove();
}


function respawn(){ 
  lives -- //happens when a player loses a life
  clearSprites() //clears sprites before calling setup to make sure there aren't duplicates
  setup() //resets player back to original position so that bee isn't moving until player presses the space bar
}


function hitboxes(){ //shows hitboxes of all sprites, useful because the hitboxes don't exactly match up with the image due to weird shapes
  player.debug = true
  clouds.debug = true
  clouds1.debug = true
  clouds2.debug = true
  clouds3.debug = true
  finishLine.debug = true
}

function hitboxesOff(){ //turns the hitboxes of all sprites off, just as an option
  player.debug = false
  clouds.debug = false
  clouds1.debug = false
  clouds2.debug = false
  clouds3.debug = false
  finishLine.debug = false
}


function keyPressed(){
if (key === ' '){ // space bar to get the bee to move
    player.vel.x = 4 // moves the bee forward, causes the screen to start scrolling
    player.vel.y = -5 // gives the bee a "jump"
    player.collider = 'dynamic' //allows bee to move and be affected by gravity and collisions with the clouds
  }

//keys to be pressed for hitboxes
  if(key === 'h'){//h for hitboxes
  hitboxes()
  }
  if(key === 'n'){//n for no hitboxes
  hitboxesOff();
  }
}

