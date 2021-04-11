class Ground {
  constructor(x, y) {
    var options = {
      isStatic: true
  }
    this.body = Bodies.circle(x, y, 10, options);
    this.width = 20;
    this.height = 20;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("#0ef4f879");
  //  stroke("#f5a7099e")
  //  strokeWeight(12)
    ellipse(0, 0, this.width , this.height );
   //regularPolygon(0, 0, 14, 50);
    pop();
  }
};

