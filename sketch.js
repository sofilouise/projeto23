
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1, block2;
var rotator1, rotator2, rotator3;
var angle1 = 50;
var angle2 = 90;
var angle3 = 130;

var particle1, particle2, particle3, particle4, particle5

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
     var plane_options={
		isStatic: true
	 }

  plane = Bodies.rectangle(300, 590, 600, 10, plane_options)
  World.add(world, plane);
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

  block1 = Bodies.rectangle(120, 370, 160, 25, plane_options)
  World.add(world, block1);
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

  block2 = Bodies.rectangle(450, 370, 160, 25, plane_options)
  World.add(world, block2);
  fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

  rotator1 = Bodies.rectangle(270,200,150,20,plane_options);
  World.add(world,rotator1);

  rotator2 = Bodies.rectangle(270,200,150,20,plane_options);
  World.add(world,rotator2);

  rotator3 = Bodies.rectangle(270,200,150,20,plane_options);
  World.add(world,rotator3);

  var particle_options = {
	restitution:0.4,
	friction:0.02
  }
 
 particle1 = Bodies.circle(220,10,10,particle_options);
 World.add(world, particle1);
 fill("brown");
  rectMode(CENTER);
  ellipseMode(RADIUS);

 particle2 = Bodies.circle(220,10,10,particle_options);
 World.add(world, particle2);


 particle3 = Bodies.circle(220,10,10,particle_options);
 World.add(world, particle3);
 

 particle4 = Bodies.circle(220,10,10,particle_options);
 World.add(world, particle4);


 particle5 = Bodies.circle(220,10,10,particle_options);
 World.add(world, particle5);
 

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("PaleGreen");

  Engine.update(engine);

  rect(plane.position.x, plane.position.y, 600, 15);
  rect(block1.position.x, block1.position.y, 160, 25);
  rect(block2.position.x, block2.position.y, 160, 25);
  
  ellipse(particle1.position.x, particle1.position.y, 12);
  ellipse(particle2.position.x, particle2.position.y, 12);
  ellipse(particle3.position.x, particle3.position.y, 12);
  ellipse(particle4.position.x, particle4.position.y, 12);
  ellipse(particle5.position.x, particle5.position.y, 12);

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.3;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.5;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.8;

  drawSprites();
 
}



