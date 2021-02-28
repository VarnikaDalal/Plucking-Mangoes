class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 10
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            strokeWeight(4);
            stroke(0);
            var bodyA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);

        }
    }
    
    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }

}
