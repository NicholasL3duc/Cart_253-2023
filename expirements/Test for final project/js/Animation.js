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
  
      background(0);
  
      // Call the state's methods to make the animation work
      this.move();
      this.display();
      this.checkOverlap();
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
      ellipse(this.this.krab.x, this.this.krab.y, this.this.krab.size,this.this.krab.size);
      pop();
    }
  
    
  }