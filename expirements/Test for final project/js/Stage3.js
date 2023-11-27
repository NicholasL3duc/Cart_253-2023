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
        x: 100,
        y: 250,
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
  draw(){
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
    this.octopus();
  }














    
}