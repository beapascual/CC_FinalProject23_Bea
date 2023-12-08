//https://www.youtube.com/watch?v=Ouza_4SsbLc

let x;
let button;
let option;

function setup() {
  createCanvas(800, 600);
  character = new Character();
  option = 0

  // button = createButton("Ask 8Ball"); // creates button that says "Ask 8Ball"
  // button.position (330,130); // position where button is
  // button.style ('font-size', '30px'); // size of letters in button
  // button.mousePressed(level1);


 

}

function keyPressed(){
  if (key === ' '){
    let jump = createVector(0, -5 );
    character.applyForce(jump);
  }
  if (key === 'l'){
    option ++
  }
}

// function draw () {
//     background (0);
// }
 



function draw(){

if (option === 0){
  background (100,0,100); 
}

if (option === 1){

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
}

for(let x = 0; x < width*5; x = x + 100){
  fill (0,255,0);
  ellipse(x + 500,400-15,15);
}
fill (127)
rect (0,400,width*6,height)
rect (0,0,width*6,200)

}
}
 