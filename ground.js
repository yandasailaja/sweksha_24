class Ground{
    constructor(x,y)
     {
        var options = { 
            'isStatic': true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
    }
   

    this.ground = Bodies.rectangle(x, y, 1200, 20, options);
    World.add(world, this.ground);
  }
  display(){
   // var pos =this.body.position;
   
    push();
    rectMode(CENTER);

    fill("brown");
    rect(this.ground.position.x,this.ground.position.y,1200,20)
    pop();
  }
}