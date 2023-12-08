let ball, floor;

function setup() {
	new Canvas(238, 200);
	world.gravity.y = 10;

	ball = new Sprite();
	ball.diameter = 50;
	ball.x = 0
	ball.y = 180;
	ball.vel.x = 2

	floor = new Sprite();
	floor.x = 0
	floor.y = 190;
	floor.w = 50;
	floor.h = 5;
	floor.collider = 'static';

	floor2 = new Sprite();
	floor2.x = 100
	floor2.y = 150;
	floor2.w = 50;
	floor2.h = 5;
	floor2.collider = 'static';
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