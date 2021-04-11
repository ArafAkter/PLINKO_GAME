class Bird {
  constructor(x, y) {
    var options = {
'restitution' : 0.25,
'friction' : 0.025,
'density' : 5
}
var particles = []
    this.body = Bodies.circle(x, y, 10, options);
    this.width = 20;
    this.height = 20;
    this.colour = color(random(0,255),random(0,255),random(0,255))
    World.add(world, this.body);

    

    
  }
  display(){
    var pos =this.body.position;
    var particles = []

   
 

    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.colour);
  //  stroke("#f5a7099e")
  //  strokeWeight(12)
    ellipse(0, 0, this.width , this.height );
  


   //regularPolygon(0, 0, 14, 50);
    pop();
  }
};

