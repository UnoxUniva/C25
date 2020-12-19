class BaseClass
{
    constructor(xpos,ypos,width1,height1,angle)
    {
        
        var box_options = {restitution:.5,
                           density:1,
                           friction:1.2}

        this.body = Bodies.rectangle(xpos,ypos,width1,height1,box_options);
        this.width = width1;
        this.height = height1;
        this.image=loadImage("sprites/base.png")
        World.add(world,this.body)
        
    }

display()
{
    var position = this.body.position;
    var angle = this.body.angle;
    push();
    imageMode(CENTER);
    
    translate(position.x,position.y);
    rotate(angle)
    image(this.image,0,0,this.width,this.height)
    pop();
}

}