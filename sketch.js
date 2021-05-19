// Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbin, dustbinImg;

// Preload function
function preload() {
	dustbinImg = loadImage("Images/Dustbin.png");
}

// Setup function
function setup() {

// Creating canvas
	createCanvas(1400, 600);

// Making engine and adding it to the world
	engine = Engine.create();
	world = engine.world;

// Creating ground
	ground = new Ground(width/2, height, width, 15);

// Making paper
	paper = new Paper(100, 400, 70);

// Making dustbin
	box1 = new Dustbin(1075, 580, 160, 20);
	box2 = new Dustbin(985, 477.5, 20, 225);
	box3 = new Dustbin(1165, 477.5, 20, 225);

// Making launcher
	launcher = new Launcher(paper.body, {x: 200, y: 250});

// Running engine
	Engine.run(engine);
}

// Draw function
function draw() {

// Default settings
	rectMode(CENTER);
	background("Yellow");
	Engine.update(engine);

// Showing the coordinates of the cursor
	text(mouseX + ", " + mouseY, 30, 40);

// Displaying ground
	ground.display();

// Displaying paper
	paper.display();

// Displaying dustbin
	box1.display();

// Displaying dustbin image
	dustbin = image(dustbinImg, 1075, 480, 200, 225)

// Displaying launcher
	launcher.display();

// Drawing sprites
	drawSprites();
}

// mouseDragged function to move the bird when dragged
function mouseDragged() {
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}

// mouseReleased function to launch the bird
function mouseReleased() {
	console.log("Hello")
    launcher.fly();
}