let ball, floor;

function setup() {
	new Canvas(400, 400);
	world.gravity.y = 10;
	
	ball = new Sprite();
	ball.diameter = 50
	player = new Sprite(30, 0, 50);

	floor1 = new Sprite();
	floor1.y = 300
	floor1.w = 250
	floor1.h = 5
	floor1.collider = 'static'
}

function draw() {
	clear();

}