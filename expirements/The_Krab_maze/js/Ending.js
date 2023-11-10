// Ending
// Displays the ending message of the program.

// NOTE: We extend the State class to guarantee this class will have
// the key methods that we call in the main program,
// draw() and keyPressed() in this case.

// NOTE: Even though at the moment the Ending does *not* define a keyPressed()
// method, the fact it extends State means it *does* have one when it is called
// in the main program. This is a key benefit of extending State.
class Ending extends State {

    draw() {
      // Always call the super() version of the method if there is one
      // just in case it does something important.
      super.draw();
  
      background(0);
  
      // Overkill perhaps, but we have a separate method to just display
      // the actual ending text. More methods/functions is generally better.
      this.displayEnding();
    }
  
    // displayTitle()
    // Sets style and then display the text in the endingString property on the canvas
    displayEnding() {
      push();
      fill(255, 0, 0);
      text(this.endingString, width / 2, height / 2)
      pop();
    }
  
    // NO keyPressed() needed down here, it is handled by the State version
  }