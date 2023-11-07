/**
 * the Museum
 * Nicholas Leduc
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
 */
let user = {
  x: undefined,
  y: undefined,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 3,
};

let imgMuseum;
let imgWhale;
let imgPipin;

// user = imgPipin;

let state = "simulation";

function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(1500, 700);
  imgMuseum = loadImage("assets/images/museumTest.png");
  imgWhale = loadImage("assets/images/aquarium picture.png");
  imgPipin = loadImage("assets/images/PippinRight.png");
}

/**
 * Description of draw()
 */
function draw() {
  background(imgMuseum);

  image(imgWhale, 500, 200);
  push();
  textSize(20)
  fill(100,160,200)
  
  fill(0)
  text("The Whale project", width / 2.3, height / 1.5)
  pop();
}
function simulation() {
  controlUser();
  checkmovement();
  checkOverlap();
  display();
  voiceRecording();
  edgeReached();
}

function controlUser() {
  if (keyIsDown(87)) {
    //moving using the W key
    user.vy = -user.speed;
  } else if (keyIsDown(83)) {
    //moving using the W key
    user.vy = user.speed;
  } else {
    user.vy = 0;
  }

  if (keyIsDown(68)) {
    user.vx = user.speed;
  } else if (keyIsDown(65)) {
    user.vx = -user.speed;
  } else {
    user.vx = 0;
  }
  user.x += user.vx;
  user.y += user.vy;
}

function checkmovement() {}
function checkOverlap() {}
function display() {
  // display user
  fill(255, 100, 100);
  rect(user.x, user.y, user.size, user.size);
}
