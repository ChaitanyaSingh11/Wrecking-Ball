const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boxes1 = [];
var boxes2 = [];
var boxes3 = [];

function setup() {
    createCanvas(3000, 1200);
    engine = Engine.create();
    world = engine.world;

    ground = new fixed(700, 1000, 1400, 20);

    // tower at xpos = 900
    Loop(6, 900, boxes1);

    // tower at xpos = 800
    Loop(6, 800, boxes2);

    // tower at xpos = 700
    Loop(8, 700, boxes3);

    // creating the wrecking ball
    ball = new Ball(200, 200);
    rope = new Rope(ball.body, {
        x: 500,
        y: 50
    });

    Engine.run(engine);
}

function draw() {
    Engine.update(engine);
    background(51);

    ground.display();
    
    // displaying tower at xpos = 900
    Display(boxes1);

    // displaying tower at xpos =  800
    Display(boxes2);

    // displaying tower at xpos = 700
    Display(boxes3);

    // displaying the wrecking ball
    rope.display();
    ball.display();
}

function mouseDragged() {
    Body.setPosition(ball.body, {
        x: mouseX,
        y: mouseY
    });
}

function Loop(i, x, boxes) {
    for (var m = 1; m <= i; m++) {
        var box = new Box(x, 100);
        boxes.push(box);
    }
}

// function for displaying boxes
function Display(boxes) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
}
