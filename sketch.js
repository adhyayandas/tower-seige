const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var ground;
var hex1;
var gameState = "onsling"



function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
   // engine = Engine.create();
    //world = engine.world;

    block1= new tower(1000,200,50,50)
    block2= new tower(1050,200,50,50)
    block3= new tower(1100,200,50,50)
    block4= new tower(1150,200,50,50)
    block5= new tower(1025,150,50,50)
    block6= new tower(1075,150,50,50)
    block7= new tower(1125,150,50,50)
    block8= new tower(1050,100,50,50)
    block9= new tower(1100,100,50,50)
    block10= new tower(1175,50,50,50)
    ground=new Ground(1175,250,300,20)
    hex1 = new stone(500,200,50,50)


   
}

function draw(){
    background("black");
   // Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    ground.display()
    hex1.display()
    
    
   
}
function mouseReleased(){
    slingshot.fly();
    gameState='launched';

}



