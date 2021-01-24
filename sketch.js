const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1
var ground2
var ground3

var box1,box2,box3,box4,box5,box6,box7,box8,box9
var polygon1
var box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box5
var chain1

function preload(){




}




function setup(){
createCanvas(900,500)

engine = Engine.create();
world = engine.world;

ground1=new ground(300,750,2000,530)
ground2=new ground(700,200,140,10)
ground3=new ground(400,400,200,10)



//level 1
box1=new box(650,180,20,30)
box2=new box(670,180,20,30)
box3=new box(690,180,20,30)
box4=new box(710,180,20,30)
box5=new box(730,180,20,30)
//level2
box6=new box(670,150,20,30)
box7=new box(690,150,20,30)
box8=new box(710,150,20,30)
//level3
box9=new box(690,120,20,30)
//ground2
//level1
box10=new box(350,380,20,30)
box11=new box(370,380,20,30)
box12=new box(390,380,20,30)
box13=new box(410,380,20,30)
box14=new box(430,380,20,30)
box15=new box(450,380,20,30)
box16=new box(470,380,20,30)
//level2
box17=new box(370,350,20,30)
box18=new box(390,350,20,30)
box19=new box(410,350,20,30)
box20=new box(430,350,20,30)
box21=new box(450,350,20,30)
//level3
box22=new box(390,320,20,30)
box23=new box(410,320,20,30)
box24=new box(430,320,20,30)
//level4
box25=new box(410,290,20,30)
//polygon
polygon1=new polygon(310,0,50,50)

chain1=new chain(polygon1.body , {x:150 , y:250})

text("DRAG THE HEXAGONAL AND RELEASE IT  , TO LAUNCHIT TOWARDS THE BLOCKS", x=250 , y=50 )

Engine.run(engine);
}

function draw(){
background("blue")
ground1.display();
ground2.display();
ground3.display();
polygon1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();

chain1.display();
}

function keyPressed(){
  if(keyCode === 32){
     
      chain.attach (polygon1);
  }
}
function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX ,y:mouseY })
   }
   


   function mouseReleased(){
    chain1.fly();
  }
