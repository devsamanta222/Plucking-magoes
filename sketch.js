
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
	boy=new Boy(150,540,200,200)
	stone=new Stone(90,494,40)
	mango1=new Mango(580,200,50)
	mango2=new Mango(660,200,50)
	mango3=new Mango(540,280,50)
	mango4=new Mango(620,280,50)
	mango5=new Mango(700,280,50)

  rope=new Rope(stone.body,{x:90,y:494})		
  
  ground=new Ground(400,600,800,14)


	Engine.run(engine);
  
}
function mouseDragged(){
    
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
    rope.fly();
   
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
  ground.display()
  
  

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)  


  
 
}
function keyPressed(){
    if(keyCode === 32){
       rope.attach(stone.body);
    }
}

function detectCollision(obj1,obj2){
	var distance=dist(obj1.body.position.x,obj1.body.position.y,obj2.body.position.x,obj2.body.position.y)
	if(distance<=obj1.radius+obj2.radius){
		Matter.Body.setStatic(obj2.body,false)
	}
	
	

}


