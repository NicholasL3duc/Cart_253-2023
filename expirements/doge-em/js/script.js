/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

// fishes object

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

// whale object

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
  End: {
    x: 80,
    y: 260,
    size: 40,
    fill: {
      r: 70,
      g: 100,
      b: 230,
    },
  },
  Belly: {
    x: 250,
    y: 280,
    size: 40,
    fill: {
      r: 255,
      g: 253,
      b: 208,
    },
  },
  Arm: {
    x: 170,
    y: 110,
    size: 207652,
    fill: {
      r: 70,
      g: 80,
      b: 240,
    },
  },
  Eye: {
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

/**
 * Description of preload
 */
function preload() {

}

/**
 * Description of setup
 */
function setup() {
  createCanvas(windowWidth, windowHeight);

  fishes.y = random(0, height);
  fishes.vx = fishes.speed;

  fishes.y = random(0, height);
  fishes.vx = fishes.speed;

  fishes.tail.y = random(0, height);
  fishes.tail.vx = fishes.tail.speed;

  fishes.tail.y = random(0, height);
  fishes.tail.vx = fishes.tail.speed;

  //slider = createSlider (0,1,0.2,0.0001);
  //slider.position(10,10);
  //slider.style("width","100px");
}

/**
 * Description of draw()
 */
function draw() {
  background(0, 0, 139);

  // functions used during simulator
  function simulation() {
    checkOffscreen();
    checkOverlap();
    display();
    movement();
    controlUser();
    checkOverlapshark();
    house();
  }

  // fishes movement
  fishes.x = fishes.x + fishes.vx;
  fishes.y = fishes.y + fishes.vy;

  if (fishes.x < 0) {
    fishes.x = 0;
    fishes.y = random(0, height);
  }
  // the whales movement

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
  };


function display(){
  fill(fishes.fill.r, fishes.fill.g, fishes.fill.b);
  ellipse(fishes.x, fishes.y, 20, 10);

  //fish .tail
  fill(fishes.tail.fill.r, fishes.tail.fill.g, fishes.tail.fill.b);
  ellipse(fishes.tail.x, fishes.tail.y, 2, 7);

  // display for whale
  fill(whale.fill.r, whale.fill.g, whale.fill.b);
  ellipse(whale.x, whale.y, 180, 100);

  //whale belly
  fill(whale.Belly.fill.r, whale.Belly.fill.g, whale.Belly.fill.b);
  ellipse(whale.Belly.x, whale.Belly.y, 120, 40);

  //whale .tail

  fill(whale.tail.fill.r, whale.tail.fill.g, whale.tail.fill.b);
  noStroke();
  ellipse(whale.tail.x, whale.tail.y, 110, 50);

  //whale .tail end
  fill(whale.End.fill.r, whale.End.fill.g, whale.End.fill.b);
  noStroke();
  ellipse(whale.End.x, whale.End.y, 20, 70);

  fill(0, 0);
  noStroke();
  ellipse(20, 20, 20, 20);

  //whale Arm

  push();
  let angle = map(30, 0, 50, 80, 0);
  translate(whale.Arm.x, whale.Arm.y);
  rotate(angle);
  fill(whale.Arm.fill.r, whale.Arm.fill.g, whale.Arm.fill.b);
  ellipse(whale.Arm.x, whale.Arm.y, 50, 100);
  pop();
  // whale eye

  fill(0);
  ellipse(whale.Eye.x, whale.Eye.y, 10, 10);
}


}


