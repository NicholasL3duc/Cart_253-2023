"use strict";

class FLower {
  constructor() {
    // the flower postion and size information
    (this.x = random(0, width)),
      (this.y = random(0, height)),
      (this.size = 50),
      (this.stemLength = 75),
      (this.stemTickness = 10),
      (this.petalThickness = 10),
      // the flower's color information
      (this.stemColor = {
        r: 65,
        g: 112,
        b: 80,
      }),
      (this.petalColor = {
        r: 122,
        g: 53,
        b: 70,
      }),
      (this.centerColor = {
        r: 50,
        g: 0,
        b: 0,
      });
  }
}
