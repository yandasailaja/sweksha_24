class Dustbin {
    constructor(x, y)
 {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.leftbody = Bodies.rectangle(x-100+10+30, y-70-10-70,20,100, options);
      this.rightbody = Bodies.rectangle(x+100-40,y-70-10-70, 20, 100, options);
      this.centerbody = Bodies.rectangle(1000,y-90,100,20, options);
      
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.centerbody);
    }
    display(){
     // var pos =this.body.position;
     
      push();
      rectMode(CENTER);
      
      fill("green");
      rect(this.leftbody.position.x,this.leftbody.position.y,20,100);
      rect(this.rightbody.position.x,this.rightbody.position.y,20,100);
      rect(this.centerbody.position.x,this.centerbody.position.y,100,20);

      pop();
    }
  };
  