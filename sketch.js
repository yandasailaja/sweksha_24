const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject,paperObject,groundObject,engine;
var world;

function setup() {
	createCanvas(1200,400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world; 

	//Create the Bodies Here.
    paperObject = new Paper(40,40,20);
	dustbinObject = new Dustbin(1000,450);
	groundObject = new Ground(600,380);

	Engine.run(engine);
  
}

 function draw() {
  rectMode(CENTER);
  background("grey");

  paperObject.display();
  groundObject.display();
  dustbinObject.display();
  
  drawSprites();
 
}
  function keyPressed() {
	  if(keyCode===UP_ARROW){
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	  }
  }



