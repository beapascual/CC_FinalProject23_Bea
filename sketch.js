let ball, floor;


function setup() {
	new Canvas(5000, 400);
	world.gravity.y = 10;

	ball = new Sprite();
	ball.diameter = 50;
	ball.x = 0
	ball.y = 275;
	ball.vel.x = 4

  if(ball.pos.x === width-50){
    ball.vel.x = 0
    ball.pos.x = 0
    ball.pos.y = 275
  }

	floor = new Sprite();
	floor.x = 0
	floor.y = 300;
	floor.w = width;
	floor.h = 5;
	floor.collider = 'static';

	// floor2 = new Sprite();
	// floor2.x = 100
	// floor2.y = 250;
	// floor2.w = 50;
	// floor2.h = 5;
	// floor2.collider = 'static';

  for (let j = 1; j<8; j++){

  
    obstacle = new Sprite (300*j,300,50,'triangle');
}
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
	translate (-ball.x + 50, 0)
	clear();

 



}

function keyPressed(){


if (key === ' '){
    ball.vel.y = -5
  }
}