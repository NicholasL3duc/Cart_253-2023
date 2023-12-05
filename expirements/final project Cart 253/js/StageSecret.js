class StageSecret extends State {
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
  }
  // draw()
  // Called every frame in the main script. Handles what the title
  // state needs to do each frame. It moves and displays the krab
  // and checks if it has reached the right hand side.
  draw() {
    // Always call the super() version of the method if there is one
    // just in case it does something important.
    super.draw();

    background(imgSecretBack);

    // Call the state's methods to make the animation work
    this.move();
    this.display();
    this.checkEnding();
    this.checkOverlap();
    this.babyKrab();
    this.octopusStage();
    this.questions();
    // this.door();
  }
  move() {
    this.krab.x = this.krab.x + this.krab.vx;
    this.krab.y = this.krab.y + this.krab.vy;
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

  display() {
    // user krab
    push();
    image(
      imgDancingKrab,
      this.krab.x,
      this.krab.y,
      this.krab.size,
      this.krab.size
    );
    pop();
    push();
    image(imgClappingPenguin, 750, 350, 100,100);
    pop();
    // breakdancing gif
    push();
    image(imgDancingPenguinBlack, 700, 500,100,100);
    pop();
    // blue dancing
    push();
    image(imgDancingPenguin, 500, 500,150,150);
    pop();
    // dj
    push();
    // image(imgDjPenguin, 500, 100,);
    pop();
  }
  checkEnding() {}
  checkOverlap() {}

  babyKrab() {
    // baby 1
  }
  octopusStage() {}
  questions() {}
}
