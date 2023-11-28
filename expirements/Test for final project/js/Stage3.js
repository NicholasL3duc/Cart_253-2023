class Stage3 extends State {
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
      x: 1200,
      y: 650,
      w: 30,
      h: 10,
      size: 100,
      vx: 0,
      vy: 0,
      speed: 2.5, //3.5 set it back
    };

    this.octopus = {
      x: 400,
      y: 400,
      w: 70,
      h: 100,
      size: 300,
    };
    this.octopusMad = {
      x: 400,
      y: 400,
      w: 70,
      h: 100,
      size: 200,
    };
    this.octopusDead = {
      x: 400,
      y: 400,
      w: 70,
      h: 100,
      size: 200,
    };
    this.baby = {
      // place holder numbers
      x: 200,
      y: 650,
      w: 70,
      h: 100,
      size: 200,
    };
    this.baby2 = {
      // place holder numbers
      x: 100,
      y: 650,
      w: 100,
      h: 130,
      size: 200,
    };
    this.home = {
      x: 100,
      y: 50,
      size: 150,
    };
  }
  // draw()
  // Called every frame in the main script. Handles what the title
  // state needs to do each frame. It moves and displays the krab
  // and checks if it has reached the right hand side.
  draw() {
    // Always call the super() version of the method if there is one
    // just in case it does something important.
    super.draw();

    background(imgS3Backdrop);

    // Call the state's methods to make the animation work
    this.move();
    this.display();
    this.checkEnding();
    this.checkOverlap();
    this.babyKrab();
    this.octopusStage();
    this.questions();
    this.door();
  }

  move() {
    this.krab.x = this.krab.x + this.krab.vx;

    if (keyIsDown(68)) {
      this.krab.vx = this.krab.speed;
    } else if (keyIsDown(65)) {
      this.krab.vx = -this.krab.speed;
    } else {
      this.krab.vx = 0;
    }
    this.krab.x += this.krab.vx;
  }

  display() {
    push();
    image(imgkrab, this.krab.x, this.krab.y, this.krab.size, this.krab.size);
    pop();

    // baby 1
    push();
    image(
      imgBabyHat,
      this.baby.x,
      this.baby.y,
      this.baby.w,
      this.baby.h,
    
    );
    pop();
//baby 2
push();
image(
  imgBabykrab,
  this.baby2.x,
  this.baby2.y,
  this.baby2.w,
  this.baby2.h,

);
pop();

  }
  checkEnding() { if (
    this.krab.x + this.krab.w > this.baby.x &&
    this.krab.x < this.baby.x + this.baby.w &&
    this.krab.y + this.krab.h > this.baby.y &&
    this.krab.y < this.baby.y + this.baby.h
  ) {
    currentState = new GoodEnding();
  }




}
  checkOverlap() {}

  babyKrab() {
    // baby 1
  }
  octopusStage() {
    push();
    image(
      imgOctopus,
      this.octopus.x,
      this.octopus.y,
      this.octopus.size,
      this.octopus.size
    );
    pop();
  }
  questions() {
    // question #1
  
  }
  door() {
    this.d1 = dist(this.krab.x, this.krab.y, this.home.x, this.home.y);
    if (this.d1 < this.home.size / 2 + this.krab.size / 2) {
      currentState = new GoodEnding();
    }
  }
}
