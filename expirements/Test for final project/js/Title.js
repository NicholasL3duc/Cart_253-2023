
class Title extends State {

  
    // state is created. Sets the title of the program.
    constructor() {
      // We should always call the superclass constructor
  
      super();
  
      // Set our property determining the title of the simulation
      this.titleString = "Get Your Kids Back From The Evil Octopus!!";
    }
  
    // draw()
    
    draw() {
      // Always call the super() version of the method if there is one
      // just in case it does something important.
      super.draw();
  
//    will change this to a drawn image 
      background(imgBeach,0,0,width,height);
  
    
      // the actual title text. More methods/functions is generally better.
      this.displayTitle();
    }
  
    // displayTitle()
   
    displayTitle() {
      push();
      image(imgBeach,0,0,width,height);
      textSize(45);
      fill(33, 16, 97);
      textAlign(CENTER, CENTER);
      text(
        "Get Your Kids Back From The Evil Octopus!!",
        width / 2,
        height / 3
      );
     textSize(40);
     fill(33,16,97);
     textAlign(CENTER,CENTER);
     text(
      "Press Space To Start",
      width /2,
      height /2.2

     )
      image(imgScaredKrab,250, 450, 250, 250);
      image(imgOctopus, 700, 450, 300, 300);
      image(imgBabykrab,970,600,200,200)
      image(imgBabyHat,1100,500,200,200)
      pop();
    }
  
    
    keyPressed() {
    
      super.keyPressed();
  
      currentState = new Animation();
    }
  }