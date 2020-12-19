//namespacing using constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1,box2,box3,box4;
var ground;
var ball
var pig1,pig2
var log1,log2, log3,log4
var bird1

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(600,390,1200,10);
  bird1= new Bird(250,100)
  
 box =  new Box(700,320,70,70)
 box1 =new Box(920,320,70,70)
 pig1= new Pig(810,350)
 log1= new Log(810,260,300,PI/2)
 


 box2 =  new Box(700,240,70,70)
 box3 =new Box(920,240,70,70)
 pig2= new Pig(810,220)
 log2= new Log(810,180,300,PI/2) 
 
 box4= new Box(810,160,70,70) 
 log3 = new Log(760,120,150,PI/7)
 log4 = new Log(870,120,150,-PI/7)
 

 
}

function draw() {
  background(220,255,255);  

  Engine.update(engine);
  
  ground.display();
 
   box.display();
   box1.display()
   pig1.display()
   log1.display()
   bird1.display()
   
   box2.display();
   box3.display()
   pig2.display()
   log2.display()

   box4.display()
   log3.display();
   log4.display();
   


}