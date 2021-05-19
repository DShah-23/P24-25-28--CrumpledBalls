class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("Images/Paper.png");

        World.add(world, this.body);
    }

    display() {
        fill("yellow")
        imageMode(CENTER)
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.radius, 70, 70);
    }
}