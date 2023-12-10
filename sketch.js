let player, floor;
let lives = 3;
let coins = 0;


function setup() {
	new Canvas(2500, 400);
	world.gravity.y = 10;

	player = new Sprite();
	player.x = 0
	player.y = 200;
  player.img = 'images/bee.png'
  player.scale = 0.05
  // player.rotationLock = false
	// ball.vel.x = 4
  


	floor = new Sprite(0,300,5000,5, 'static');



  for (let j = 1; j<8; j++){

  
    obstacle = new Sprite (300*j,250,50,'triangle');

}

textSize(20);
    // obstacles = new Group (obstacle)

  //   dots = new Group();
  //   dots.color = 'yellow';
  //   dots.y = 275;
  //   dots.x = 200
  //   dots.diameter = 10;
    
  //   while (dots.length < 24) {
  //     let dot = new dots.Sprite();
  //     dot.x = dots.length * 20;
  //   }
  
  
  //   ball.overlaps(dots, collect);
  // }
  // function collect(ball, dot) {
  //   dot.remove();
  // }
}
  


function draw() {


 
	translate (-player.x + 50, 0)
	clear();
  if(player.x < 2400){
    player.vel.x = 4
  } else{
    player.vel.x = 0
  }
  background(255)


player.collide(obstacle, stop);
 

push ()
text ("LIVES: " + lives, 20, 20);
text ("COINS: " + coins, 20, 50);
pop ()




}

function keyPressed(){



if (key === ' '){
    player.vel.y = -5
  }
}

function stop(){
  player.x = 0
  player.vel.x = 0
}