//https://www.youtube.com/watch?v=Ouza_4SsbLc

let x;

function setup() {
  createCanvas(800, 600);
  character = new Character;

}

function keyPressed(){
  if (key === ' '){
    let jump = createVector(0, -5 );
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
  
for(let x = 0; x < width*5; x = x + 300){
  fill (0,255,0);
  triangle(x + 400,400,x+450,400,x+425,400-50);
  fill (127)
}
rect (0,400,width*6,height)
rect (0,0,width*6,200)

}