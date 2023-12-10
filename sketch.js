let player, floor, cloud;
let lives = 3;
let coins = 0;


function setup() {
	new Canvas(2500, 400);
	world.gravity.y = 10;
  textSize(20);

	player = new Sprite();
	player.x = 0
	player.y = 200;
  player.img = 'images/bee.png'
  player.scale = 0.05

  




  dots = new Group();
    dots.color = 'yellow';
    dots.y = 200;
    dots.collider = 'kinematic'

    while (dots.length < 24) {
      let dot = new dots.Sprite();
      dot.x = dots.length * 100 + 300;
      dot.diameter = 10
    }

    player.collides(dots, collect)


  clouds = new Group();
    clouds.img = 'images/cloud.png';
    clouds.y = 200;
    clouds.scale = 0.1
    clouds.collider = 'kinematic'
    
    while (clouds.length < 24) {
      let cloud = new clouds.Sprite();
      cloud.x = clouds.length * 400 + 500;
      cloud.w = 125;
      cloud.h = 50
    }
  
   

}

function collect(){
  dot.remove();
  coins++
}


function draw() {

  if (lives > 0){
	translate (-player.x + 50, 0)
	clear();
  background(0,0,100)


 if (player.x <= 2400){
  player.vel.x = 4
 } else if (player.x > 2400) {
  player.vel.x = 0
 }
  }

  player.overlaps(dots, collect); 

  if (player.collides(clouds)){
    player.x = 0
    lives --
    coins = 0
  }


  if (player.y > height){
  player.x = 0
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
 



text ("LIVES: " + lives, player.x, 20);
text ("COINS: " + coins, player.x, 50);


}


function keyPressed(){
if (key === ' '){
    player.vel.y = -5
  }
}



function clearSprites(){
  clouds.removeSprites();
  player.remove();
}