/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
// the blue fish
let fish1;
let fish2;
let fish3;
let fish4;

let whale = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 4,
};

let clown = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 4,
};
let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 4,
};

let imgWhale;
let imgClown;

function preload() {
  imgWhale = loadImage(`assets/images/whale.png`);
  imgClown = loadImage(`assets/images/clown.png`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create four fish, positioned randomly
  fish1 = createFish(random(0, width), random(0, height));
  fish2 = createFish(random(0, width), random(0, height));
  fish3 = createFish(random(0, width), random(0, height));
  fish4 = createFish(random(0, width), random(0, height));

  whale.x = 50;
  whale.y = windowHeight / 2;

  clown.x = 50;
  clown.y = windowHeight / 2;
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  };
  return fish;
}

// draw()
// Moves and displays our fish

function draw() {
  background(0, 0, 139);

  moveFish(fish1);
  moveFish(fish2);
  moveFish(fish3);
  moveFish(fish4);

  displayFish(fish1);
  displayFish(fish2);
  displayFish(fish3);
  displayFish(fish4);

  whale.x = constrain(whale.x, 0, windowWidth);
  whale.y = constrain(whale.y, 0, windowHeight);

  user.x = mouseX
  user.y = mouseY

  push();
  image(imgWhale, whale.x, whale.y, whale.size, whale.size);
  pop();


  fill(100, 200, 100);
  ellipse(user.x, user.y, user.size);
}
function simulation() {
  createFish();
  moveFish();
  moveWhale();
  moveTrash();
  displayTrash();
  displayWhale();
  displayFish();
  overlapCheckFish();
  overlapCheckTrash();
}
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas

  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}
function moveWhale() {

 
}
function displayWhale() {
  // display for whale

  push();
  image(imgWhale, whale.x, whale.y, whale.size, whale.size);
  pop();

  // displayFish(fish)
  // Displays the provided fish on the canvas
}

function displayFish(fish) {
  push();
  fill(50, 70, 190);
  noStroke();
  ellipse(fish.x, fish.y, fish.size, 30, 40);
  pop();
}
function overlapCheckFish(){
    let s1 = dist(user.x, user.y, fish.x, fish.y);
    if (s1 < user.size / 2 + fish.size / 2) {
      
    };

}

function overlapCheckTrash(){}