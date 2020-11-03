const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, poly1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0,
        density : 0.8
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    poly1 = Bodies.polygon(100, 100, 5, 20, ball_options);
    World.add(world, poly1);

    console.log(poly1);
}

function draw(){
    background(0);
    Engine.update(engine);

    fill('white');

    polygon(poly1.position.x, poly1.position.y, 5, 20);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}

function polygon(x, y, npoints, radius ) {
  let angle = 360 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}