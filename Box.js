class Box {
    constructor(x, y) {
        var options = {
            restitution: 0.05,
            density: 0.04,
            friction: 1
        };
        this.body = Bodies.rectangle(x, y, 70, 70, options);
        this.side = 70;
        World.add(world, this.body);
        angleMode(RADIANS);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("Yellow");
        stroke("Cyan");
        strokeWeight(3);
        rectMode(CENTER);
        rect(0, 0, this.side, this.side);
        pop();
    }
}