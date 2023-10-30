"use strict";

class Flower {
  constructor(x, y, size, stemLength, petalColor) {
    // the flower postion and size information
    this.x = x;
      this.y = y;
      this.size = size;
      this.maxSize = size;
    this.stemLength = stemLength;
      this.stemThickness = 10;
      this.petalThickness = 10;
      this.maxPetalThickness = 10;
      // the flower's color information
      this.stemColor = {
        r: 65,
        g: 112,
        b: 80,
      },
      this.petalColor = petalColor;
    this.centreColor = {
      r: 50,
      g: 0,
      b: 0,
    };
    // tracks if the flower is alive
    this.alive = true;
  }
  // this shrinks the flower until death
  shrink() {
    // the amount of shrinkage
    let shrinkage = random(0, 0.1);

    // reduces the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness - shrinkage / 10;
    // reduces the center of the flower
    this.size = this.size - shrinkage;

    // if the propreties go below zero, it dies
    if (this.petalThickness <= 0 || this.size <= 0) {
      this.alive = false;
    }
  }
  pollinate() {
    // Choose a random amount to grow
    let growth = random(0, 0.5);
    // Increase the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness + growth / 10;
    // Increase the centre of the flower
    this.size = this.size + growth;

    // Constrain the elements
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    this.size = constrain(this.size, 0, this.maxSize);
  }

  display() {
    push();
    // Set the stroke weight for the petals and the stem
 strokeWeight(this.stemThickness);
    // Draw a line for the stem
    stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
    line(this.x, this.y, this.x, this.y + this.stemLength);
    // Draw a circle with a heavy outline for the flower
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
