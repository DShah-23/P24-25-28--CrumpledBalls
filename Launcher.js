// Slingshot class
class Launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.Launcher = Constraint.create(options);
        World.add(world, this.Launcher)
    }

    fly() {
        this.Launcher.bodyA = null;
    }

    display() {

        if (this.Launcher.bodyA) {
            var posA = this.Launcher.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}