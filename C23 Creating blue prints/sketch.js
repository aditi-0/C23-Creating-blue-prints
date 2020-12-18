const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
// 1. create a variable for the object
var ground;
var box1;
var box2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //2. Mention that the ground (object) belongs to the Ground class 
   //objectname = new classname
   ground = new Ground();
   box1= new Box(200,300,50,50);
   box2= new Box(240,100,50,100);
  
    
}

function draw(){
    background(0);
    Engine.update(engine);

    //3. call the display() for the object
    //objectname.display()
    ground.display();
    box1.display();
    box2.display();
   
    
}