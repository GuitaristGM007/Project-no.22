//declare constants for matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Constraint = Matter.Constraint;

//declare variables for objects
var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

//function to setup the game
function setup(){
//create the canvas of required size
createCanvas(500, 500);

//create the engine
engine = Engine.create();
//add the world into engine
world = engine.world;

//declare behaviour of the roof
var roof_options = {
//define behaviour of the roof
isStatic : true
};

//declare behaviour of the balls 
ball_options = {
//define behavior
restitution : 0.8,
isStatic : false
};

//create an object for roof
roof = Bodies.rectangle(225, 125, 275, 25, roof_options);
//add the object to the World
World.add(world, roof);

//create an object for ball1
ball1 = Bodies.circle(200, 420, 25, ball_options);
//add the object to the World
World.add(world, ball1);
//create an object for ball2
ball2 = Bodies.circle(225, 420, 25, ball_options);
//add the object to the World
World.add(world, ball2);
//create an object for ball3
ball3 = Bodies.circle(250, 420, 25, ball_options);
//add the object to the World
World.add(world, ball3);
//create an object for ball4
ball4 = Bodies.circle(275, 420, 25, ball_options);
//add the object to the World
World.add(world, ball4);
//create an object for ball5
ball5 = Bodies.circle(300, 420, 25, ball_options);
//add the object to the World
World.add(world, ball5);

//create a constraint for rope1
rope1 = Matter.Constraint.create({
//create pointA
pointA : {x : 125, y : 125},
//name bodyB
bodyB : ball1,
//create pointB
pointB : {x : 0, y : 0},
//mention length
length : 295,
//mention stiffness
stiffness : 0.1
});
//add the rope1 into World
World.add(world, rope1);
//create a constraint for rope2
rope2 = Matter.Constraint.create({
//create pointA
pointA : {x : 175, y : 125},
//name bodyB
bodyB : ball2,
//create pointB
pointB : {x : 0, y : 0},
//mention length
length : 295,
//mention stiffness
stiffness : 0.1
});
//add the rope2 into World
World.add(world, rope2);
//create a constraint for rope3
rope3 = Matter.Constraint.create({
//create pointA
pointA : {x : 225, y : 125},
//name bodyB
bodyB : ball3,
//create pointB
pointB : {x : 0, y : 0},
//mention length
length : 295,
//mention stiffness
stiffness : 0.1
});
//add the rope3 into World
World.add(world, rope3);
//create a constraint for rope4
rope4 = Matter.Constraint.create({
//create pointA
pointA : {x : 275, y : 125},
//name bodyB
bodyB : ball4,
//create pointB
pointB : {x : 0, y : 0},
//mention length
length : 295,
//mention stiffness
stiffness : 0.1
});
//add the rope4 into World
World.add(world, rope4);
//create a constraint for rope5
rope5 = Matter.Constraint.create({
//create pointA
pointA : {x : 325, y : 125},
//name bodyB
bodyB : ball5,
//create pointB
pointB : {x : 0, y : 0},
//mention length
length : 295,
//mention stiffness
stiffness : 0.1
});
//add the rope5 into World
World.add(world, rope5);

//declare rectMode
rectMode(CENTER);
//declare ellipseMode
ellipseMode(RADIUS);
}

//function to draw the objects 
function draw(){
//set a suitable color for background
background("blue");

//update the engine
Engine.update(engine);
//create rect for roof with suitable color
fill("yellow");
rect(roof.position.x, roof.position.y, 275, 25);

//create ellipse for ball1 with suitable color
fill("yellow");
ellipse(ball1.position.x, ball1.position.y, 25);
//create ellipse for ball2 with suitable color
fill("yellow");
ellipse(ball2.position.x, ball2.position.y, 25);
//create ellipse for ball3 with suitable color
fill("yellow");
ellipse(ball3.position.x, ball3.position.y, 25);
//create ellipse for ball4 with suitable color
fill("yellow");
ellipse(ball4.position.x, ball4.position.y, 25);
//create ellipse for ball5 with suitable color
fill("yellow");
ellipse(ball5.position.x, ball5.position.y, 25);

//create push function
push();

//set a suitable strokeWeight
strokeWeight(7.5);
//set a suitable color for stroke
stroke("red");

//give line code for rope1
line(rope1.pointA.x, rope1.pointA.y, ball1.position.x, ball1.position.y);
//give line code for rope2
line(rope2.pointA.x, rope2.pointA.y, ball2.position.x, ball2.position.y);
//give line code for rope3
line(rope3.pointA.x, rope3.pointA.y, ball3.position.x, ball3.position.y);
//give line code for rope4
line(rope4.pointA.x, rope4.pointA.y, ball4.position.x, ball4.position.y);
//give line code for rope5
line(rope5.pointA.x, rope5.pointA.y, ball5.position.x, ball5.position.y);

//create pop function
pop();

//call the function to apply force to ball1
swingForce();
}

//function to apply force on the ball1
function swingForce(){
if (keyCode === LEFT_ARROW){
//apply force on ball1
Matter.Body.applyForce(ball1, ball1.position, {x : -0.2, y : 0.0});
}
}
