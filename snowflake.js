class Snowflake {
    constructor(x, y, r) {
      var options = { 
        density: 1, 
        
        restitution: 1.2
      }
      this.r=r;
      this.image=loadImage("snow5.webp");
      this.body = Bodies.circle(x, y, this.r, options);
     
      
      World.add(world, this.body);
      
    }
    display() {
        
        var angle = this.body.angle;
        push();
        
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        
        pop();
      }
    }