class Log extends BaseClass
{
    constructor(x,y,height1,angle)
    {

        super(x,y,20,height1,angle)
        
        this.image=loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.body,angle)
        
       
        
    }



}