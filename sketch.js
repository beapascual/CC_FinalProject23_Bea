let player, floor, cloud;
let lives = 3;
let coins = 0;
let level = 1
let img1, img2;
let bool1, bool2, bool3, bool4;
let bool5;


function preload(){
  img1 = loadImage('images/bee.png')
  img2 = loadImage('images/cloud.png')
}


function setup() {
	new Canvas(3000, 400);
	world.gravity.y = 10;
  textSize(20); 
  bool1 = false
  bool2 = false
  bool3 = false
  bool4 = false
  bool5 = false// world basics

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



  // dots = new Group();
  //   dots.color = 'yellow';
  //   dots.y = 200;
  //   dots.collider = 'kinematic'

  //   while (dots.length < 24) {
  //     let dot = new dots.Sprite();
  //     dot.x = dots.length * 100 + 300;
  //     dot.diameter = 10
  //   }
  // player.collides(dots, collect)

}

// function collect(){
//   dot.remove();
//   coins++
// }


function setGradient(g1, g2) {
  noFill();
  for (var y = 0; y < height; y++) { // as y increases inter increases, creating a smooth gradient
    var inter = map(y, 0, 300, 0, 1); // from y=0 to y=300, color will change completely from g1 to g2
    var s1 = lerpColor(g1, g2, inter); // lerp color makes color change from 1 to 2, inter makes smooth gradient
    stroke(s1); // each line is a different color to make gradient ^^
    line(0, y, width, y); // makes the color appear
  }
} // gradient for level 2 (taken from midterm)


function level1(){
  while (clouds.length < 5) {
    let cloud = new clouds.Sprite();
    cloud.x = clouds.length * 400 + 500;
    cloud.y = 200
    cloud.w = 125;
    cloud.h = 50
  }
}//cloud pattern for level1

function level2(){
  while (clouds.length < 5) {
    let cloud = new clouds.Sprite();
    cloud.x = clouds.length * 800 + 500;
    cloud.y = 100
    cloud.w = 125;
    cloud.h = 50
  }
}




function draw() {
  if (!bool5){
    player.collider ='dynamic'
  }

  if (level === 1){
    if (!bool1){
      level1();
      player.x = 50
      bool1 = true
      bool5 = false
    }
    if (lives > 0){
      level1();
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
      level2();
      player.x = 50
      bool2 = true
      bool5 = false
    }
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
      bool5 = false
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
    coins = 0
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
    bool5 = true
  }
}



// function clearSprites(){
//   clouds.removeSprites();
//   player.remove();
// }