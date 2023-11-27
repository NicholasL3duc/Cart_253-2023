// Ending
// Displays the ending message of the program.
class Ending {
  // constructor()
  // Acts as the setup() of the state, called when the
  // state is created. Sets the ending message of the program.
  constructor() {
    // Set our property determining the ending message of the simulation
    this.endingString = "Ah, mortality.";
  }

  // draw()
  // Called every frame in the main script. Handles what the ending
  // state needs to do each frame, which is display the ending message.
  draw() {
    background(imgEnding);

    push();
    textSize(40);
    fill(189, 38, 21);
    textAlign(CENTER, CENTER);
    text("krab Soup For You :(", width / 2, height / 2);
    image(imgsoup, 250, 250, 250, 250);
    pop();
  }

  keyPressed() {
    currentState = new Title();
  }

  mousePressed() {}
}
