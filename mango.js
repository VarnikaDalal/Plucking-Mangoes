class Mango {
    constructor(x, y, r) 
    {
      var options = {
        'isStatic': true, 
        'restitution':0,
        'friction':1
      }
      this.x = x;
      this.y = y;      
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      imageMode(CENTER); 
      image(this.image, 0,0,this.r, this.r)

      pop();
      
    }
  };
  