class Chain {
    constructor(bodyA,bodyB){

        //the options for the chain
        var Options = {
            bodyA  : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }

        //created chain from the Constraint class of Matter
        this.chain = Constraint.create(Options);
        //Added the chain to the main world
        World.add(world,this.chain);
    }

    display() {
        //namespacing
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        //to draw a link between the two constrained bodies
        strokeWeight(4)
        line (pointA.x,pointA.y,pointB.x,pointB.y);

    }
}