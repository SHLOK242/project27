
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(600,680,1200,20)
    stone1=new Stone(100,100,100,100)
	rubber1=new Rubber(350,100,30)
	hammer1=new Hammer(500,100,100,30)
	sand1=new Sand(150,600,10)
	sand2=new Sand(200,600,10)
	sand3=new Sand(250,600,10)
	sand4=new Sand(300,600,10)
	iron1=new Iron(800,670,100,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  ground1.display()
  stone1.display()
  rubber1.display()
  hammer1.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  iron1.display()
}



