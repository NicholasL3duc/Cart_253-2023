// Animation
// Handles the actual animation sequence of the program. A krab
// moves from left to right across the screen. When it reaches the right
// side the program will switch to the Ending state.

// NOTE: We extend the State class to guarantee this class will have
// the key methods that we call in the main program,
// draw() and keyPressed() in this case.

// NOTE: Even though at the moment Animation does *not* define a keyPressed()
// method, the fact it extends State means it *does* have one when it is called
// in the main program. This is a key benefit of extending State.
class Stage2 extends State {
  // Acts as the setup() of the state, called when the
  // state is created. Creates a krab object and sets its
  // velocity.
  constructor() {
    // We should always call the superclass constructor
    // even if it doesn't do anything right now. It might
    // later!
    super();

    // Create a krab property with our moving object in it.

    this.krab = {
      x: 100,
      y: 250,
      w: 30,
      h: 10,
      size: 100,
      vx: 0,
      vy: 0,
      speed: 2.5, //3.5 set it back
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
    this.colorWall = {
      wall1: {
        x: 400,
        y: 550,
        w: 50,
        h: 300,
      },
      wall2: {
        x: 400,
        y: 250,
        w: 50,
        h: 300,
      },
      wall3: {
        x: 400,
        y: 0,
        w: 50,
        h: 300,
      },
      wall4: {
        x: 900,
        y: 550,
        w: 50,
        h: 300,
      },
      wall5: {
        x: 900,
        y: 250,
        w: 50,
        h: 300,
      },
      wall6: {
        x: 900,
        y: 0,
        w: 50,
        h: 300,
      },
    };
    this.startWall = {
      wall1: {
        x: 200,
        y: 0,
        w: 700,
        h: 50,
      },
      wall2: {
        x: 1150,
        y: 150,
        w: 700,
        h: 50,
      },
    };
    this.home = {
      x: 1000,
      y: 500,
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

    background(imgS2Backdrop);

    // Call the state's methods to make the animation work
    this.move();
    this.display();
    this.checkEnding();
    this.checkOverlap();
    this.babyKrab();
  
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
  // Displays the krab as an ellipse on the canvas

  // checkEnding()
  // Checks if the krab has moved past the right hand side
  // of the canvas and changes to the Ending state if it has.
  checkEnding() {
    this.h1 = dist(this.krab.x, this.krab.y, this.home.x, this.home.y);
    if (this.h1 < this.home.size / 2 + this.krab.size / 2) {
      currentState = new Stage3();
  
    }
  }

  display() {
    push();
    image(imgHouse, this.home.x, this.home.y, this.home.size, this.home.size);
    pop();

    // starting wall
    // push();
    // noStroke();
    // fill(224, 222, 159);
    // rect(
    //   this.startWall.wall1.x,
    //   this.startWall.wall1.y,
    //   this.startWall.wall1.h,
    //   this.startWall.wall1.w
    // );
    // pop();
    // // ending wall
    // push();
    // noStroke();
    // fill(224, 222, 159);
    // rect(
    //   this.startWall.wall2.x,
    //   this.startWall.wall2.y,
    //   this.startWall.wall2.h,
    //   this.startWall.wall2.w
    // );
    // pop();
    // wall 1 display
    push();
    noStroke();
    fill(159, 222, 100);
    rect(
      this.colorWall.wall1.x,
      this.colorWall.wall1.y,
      this.colorWall.wall1.w,
      this.colorWall.wall1.h
    );
    pop();
    // wall 2 display
    push();
    noStroke();
    fill(237, 92, 228);
    rect(
      this.colorWall.wall2.x,
      this.colorWall.wall2.y,
      this.colorWall.wall2.w,
      this.colorWall.wall2.h
    );
    pop();
    // wall 3 display
    push();
    noStroke();
    fill(95, 81, 240);
    rect(
      this.colorWall.wall3.x,
      this.colorWall.wall3.y,
      this.colorWall.wall3.w,
      this.colorWall.wall3.h
    );
    pop();

    // wall 4 display
    push();
    noStroke();
    fill(95, 81, 240);
    rect(
      this.colorWall.wall4.x,
      this.colorWall.wall4.y,
      this.colorWall.wall4.w,
      this.colorWall.wall4.h
    );
    pop();

    // wall 5 display
    push();
    noStroke();
    fill(159, 222, 100);
    rect(
      this.colorWall.wall5.x,
      this.colorWall.wall5.y,
      this.colorWall.wall5.w,
      this.colorWall.wall5.h
    );
    pop();

    // wall 6 display
    push();
    noStroke();
    fill(237, 92, 228);
    rect(
      this.colorWall.wall6.x,
      this.colorWall.wall6.y,
      this.colorWall.wall6.w,
      this.colorWall.wall6.h
    );
    pop();
    // krab display
    image(imgkrab, this.krab.x, this.krab.y, this.krab.size, this.krab.size);
  }
  checkOverlap() {
    // the lose colours

    // overlap for 1st green and pink
    // green
    if (
      this.krab.x + this.krab.size > this.colorWall.wall5.x &&
      this.krab.x < this.colorWall.wall5.x + this.colorWall.wall5.w &&
      this.krab.y + this.krab.h > this.colorWall.wall5.y &&
      this.krab.y < this.colorWall.wall5.y + this.colorWall.wall5.h
    ) {
      currentState = new Ending();
    }
    // pink
    if (
      this.krab.x + this.krab.w > this.colorWall.wall6.x &&
      this.krab.x < this.colorWall.wall6.x + this.colorWall.wall6.w &&
      this.krab.y + this.krab.h > this.colorWall.wall6.y &&
      this.krab.y < this.colorWall.wall6.y + this.colorWall.wall6.h
    ) {
      currentState = new Ending();
    }

    // over lap for the 2nd green and purple

    // purple
    if (
      this.krab.x + this.krab.w > this.colorWall.wall3.x &&
      this.krab.x < this.colorWall.wall3.x + this.colorWall.wall3.w &&
      this.krab.y + this.krab.h > this.colorWall.wall3.y &&
      this.krab.y < this.colorWall.wall3.y + this.colorWall.wall3.h
    ) {
      currentState = new Ending();
    }
    // green
    if (
      this.krab.x + this.krab.w > this.colorWall.wall1.x &&
      this.krab.x < this.colorWall.wall1.x + this.colorWall.wall1.w &&
      this.krab.y + this.krab.h > this.colorWall.wall1.y &&
      this.krab.y < this.colorWall.wall1.y + this.colorWall.wall1.h
    ) {
      currentState = new Ending();
    }
  }
  babyKrab() {
    let b2 = dist(this.krab.x, this.krab.y, this.babyKrab2.x, this.babyKrab2.y);
    if (b2 < this.babyKrab2.size / 2 + this.krab.size / 2) {
      currentState = new Ending();
    }
  }
  // the ending goal of the cave

// NO keyPressed() needed down here, it is handled by the State version
}
