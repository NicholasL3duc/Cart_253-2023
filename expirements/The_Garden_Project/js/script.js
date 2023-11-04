/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

// this is the poluted garden
let garden = {
  // the array for the decomposing flowers
  flowers: [],
  // the number of flowers at the start
  numflowers: 21,
  // the array for the bees
  bees: [],
  // the number of bees in my garden
  numBees: 7,
  // the color of the polutted grass
  grassColor: {
    r: 49,
    g: 74,
    b: 41,
  },
};

// images used in project
let imgSmoke;
let imgTitle;
let imgWin;
let imglose;
let imgTrash;

// timer settings
let gameOverTimer = 1;
let gameLength = 60 * 10;

// the current state
let state = "title";

function title() {
  push();
  image(imgTitle, 0, 0, width, height);
  textSize(60);
  fill(255, 200, 220);
  textAlign(CENTER, CENTER);
  textFont();
  text("Save The Bees!!", width / 2, height / 6);
  text("Click to interact ", width / 2, height / 1.2);
  pop();
}
function win() {
  push();
  image(imgWin, 0, 0, width, height);
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text("You saved them!", width / 2, height / 6);
  textSize(30);
  text("You let the earth heal, Thank you :)", width / 2, height / 1.1);
  pop();
}
function lose() {
  push();
  image(imglose, 0, 0, width, height);
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Dont mess with Nature :(", width / 2, height / 2);
  fill(0);
  text("Learn more about how to help the bees ;)", width / 2, height / 1.5);
  fill(0);
  text("https://thebeeconservancy.org/");
  pop();
}
// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // all of the images used
  imgSmoke = loadImage("assets/images/smoke.png");
  imgTitle = loadImage("assets/images/TitleImage.jpg");
  imglose = loadImage("assets/images/lossImage.jpg");
  imgWin = loadImage("assets/images/WinImage.jpg");
  imgTrash = loadImage("assets/images/TrashNoWhite.png");

  // the creation of the flowers by counting up the number of flowers
  for (let i = 0; i < garden.numflowers; i++) {
    // create variables for our argument for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    };

    // create a new flower
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // add the flower into the array of flowers
    garden.flowers.push(flower);
  }
  garden.flowers.sort(sortByY);

  function sortByY(flower1, flower2) {
    return flower1.y - flower2.y;
  }
  // the creation of my bees
  for (let i = 0; i < garden.numBees; i++) {
    // the variables for the bees
    let x = random(0, width);
    let y = random(0, height);

    // creating a new bee
    let bee = new Bee(x, y);
    // adding the bee to the array for bees (call it the hive)
    garden.bees.push(bee);
  }
}

// draw()
// Displays our flowers
function draw() {
  if (state === `title`) {
    title();
  } else if (state === `game`) {
    game();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}

function game() {
  // this Increases the timer's count
  gameOverTimer++;
  // checks if the timer is done
  if (gameOverTimer >= gameLength) {
    // The game is over!
    gameOver();
  }
  // displaying the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // loops through all of the flowers in the array and displays them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // this checks if the flower is alive before updating it
    if (flower.alive) {
      // the flower is shrinking and displaying it
      flower.shrink();
      flower.display();
    }
  }
  // loops all of the bees in the Array and displays them
  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];

    // check if the bee is alive
    if (bee.alive) {
      bee.shrink();
      bee.move();

      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower);
      }
      bee.display();
    }
  }
  displaySmoke();

  // displays the flowers onto the canvas
  function displayFlower(flower) {
    push();
    strokeWeight(flower.stemThickness);
    stroke(flower.stemColor.r, flower.stemColor.g, flower.stemColor.b);
    line(flower.x, flower.y, flower.x, flower.y + flower.stemLength);
    // the heavy outline for the flower
    strokeWeight(flower.petalThickness);
    fill(flower.centerColor.r, flower.centerColor.g, flower.centerColor.b);
    stroke(flower.petalColor.r, flower.petalColor.g, flower.petalColor.b);
    ellipse(flower.x, flower.y, flower.size);
    pop();
  }
  function displaySmoke() {
    image(imgSmoke, 0, 0, width, height);
  }

  function addTrash() {}

}
function GameLose() {
  if (numBees <= 0) {
    state = "lose";
  }
}

// game over function but the good ending
function gameOver() {
  if (gameOverTimer >= gameLength) {
    state = "win";
  }
}
// transition from title to sim
function mousePressed() {
  if (state === "title") {
    state = "game";
  }
}
