
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(600,350,400,500)
	boy=new Boy(150,500,200,200)
	stone=new Stone(85,450,30,30)
	mango1=new Mango(580,200,50,50)
	mango2=new Mango(660,200,50,50)
	mango3=new Mango(540,280,50,50)
	mango4=new Mango(620,280,50,50)
	mango5=new Mango(700,280,50,50)

	rope=new Rope(boy.body,{x:85,y:450})		


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display()
  boy.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  rope.display()
  
  
 
}



