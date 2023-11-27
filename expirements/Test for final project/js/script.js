// A variable to store the currently active state object (starts empty)
let currentState;

// the images used
let imgHouse;
let imgEnding;
let imgseaShell;
let imgOctopus;
let imgCoral;
let imgBubbles;
let imgsoup;
let imgkrab;
let imgBabykrab;
let imgBabyHat;
let imgConstruct;
let imgCrackS1;
let imgScaredKrab;
let imgBeach;
let imgBackdrop;
let imgS2Backdrop;
let imgS3Backdrop;
let imgText;

function preload() {
  imgBackdrop = loadImage("assets/images/Stage1Backdrop.jpg");
  imgS2Backdrop = loadImage("assets/images/Stage2Backdrop.jpg");
  imgS3Backdrop = loadImage("assets/images/Stage3Backdrop.jpg");
  imgEnding = loadImage("assets/images/ending.jpg");
  imgHouse = loadImage("assets/images/Door S1.png");
  imgseaShell = loadImage("assets/images/seaShell.jpg");
  imgOctopus = loadImage("assets/images/evil+octpus.png");
  imgCoral = loadImage("assets/images/coral.png");
  imgBubbles = loadImage("assets/images/bubbles.png");
  imgsoup = loadImage("assets/images/soup.png");
  imgkrab = loadImage("assets/images/Krab.png");
  imgConstruct = loadImage("assets/images/constuct.png");
  imgBabykrab = loadImage("assets/images/dancing baby krab.gif");
  imgBabyHat = loadImage("assets/images/krab with crown.gif");
  imgScaredKrab = loadImage("assets/images/scrared krab.png");
  imgCrackS1 = loadImage("assets/images/Crack S1.png");
  imgBeach = loadImage("assets/images/beach.jpg");
  imgText = loadImage ("assets/images/textBuble.png")
}

// setup()
// Create the canvas, start our program in the title state, set default text style
function setup() {
  createCanvas(1400, 850);

  // We can set the current state by creating a NEW object from the class
  // representing that state! This will call its constructor() which will work
  // like the `setup()` for that state.
  currentState = new Stage3(); // REVERT TO TITLE AFTER

  // Text settings
  textSize(50);
  textAlign(CENTER, CENTER);
}

// draw()
// Simply call the draw method of the current state
function draw() {
  // If the current state is Title this will call the Title class draw()
  // If the current state is Animation this will call the Animation class draw()
  // if the current state is Ending this will call the Ending class draw()
  currentState.draw();
}

// keyPressed()
// Call the keyPressed method of the current state
// Note how even if the specific state itself DOESN'T define a keyPressed() method this
// will work because they all extend the State class which does have one. For instance
// neither Animation nor Ending define a keyPressed() method, but this still works
// because they INHERIT the one from the State class.
function keyPressed() {
  // If the current state is Title this will call the Title class keyPressed()
  // If the current state is Animation this will call the State class keyPressed()
  // if the current state is Ending this will call the State class keyPressed()
  currentState.keyPressed();
}
