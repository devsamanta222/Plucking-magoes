class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        
        this.pointB=pointB
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    attach(){
        this.body.bodyA=body;
    }
    fly(){
        this.body.bodyA=null;
    }

    display(){
        var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }


    
}