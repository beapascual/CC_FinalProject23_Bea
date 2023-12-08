let player, pillar;

function setup() {
	new Canvas(60, 342);
	world.gravity.y = 10;
	
	pillar = new Sprite(30, 362, 30, 500, 'static')
	player = new Sprite(30, 0, 50);
}

function draw() {
	clear();

	if (player.collides(pillar)) {
		player.vel.y = -5;
		pillar.h -= 52;
	}
}