

class Chain{
    constructor(bodyA ,bodyB){
var option={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:2,
    length:10
}
this.chain=Constraint.create(option)
World.add(world,this.chain)
    }
    display(){
var pointA=this.chain.bodyA.position
var pointB=this.chain.bodyB.position
push()
strokeWeight(10)
stroke("green")
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
    }
}