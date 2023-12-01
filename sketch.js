let x;

function setup() {
  createCanvas(800, 800);
  character = new Character;

}

function keyPressed(){
  if (key === ' '){
    let jump = createVector(0, -5);
    character.applyForce(jump);
  }
}

function draw() {
  // put drawing code here
  background(0);

  let gravity = createVector(0,0.1);
  character.applyForce (gravity);



  translate (-character.pos.x+50,0)
  character.update();
  character.checkEdges();
  character.display();
  
for(let x = 0; x < width; x = x + 100 )
  fill (0,255,0);
  rect(x + 400,height-50,50,50);
}
