"use strict";
class Bee {
  // constructor() sets up our starting properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    // If the bee reaches this min, then it dies
    this.minSize = 10;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    // the growth of the bee if it polinates
    this.growthRate = 0.1;
    // how much the bee will get smaller per frame
    this.shrinkRate = 0.05;
    // How the bee will change directions
    this.jitteriness = 0.1;
    // This starts the bee alive
    this.alive = true;
  }

  // shrink() shrinks the bee down to death
  shrink() {
    // Shrink by taking about the size from shrinkrate
    this.size = this.size - this.shrinkRate;
    // to see if the bee is smaller than the shrink size
    if (this.size < this.minSize) {
      // If so, we're dead (loved this comment so i chose to write it excatly like so)
      this.alive = false;
    }
  }

  // everything that pollinate would interact with is under here
  tryToPollinate(flower) {
    // the distance bettwen the bee and the flower
    let d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.size / 2 + flower.size / 2) {
      // this allows the bee to grow
      this.grow();
      flower.polinate();
    }
  }
  // this segment gets the bee size up to a maximum
  grow() {
    // increasing by a set amount
    this.size = this.size + this.growthRate;
    // constrain to a maximum growth
    this.size = constrain(this.size, 0, this.maxSize);
  }

  // move() moves the bee by potentially changing direction and then changing position based on velocity

  move() {
    // First check if we should change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // Constrain to the canvas (guess it's a walled garden!)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // display() draws our bee onto the canvas
  display() {
    push();
    // Wings on either side
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    // Body
    push();
    fill(225, 225, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    // Eyes
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x - this.size / 10, this.y, this.size / 10);
    ellipse(this.x + this.size / 10, this.y, this.size / 10);
    pop();
  }
}
