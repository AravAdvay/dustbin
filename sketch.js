
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(5000, 2000);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1400,680);
	paperObject=new paper(200,450,100);
	//groundObject=new ground(width/2,670,width,20);

	groundObject1=new ground(2500,1990,5000,50);	
	groundObject2=new ground(2500,10,5000,50);
	groundObject3=new ground(4990,1000,50,5000);
	groundObject4=new ground(10,1000,50,5000);

	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject1.display(); 
  groundObject2.display();
  groundObject3.display();
  groundObject4.display();
  
 
}
/*
function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
*/

function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:0});
    
	  }
	  
	  if (keyCode === LEFT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-85,y:0});
    
	  }
	  
	  if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:-85});
    
	  }
	  
	  if (keyCode === DOWN_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:85});
    
  	}
}










