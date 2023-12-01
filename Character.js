class Character{

    constructor(x,y){
        this.pos = createVector(50,height-25);
        this.vel = createVector(2,0);
        this.acc = createVector(0,0);

    }

    applyForce(force){
        this.acc.add(force)
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
    }
    
    display(){
        fill(255)
        ellipse(this.pos.x,this.pos.y,50)
    }

    checkEdges(){
        if(this.pos.y > height-25){
            this.vel.y *= 0;
            this.pos.y = height-25;
        }
    }
}
