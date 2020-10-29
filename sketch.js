const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, block1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    block1 = new block(810, 350);
    thin1 = new thin(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    block3 = new block(810, 220);

    thin3 =  new thin(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    thin4 = new thin(760,120,150, PI/7);
    thin5 = new thin(870,120,150, -PI/7);

    ball = new ball(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.thin(box2.body.position.x);
    console.thin(box2.body.position.y);
    console.thin(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    block1.display();
    thin1.display();

    box3.display();
    box4.display();
    block3.display();
    thin3.display();

    box5.display();
    thin4.display();
    thin5.display();

    bird.display();
}