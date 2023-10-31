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
  numBees: 5,
  // the color of the polutted grass
  grassColor: {
    r: 49,
    g: 74,
    b: 41,
  },
};
let imgSmoke;

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

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

      for (let j = 0; j < garden.flowers.length; j++){
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower)
      }
      bee.display();
    }
  }
}
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
