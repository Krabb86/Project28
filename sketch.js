
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrait = Matter.Constrait;
var tree;
var ground;
var stone,hand;
var boy;
var mango1,mango2,mango3,mango4;
function preload()
{
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,395,400,400);

	ground = new Ground(400,650,800,10);

	stone = new Stone(165,510,30);

	boy = new Boy(200,550,80,52);

	mango1 = new Mango(600,300,30);
	mango2 = new Mango(675,345,30);
	mango3 = new Mango(525,405,30);
	mango4 = new Mango(695,415,30);

	//hand = new Throw(stone,{x:200, y:50});





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);


  boy.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   hand.fly();
}

function keyPressed(){
   if(keyCode === 32){
	   hand.attach(stone.body);
	   launcherObject.attach(stone.body);


   }


}
function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position 
	stoneBodyPosition = lstone.body.position 

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}


	
}


