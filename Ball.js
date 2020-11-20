class Ball {
    constructor(x, y) {
        var options = {
            density: 1,
            frictionAir: 0.005
        };
        // this.body = Bodies.rectangle(x, y, 80, 80, options);
        this.body = Bodies.circle(x,y,80,options);
        this.radius = 80;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("Red");
        ellipse(0, 0, this.radius * 2, this.radius * 2);
        pop();
    }
}