let dots;
let i = 25;

function setup() {
	new Canvas(500, 500);

	dots = new Group();
	dots.color = 'yellow';
	dots.y = 25;
	dots.diameter = 10;
	
	while (dots.length < 24) {
		let dot = new dots.Sprite();
		dot.x = dots.length * 20;
	}

	player = new Sprite(0,0,i);

	player.overlaps(dots, collect);
}
function collect(player, dot) {
	dot.remove();
}


function draw() {
	clear();
	player.moveTowards(mouse);
	if (player.overlaps(dots)){
		player.scale *= 2;
	}
}
