class fixed {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true,
            friction: 1
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("Brown");
        rect(pos.x, pos.y, this.w, this.h)
        pop();
    }
}