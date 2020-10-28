
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

roof= new Roof(570,50,500,30);

bobDiameter=40;

bobObj1=new  Bob(400,450);
bobObj2=new  Bob(480,450);
bobObj3=new  Bob(560,450);
bobObj4=new  Bob(640,450);
bobObj5=new  Bob(720,450);

rope1=new Rope(bobObj1.body,roof.body,-bobDiameter*2,0);
rope2=new Rope(bobObj2.body,roof.body,-bobDiameter*1,0);
rope3=new Rope(bobObj3.body,roof.body,0.8,0);
rope4=new Rope(bobObj4.body,roof.body,-bobDiameter*1,0);
rope5=new Rope(bobObj5.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
roof.display();
bobObj1.display();
bobObj2.display();
bobObj3.display();
bobObj4.display();
bobObj5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



