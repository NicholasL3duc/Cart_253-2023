/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
// the fancy whale
let whale = {
  x: 250,
  y: 250,
  size: 100,
  fill: {
    r: 60,
    g: 100,
    b: 240,
  },

  tail: {
    x: 140,
    y: 260,
    size: 100,
    fill: {
      r: 70,
      g: 100,
      b: 230,
    },
  },
  end: {
    x: 80,
    y: 260,
    size: 40,
    fill: {
      r: 70,
      g: 100,
      b: 230,
    },
  },
  belly: {
    x: 250,
    y: 280,
    size: 40,
    fill: {
      r: 255,
      g: 253,
      b: 208,
    },
  },
  arm: {
    x: 170,
    y: 110,
    size: 10,
    fill: {
      r: 70,
      g: 80,
      b: 240,
    },
  },
  eye: {
    x: 310,
    y: 250,
    size: 40,
    fill: 255,
  },
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
};

// this is the fishes
let fishes = {
  x: 0,
  y: 250,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 2,
  fill: {
    r: 20,
    g: 70,
    b: 240,
  },
  tail: {
    x: 0,
    y: 250,
    size: 20,
    vx: 0,
    vy: 0,
    speed: 2,
    fill: {
      r: 20,
      g: 70,
      b: 240,
    },
  },
};

let state = "title";

/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/**
 * Description of draw()
 */
function draw() {
  // background and function information
  background(0, 0, 139);

  if (state === "title") {
    title();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "win") {
    win();
  } else if (state === "loss") {
    loss();
  }
}
//all functions used
function title() {
  push();
  textSize(45);
  fill(150,50,70);
  textAlign(CENTER, CENTER);
  text(
    "Eat the Blue Fishes to WIN but Avoid the Red Fishes",
    width / 2,
    height / 2
  );

  pop();
}
function win() {
  push();
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text("You Won And Got Home Safe!!", width / 2, height / 2);

  pop();
}
function loss() {
  push();
  textSize(40);
  fill(189, 38, 21);
  textAlign(CENTER, CENTER);
  text("Fish Soup For You :(", width / 2, height / 2);

  pop();
}
// functions used during simulator
function simulation() {
  checkOffscreen();
  checkOverlapFish();
  display();
  movement();
  controlUser();
  checkOverlapRedFish();
}

function checkOffscreen() {}

function checkOverlapFish() {}

function display() {
  fill(fishes.fill.r, fishes.fill.g, fishes.fill.b);
  ellipse(fishes.x, fishes.y, 20, 10);

  //fish .tail
  fill(fishes.tail.fill.r, fishes.tail.fill.g, fishes.tail.fill.b);
  ellipse(fishes.tail.x, fishes.tail.y, 2, 7);

  // display for whale
  fill(whale.fill.r, whale.fill.g, whale.fill.b);
  ellipse(whale.x, whale.y, 180, 100);

  //whale belly
  fill(whale.belly.fill.r, whale.belly.fill.g, whale.belly.fill.b);
  ellipse(whale.belly.x, whale.belly.y, 120, 40);

  //whale .tail

  fill(whale.tail.fill.r, whale.tail.fill.g, whale.tail.fill.b);
  noStroke();
  ellipse(whale.tail.x, whale.tail.y, 110, 50);

  //whale .tail end
  fill(whale.end.fill.r, whale.end.fill.g, whale.end.fill.b);
  noStroke();
  ellipse(whale.end.x, whale.end.y, 20, 70);

  fill(0, 0);
  noStroke();
  ellipse(20, 20, 20, 20);

  //whale Arm

  push();
  let angle = map(30, 0, 50, 80, 0);
  translate(whale.arm.x, whale.arm.y);
  rotate(angle);
  fill(whale.arm.fill.r, whale.arm.fill.g, whale.arm.fill.b);
  ellipse(whale.arm.x, whale.arm.y, 50, 100);
  pop();
  // whale eye

  fill(0);
  ellipse(whale.eye.x, whale.eye.y, 10, 10);
}

function movement() {}

function controlUser() {
  if (keyIsDown(87)) {
    //moving using the W key
    whale.vy = -whale.speed;
  } else if (keyIsDown(83)) {
    //moving using the W key
    whale.vy = whale.speed;
  } else {
    whale.vy = 0;
  }

  if (keyIsDown(68)) {
    whale.vx = whale.speed;
  } else if (keyIsDown(65)) {
    whale.vx = -whale.speed;
  } else {
    whale.vx = 0;
  }
  whale.x += whale.vx;
  whale.y += whale.vy;
}

function checkOverlapRedFish() {}

function mousePressed() {
  if (state === "title") {
    state = "simulation";
  }
}
