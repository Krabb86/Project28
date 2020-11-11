class Stone{
    constructor(x,y,width){
        var options= {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2


        }
        this.body = Bodies.circle(x,y,width,options);
        this.width = width

        this.image = loadImage("sprites/stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
       // ellipseMode(RADIUS);
        // ellipse(pos.x , pos.y,this.width,this.width);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width,this.width);
        pop();
       
    }
}