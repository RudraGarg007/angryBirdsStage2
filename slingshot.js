class SlingShot{
    constructor(A,pointB,stiffness, length) {
         var option1 = {
          bodyA : A,
          pointB : { x:pointB.x+20, y:pointB.y },
          stiffness : stiffness,
          length : length
        }
        var option2 = {
          bodyA : A,
          pointB : { x:pointB.x-20, y:pointB.y },
          stiffness : stiffness,
          length : length
        }
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        this.chain1 = Constraint.create(option1)
        this.chain2 = Constraint.create(option2)
        World.add(world, this.chain1)
        World.add(world, this.chain2)
      }
      display(){
      push();
      var pointBee = this.chain1.pointB
      var pointBees = this.chain2.pointB
      image(this.sling1,pointBee.x-30,pointBee.y+(-24),50,150)
      image(this.sling2,pointBee.x-60,pointBee.y+(-24),44,85)
       stroke(48, 22, 8);
      if (this.chain1.bodyA != null){
         strokeWeight(16);
        line(this.chain1.bodyA.position.x+27, this.chain1.bodyA.position.y, this.chain1.pointB.x, this .chain1.pointB.y);
      }                                    
      if (this.chain2.bodyA != null){       
        strokeWeight(18);                  
        line(this.chain2.bodyA.position.x-20, this.chain2.bodyA.position.y, this.chain2.pointB.x, this .chain2.pointB.y);
        image(this.sling3,this.chain2.bodyA.position.x-32,this.chain2.bodyA.position.y-10,30,20)
      }

      pop();
    }
     //fly(){

     //}
  }
