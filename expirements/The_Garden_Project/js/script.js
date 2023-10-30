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
  // the color of the polutted grass
  grassColor: {
    r: 48,
    g: 102,
    b: 56,
  },
};

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // the creation of the flowers by counting up the number of flowers
  for (let i = 0; i < garden.numflowers; i++) {
    // create a new flower
    let flower = createFlower();
    // add the flower into the array of flowers
    garden.flowers.push(flower);
  }
}
// creates a new object (the flower) and returns it to the canvas
function createFlower() {
  // the flower object
  let flower = {
    // the flower postion and size information
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stemLength: 75,
    stemTickness: 10,
    petalThickness: 10,
    // the flower's color information
    stemColor: {
      r: 22,
      g: 46,
      b: 26,
    },
    petalColor: {
      r: 122,
      g: 53,
      b: 70,
    },
    centerColor: {
      r: 50,
      g: 0,
      b: 0,
    },
  };
  return flower;
}
// displays the flowers onto the canvas
function displayFlower(flower) {
  push();
  // line for the stem
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
// draw()
// Displays our flowers
function draw() {
  // displaying the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // loops through all of the flowers in the array and displays them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    displayFlower(flower);
  }
}
