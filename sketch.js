const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var enemy1,enemy2,enemy3;
var border1,border2,border3;
var base1,base2,base3,base4,base5,base6,base7,base8;
var player,border4,MystryI;
var mystry,left,right,up,Win,winIMG;

function preload(){
  mystry = loadImage("./Assets/MystryMark.png")
  winIMG = loadImage("./Assets/Win.png")

}


function setup() {
  createCanvas(1920,969);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

MystryI = createSprite(1552,650,10,10)
MystryI.addImage("Mystrey",mystry);
Win = createSprite(1818,50,10,10)
Win.addImage("Mystrey",winIMG)
player = new playerS(40, 100, 50, 50);
enemy1 = new Enemy(500,950,100,100)
enemy2 = new Enemy(1000,400,100,100)
enemy3 = new Enemy(379,172,100,100)
border4 = new Base(960,969,10000,20)
border1 = new Base(0,969,20,50000)
border2 = new Base(1920,969,20,50000)
border3 = new Base(500,0,50000,20)
base1 = new Walls(400,800,150,20)
base2 = new Walls(670,640,90,20)
base3 = new Walls(381,400,20,360)
base4 = new Walls(570,333,150,20)
base5 = new Walls(1010,420,150,20)
base6 = new Walls(1322,278,100,10)
base7 = new Walls(1769,121,300,60)
base8 = new Walls(1560,699,100,5)
  

//arrowKeys
up=createImg('./Assets/Up.png');
up.size(50,50);
up.position(1000,30);
up.mouseClicked(Up);

right=createImg('./Assets/Right.png')
right.size(50,50);
right.position(1050,30);
right.mouseClicked(Right)

left=createImg('./Assets/Left.png')
left.size(50,50);
left.position(950,30);
left.mouseClicked(Left)


}

function draw() {
  
  background("black");
  fill("#FFFFFF")

  text(mouseX + "," + mouseY, mouseX, mouseY)




  


  //show()
player.show()
enemy1.show();
enemy2.show();
enemy3.show();
border4.show();
border1.show();
border2.show();
border3.show();
base1.show();
base2.show();
base3.show();
base4.show();
base5.show();
base6.show();
base7.show();
base8.show();



  drawSprites();
  Engine.update(engine);
}
     


  function Up(){
    Matter.Body.applyForce(player.body,{x:0,y:0},{x:0,y:-0.01});
  }
  function Left(){
    Matter.Body.applyForce(player.body,{x:0,y:0},{x:-0.01,y:0});
  }
  function Right(){
    Matter.Body.applyForce(player.body,{x:0,y:0},{x:0.01,y:0});
  }
