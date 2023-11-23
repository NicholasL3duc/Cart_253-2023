// Animation
// Handles the actual animation sequence of the program. A this.krab
// moves from left to right across the screen. When it reaches the right
// side the program will switch to the Ending state.

// NOTE: We extend the State class to guarantee this class will have
// the key methods that we call in the main program,
// draw() and keyPressed() in this case.

// NOTE: Even though at the moment Animation does *not* define a keyPressed()
// method, the fact it extends State means it *does* have one when it is called
// in the main program. This is a key benefit of extending State.
class Animation extends State {

    // Acts as the setup() of the state, called when the
    // state is created. Creates a this.krab object and sets its
    // velocity.
    constructor() {
      // We should always call the superclass constructor
      // even if it doesn't do anything right now. It might
      // later!
      super();
  
    this.krab = {
        x: 20,
        y: 20,
        w: 30,
        h: 10,
        size: 100,
        vx: 0,
        vy: 0,
        speed: 3.5,
      };

      this.waterMaze = {
        wall1: {
          x: 120,
          y: 0,
          w: 100,
          h: 460,
        },
        wall2: {
          x: 220,
          y: 360,
          w: 260,
          h: 100,
        },
        wall3: {
          x: 340,
          y: 130,
          w: 260,
          h: 110,
        },
        wall4: {
          x: 500,
          y: 0,
          w: 100,
          h: 200,
        },
        wall5: {
          x: 590,
          y: 360,
          w: 400,
          h: 100,
        },
        wall6: {
          x: 590,
          y: 360,
          w: 110,
          h: 500,
        },
        wall7: {
          x: 900,
          y: 360,
          w: 110,
          h: 300,
        },
        wall7: {
          x: 900,
          y: 360,
          w: 110,
          h: 300,
        },
      };
     this.crackingWall = {
        x: 900,
        y: 600,
        w: 110,
        h: 300,
      };
      
     this.sand = {
        bank1: {
          x: 1150,
          y: 300,
          size: 35,
        },
        bank2: {
          x: 1100,
          y: 600,
          size: 60,
        },
        bank3: {
          x: 1400,
          y: 700,
          size: 20,
        },
        bank4: {
          x: 1300,
          y: 500,
          size: 20,
        },
        bank5: {
          x: 1250,
          y: 800,
          size: 20,
        },
        bank6: {
          x: 1400,
          y: 300,
          size: 20,
        },
      };
     this.shark = {
        b1: {
          x: 700,
          y: 100,
          w: 20,
          h: 60,
          size: 20,
          vx: 0,
          vy: 4,
          speed: 4,
          angle: 0,
          distance: 100,
        },
        b2: {
          x: 850,
          y: 100,
          w: 20,
          h: 60,
          size: 20,
          vx: 0,
          vy: 3,
          speed: 3,
          angle: 0,
          distance: 100,
        },
        b3: {
          x: 1000,
          y: 100,
          w: 20,
          h: 60,
          size: 20,
          vx: 0,
          vy: 5,
          speed: 5,
          angle: 0,
          distance: 100,
        },
      };
     this.home = {
        x: undefined,
        y: 450,
        size: 150,
      };
      
     this.shell = {
        x: undefined,
        y: 0,
        size: 150,
        active: true,
      };
      
     this.octopus = {
        x: undefined,
        y: 0,
        size: 150,
        active: true,
      };
      
     this.babyKrab2 = {
        x: undefined,
        y: 0,
        size: 150,
        active: true,
      };
      
     this.mine = {
        x: undefined,
        y: 0,
        size: 150,
      };
      // Set the velocity of the krab to its speed.
      // NOTE: we cannot use this.krab.speed INSIDE the object
      // definition above. That's why this is on a separate line.
      this.krab.vx = this.krab.speed;
    }
  
    // draw()
    // Called every frame in the main script. Handles what the title
    // state needs to do each frame. It moves and displays the krab
    // and checks if it has reached the right hand side.
    draw() {
      // Always call the super() version of the method if there is one
      // just in case it does something important.
      super.draw();
  
      background(11, 139, 230);
  
      // Call the state's methods to make the animation work
      this.move();
      this.display();
      this.checkOverlap();
      this.checkOffscreen();

    }
  
    // move()
    // Updates the krab's position with its velocity
    move() {
      this.krab.x = this.krab.x + this.krab.vx;
      this.krab.y = this.krab.y + this.krab.vy;
      if (keyIsDown(87)) {
        //moving using the W key
        this.krab.vy = -this.krab.speed;
      } else if (keyIsDown(83)) {
        //moving using the W key
        this.krab.vy = this.krab.speed;
      } else {
        this.krab.vy = 0;
      }
    
      if (keyIsDown(68)) {
        this.krab.vx = this.krab.speed;
      } else if (keyIsDown(65)) {
        this.krab.vx = -this.krab.speed;
      } else {
        this.krab.vx = 0;
      }
      this.krab.x += this.krab.vx;
      this.krab.y += this.krab.vy;
    }
  
    // display()
    // Displays the this.krab as an ellipse on the canvas
    display() {
      push();
      ellipse(this.krab.x, this.krab.y, this.krab.size,this.krab.size);
      pop();
    
  
    
  
  
  // water walls
 fill(194, 178, 128);
  // wall1
  rect(
    this.waterMaze.wall1.x,
    this. waterMaze.wall1.y,
    this.waterMaze.wall1.w,
    this.waterMaze.wall1.h
  );
  // wall 2
  fill(194, 178, 128);
  rect(
    this.waterMaze.wall2.x,
    this.waterMaze.wall2.y,
    this.waterMaze.wall2.w,
    this.waterMaze.wall2.h
  );
  // // wall 3
  rect(
    this.waterMaze.wall3.x,
    this.waterMaze.wall3.y,
    this.waterMaze.wall3.w,
    this.waterMaze.wall3.h
  );
  // // // wall 4
  rect(
    this.waterMaze.wall4.x,
    this.waterMaze.wall4.y,
    this.waterMaze.wall4.w,
    this.waterMaze.wall4.h
  );
  // // wall 5
  rect(
    this.waterMaze.wall5.x,
    this.waterMaze.wall5.y,
    this.waterMaze.wall5.w,
    this.waterMaze.wall5.h
  );
  // // wall 6
  rect(
    this.waterMaze.wall6.x,
    this.waterMaze.wall6.y,
    this.waterMaze.wall6.w,
    this.waterMaze.wall6.h
  );
  // // wall 7
  rect(
    this.waterMaze.wall7.x,
    this.waterMaze.wall7.y,
    this.waterMaze.wall7.w,
    this.waterMaze.wall7.h
  );

  // cracking disapering wall
  push();
  rect(this.crackingWall.x, this.crackingWall.y, this.crackingWall.w, this.crackingWall.h);
  image(imgCrackS1, 860, 600, 200, 300);
  pop();
  // shark Run

  //   shark 1

  fill(140, 154, 163);
  noStroke();
  ellipse(this.shark.b1.x, this.shark.b1.y, 40, 70);

  // shark 2
  fill(140, 154, 163);
  noStroke();
  ellipse(this.shark.b2.x, this.shark.b2.y, 40, 70);
  // shark 3
  fill(140, 154, 163);
  noStroke();
  ellipse(this.shark.b3.x, this.shark.b3.y, 40, 70);

  // sand bank display

  fill(74, 79, 82);
  ellipse(this.sand.bank1.x, this.sand.bank1.y, 100, 100);
for(let bank in this.sand){
  ellipse(this.sand[bank].x,this.sand[bank].y, 100,100)
}

//   // sand 2
//   ellipse(this.sand.bank2.x, this.sand.bank2.y, 150, 150);
//   // sand 3
//   ellipse(this.sand.bank3.x, this.sand.bank3.y, 60, 60);
//   // sand 4
//   ellipse(this.sand.bank4.x, this.sand.bank4.y, 70, 70);
//   //   // sand 5
//   //   ellipse(this.sand.bank5.x, this.sand.bank5.y, 180, 180);
//   // sand 6
//   ellipse(this.sand.bank6.x, this.sand.bank6.y, 100, 100);
}

// check is crab touches borders
checkOffscreen() {
  // check if the krab is long gone
  if (this.krab.x < 0 || this.krab.x > width || this.krab.y < 0 || this.krab.y > height) {
    // loss ending 1
    currentState = new Ending();
  }
}
checkOverlap() {
  // getting the shell
 this.k = dist(this.krab.x, this.krab.y, this.shell.x, this.shell.y);
  if (this.k < this.krab.size / 4 + this.shell.size / 4) {
    this.shell.active = false;
    this.octopus.active = false;
  }
  // overlap for the this.octopus
  if (
    this.krab.x > this.octopus.x &&
    this.octopus.active &&
    this.krab.y > this.octopus.y &&
    this.octopus.active
  ) {
    state = "loss";
  }

  // getting the shell overlap

  if (this.shell.active);
  push();
  image(imgseaShell, this.shell.x, this.shell.y, this.shell.size, this.shell.size);
  pop();
  if (this.octopus.active) {
    push();
    image(imgOctopus, this.octopus.x, this.octopus.y, this.octopus.size, this.octopus.size);
    pop();
  }

  //over lap check for wall 1
  if (
    this.krab.x + this.krab.w > this.waterMaze.wall1.x &&
    this.krab.x < this.waterMaze.wall1.x + this.waterMaze.wall1.w &&
    this.krab.y + this.krab.h > this.waterMaze.wall1.y &&
    this.krab.y < this.waterMaze.wall1.y + this.waterMaze.wall1.h
  ) {
    state = "loss";
  }
  //over lap check for wall 2
  if (
    this.krab.x + this.krab.w > this.waterMaze.wall2.x &&
    this.krab.x < this.waterMaze.wall2.x + this.waterMaze.wall2.w &&
    this.krab.y + this.krab.h > this.waterMaze.wall2.y &&
    this.krab.y < this.waterMaze.wall2.y + this.waterMaze.wall2.h
  ) {
    state = "loss";
  }
  //over lap check for wall 3
  if (
    this.krab.x + this.krab.w > this.waterMaze.wall3.x &&
    this.krab.x < this.waterMaze.wall3.x + this.waterMaze.wall3.w &&
    this.krab.y + this.krab.h > this.waterMaze.wall3.y &&
    this.krab.y < this.waterMaze.wall3.y + this.waterMaze.wall3.h
  ) {
    state = "loss";
  }
  //over lap check for wall 4
  if (
    this.krab.x + this.krab.w > this.waterMaze.wall4.x &&
    this.krab.x < this.waterMaze.wall4.x + this.waterMaze.wall4.w &&
    this.krab.y + this.krab.h > this.waterMaze.wall4.y &&
    this.krab.y < this.waterMaze.wall4.y + this.waterMaze.wall4.h
  ) {
    state = "loss";
  }
  //over lap check for wall 5
  if (
    this.krab.x + this.krab.w > this.waterMaze.wall5.x &&
    this.krab.x < this.waterMaze.wall5.x + this.waterMaze.wall5.w &&
    this.krab.y + this.krab.h > this.waterMaze.wall5.y &&
    this.krab.y < this.waterMaze.wall5.y + this.waterMaze.wall5.h
  ) {
    state = "loss";
  }
  //over lap check for wall 6
  //   if (
  //     this.krab.x + this.krab.w > this.waterMaze.wall6.x &&
  //     this.krab.x < this.waterMaze.wall6.x + this.waterMaze.wall6.w &&
  //     this.krab.y + this.krab.h > this.waterMaze.wall6.y &&
  //     this.krab.y < this.waterMaze.wall6.y + this.waterMaze.wall6.h
  //   ) {
  //     state = "loss";
  //   }
  //over lap check for wall 7
  if (
    this.krab.x + this.krab.w > this.waterMaze.wall7.x &&
    this.krab.x < this.waterMaze.wall7.x + this.waterMaze.wall7.w &&
    this.krab.y + this.krab.h > this.waterMaze.wall7.y &&
    this.krab.y < this.waterMaze.wall7.y + this.waterMaze.wall7.h
  ) {
    state = "loss";
  }
  for(let bank in this.sand){
   this.d = dist(this.krab.x,this.krab.y, this.sand[bank].x, this.sand[bank].y)
    if (this.d < this.krab.size / 2 + this.sand[bank].size /2)
    state = "loss";
  }
  // // over lap check for sand 1
  //this.d1 = dist(krab.x, krab.y, this.sand.bank1.x, this.sand.bank1.y);
  // if (d1 < krab.size / 2 + this.sand.bank1.size / 2) {
  //   state = "loss";
  // }
  // // over lap check for sand 2
  //this.d2 = dist(krab.x, krab.y, this.sand.bank2.x, this.sand.bank2.y);
  // if (d2 < krab.size / 2 + this.sand.bank2.size / 2) {
  //   state = "loss";
  // }
  // // over lap check for sand 3
  //this.d3 = dist(krab.x, krab.y, this.sand.bank3.x, this.sand.bank3.y);
  // if (d3 < krab.size / 2 + this.sand.bank3.size / 2) {
  //   state = "loss";
  // }
  // // over lap check for sand 4
  //this.d4 = dist(krab.x, krab.y, sand.bank4.x, sand.bank4.y);
  // if (d4 < krab.size / 2 + sand.bank4.size / 2) {
  //   state = "loss";
  // }
  // // over lap check for sand 5
  //this.d5 = dist(krab.x, krab.y, sand.bank5.x, sand.bank5.y);
  // if (d5 < krab.size / 2 + sand.bank5.size / 2) {
  //   state = "loss";
  // }
  // // over lap check for sand 6
  //this.d6 = dist(krab.x, krab.y, sand.bank6.x, sand.bank6.y);
  // if (d6 < krab.size / 2 + sand.bank6.size / 2) {
  //   state = "loss";
  // }
  //over lap check for sharks

  // overlap shark 1
 this.s1 = dist(this.krab.x, this.krab.y, this.shark.b1.x, this.shark.b1.y);
  if (this.s1 < this.krab.size / 2 + this.shark.b1.size / 2) {
    state = "loss";
  }
  // overlap shark 2
 this.s2 = dist(this.krab.x, this.krab.y, this.shark.b2.x, this.shark.b2.y);
  if (this.s2 < this.krab.size / 2 + this.shark.b2.size / 2) {
    state = "loss";
  }
  // overlap this.shark 3
 this.s3 = dist(this.krab.x, this.krab.y, this.shark.b3.x, this.shark.b3.y);
  if (this.s3 < this.krab.size / 2 + this.shark.b3.size / 2) {
    state = "loss";
  }
}
// movements for the sharks
movement() {
  this.shark.b1.y = this.shark.b1.y + this.shark.b1.vy;

  this.shark.b2.y = this.shark.b2.y + this.shark.b2.vy;
  this.shark.b3.y = this.shark.b3.y + this.shark.b3.vy;
}

checkOverlapshark() {
  // shark 1 bounce

  if (this.shark.b1.y < 0 || this.shark.b1.y > 360) {
    this.shark.b1.vy *= -1;
  }

  // shark 2 bounce

  if (this.shark.b2.y < 0 || this.shark.b2.y > 360) {
    this.shark.b2.vy *= -1;
  }

  // shark 3 bounce

  if (this.shark.b3.y < 0 || this.shark.b3.y > 360) {
    this.shark.b3.vy *= -1;
  }
}
// the ending goal of the cave
house(){
 this.h1 = dist(this.krab.x, this.krab.y, home.x, home.y);
  if (this.h1 < home.size / 2 + this.krab.size / 2) {
    state = "stage2";
  }
}
}