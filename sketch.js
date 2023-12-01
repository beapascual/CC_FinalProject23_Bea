function setup() {
  createCanvas(800, 800);
  character = new Character;

}

function draw() {
  // put drawing code here
  background(0);
  character.update();
  character.display();


}
