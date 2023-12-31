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
    // Krab object
    this.krab = {
      x: 20,
      y: 20,
      size: 60,
      vx: 0,
      vy: 0,
      speed: 3.5, //3.5 set it back
    };
    // wall objects
    this.waterMaze = [
      {
        x: 120,
        y: 0,
        w: 70,
        h: 460,
      },
      {
        x: 190,
        y: 390,
        w: 200,
        h: 70,
      },
      {
        x: 340,
        y: 130,
        w: 200,
        h: 70,
      },
      {
        x: 500,
        y: 0,
        w: 100,
        h: 200,
      },
      {
        x: 590,
        y: 360,
        w: 400,
        h: 100,
      },
      {
        x: 590,
        y: 360,
        w: 110,
        h: 500,
      },
      {
        x: 900,
        y: 360,
        w: 110,
        h: 300,
      },
    ];
    // the cracking wall object
    this.crackingWall = {
      x: 900,
      y: 600,
      w: 110,
      h: 300,
      active: true,
    };
    // grey cirlcles object
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
      // shark objects
    };
    this.shark = {
      b1: {
        x: 700,
        y: 100,
        w: 10,
        h: 20,
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
        w: 10,
        h: 20,
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
        w: 10,
        h: 20,
        size: 20,
        vx: 0,
        vy: 5,
        speed: 5,
        angle: 0,
        distance: 100,
      },
      // home object
    };
    this.home = {
      x: 730,
      y: 460,
      size: 150,
    };
    // shell object
    this.shell = {
      x: 400,
      y: 20,
      size: 120,
      active: true,
    };
    // crack object
    this.crack = {
      x: 890,
      y: 600,
      w: 200,
      h: 300,
      size: 90,
      active: true,
    };
    // mine object
    this.mine = {
      x: undefined,
      y: 0,
      size: 150,
    };
    // coral object
    this.coral = {
      x: -50,
      y: 350,
      size: 600,
    };
    // sign object
    this.sign = {
      x: 220,
      y: 650,
      size: 170,
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

    background(imgBackdrop);

    // Call the state's methods to make the animation work
    this.move();
    this.display();
    this.checkOverlap();
    this.checkOffscreen();
    this.movement();
    this.checkOverlapshark();
    this.house();
  }

  // move()
  // Updates the krab's position with its velocity
  move() {
    if (keyIsDown(38)) {
      //moving using the up arrow key
      this.krab.vy = -this.krab.speed;
    } else if (keyIsDown(40)) {
      //moving using the down arrow key
      this.krab.vy = this.krab.speed;
    } else {
      this.krab.vy = 0;
    }

    if (keyIsDown(39)) {
      // moving using the right arrow key
      this.krab.vx = this.krab.speed;
    } else if (keyIsDown(37)) {
      // moving using the left arrow key
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
    image(imgkrab, this.krab.x, this.krab.y, this.krab.size, this.krab.size);
    pop();
    // Displays the this.home
    push();
    image(imgHouse, this.home.x, this.home.y, this.home.size, this.home.size);
    pop();
    // displays the coral
    push();
    image(
      imgCoral,
      this.coral.x,
      this.coral.y,
      this.coral.size,
      this.coral.size
    );
    pop();
    // Water Walls display
    for (let wall in this.waterMaze) {
      push();
      fill(194, 178, 128);
      rect(
        this.waterMaze[wall].x,
        this.waterMaze[wall].y,
        this.waterMaze[wall].w,
        this.waterMaze[wall].h
      );
      pop();
    }

    //   shark 1
    push();
    fill(140, 154, 163);
    noStroke();
    ellipse(this.shark.b1.x, this.shark.b1.y, 40, 70);
    pop();
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
    for (let bank in this.sand) {
      ellipse(this.sand[bank].x, this.sand[bank].y, 100, 100);
    }
    // purple hint
    push();
    fill(95, 81, 240);
    rect(600, 500, 100, 50);
    pop();
    // pink hint
    push();
    fill(237, 92, 228);
    rect(600, 600, 100, 50);
    pop();
    // welcome sign
    push();
    image(imgSign, this.sign.x, this.sign.y, this.sign.size, this.sign.size);
    textSize(20);
    fill(41, 30, 199);
    textAlign(this.sign.x, this.sign.y, this.sign.size, this.sign.size);
    text("Touch The Shell To Get Past The Crack", 300, 690, 150); //this.sign.x,this.sign.y,this.sign.size,this.sign.size,
    pop();
  }

  // check is crab touches borders
  checkOffscreen() {
    // check if the krab is long gone
    if (
      this.krab.x < 0 ||
      this.krab.x > width ||
      this.krab.y < 0 ||
      this.krab.y > height
    ) {
      // does nothing, leaving it here incase i need it
    }
  }
  checkOverlap(wall) {
    // bouncing off the walls
    for (let i = 0; i < this.waterMaze.length; i++) {
      if (
        this.krab.x + this.krab.size > this.waterMaze[i].x &&
        this.krab.x < this.waterMaze[i].x + this.waterMaze[i].w &&
        this.krab.y + this.krab.size > this.waterMaze[i].y &&
        this.krab.y < this.waterMaze[i].y + this.waterMaze[i].h
      ) {
        this.krab.x -= this.krab.vx;
        this.krab.y -= this.krab.vy;
      }
    }

    // getting the shell
    this.k = dist(this.krab.x, this.krab.y, this.shell.x, this.shell.y);
    if (this.k < this.krab.size / 2 + this.shell.size / 2) {
      this.shell = false;
      this.crack.active = false;
      this.crackingWall.active = false;
    }
    // overlap for the this.crack
    // if (
    //   this.krab.x > this.crack.x &&
    //   this.crack.active &&
    //   this.krab.y > this.crack.y &&
    //   this.crack.active
    // ) {
    //   currentState = new Ending();
    // }

    // kept  ^^^^ incase i want it

    // getting the shell overlap

    if (this.shell.active);
    push();
    image(
      imgseaShell,
      this.shell.x,
      this.shell.y,
      this.shell.size,
      this.shell.size
    );
    pop();
    if (this.crackingWall.active) push();

    pop();
    if (this.crack.active) {
      push();
      image(
        imgCrackS1,
        this.crack.x,
        this.crack.y,
        this.crack.w,
        this.crack.h,
        this.crack.size
      );
      pop();
    }

    //over lap check for wall 1

    //over lap check for sharks

    // overlap shark 1
    this.s1 = dist(this.krab.x, this.krab.y, this.shark.b1.x, this.shark.b1.y);
    if (this.s1 < this.krab.size / 2 + this.shark.b1.size / 2) {
      currentState = new Ending();
    }
    // overlap shark 2
    this.s2 = dist(this.krab.x, this.krab.y, this.shark.b2.x, this.shark.b2.y);
    if (this.s2 < this.krab.size / 2 + this.shark.b2.size / 2) {
      currentState = new Ending();
    }
    // overlap this.shark 3
    this.s3 = dist(this.krab.x, this.krab.y, this.shark.b3.x, this.shark.b3.y);
    if (this.s3 < this.krab.size / 2 + this.shark.b3.size / 2) {
      currentState = new Ending();
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
  house() {
    this.h1 = dist(this.krab.x, this.krab.y, this.home.x, this.home.y);
    if (this.h1 < this.home.size / 2 + this.krab.size / 2) {
      currentState = new Stage2();
    }
  }
}
