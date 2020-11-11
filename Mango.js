class Mango{
    constructor(x,y,width){
        var options= {
            isStatic: true,
            restitution: 0,
            friction:1
        }
        this.body = Bodies.circle(x,y,width,options);
        this.width = width

        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body);
    

    }
    display(){
    push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width,this.width);
        pop();
    }
       
}