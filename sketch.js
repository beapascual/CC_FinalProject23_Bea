function setup() {
  createCanvas(800, 800);
  character = new Character;

}

function draw() {
  // put drawing code here
  background(0);
  character.update();
  character.display();

  fill (0,255,0);
  rect(400,height-50,50,50);
}
