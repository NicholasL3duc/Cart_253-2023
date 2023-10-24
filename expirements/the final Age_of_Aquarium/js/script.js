/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let whale = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 1,
};

let state = "title";
let imgWhale;


let school = [];
let garbage = [];
function preload() {
  imgWhale = loadImage(`assets/images/whale.png`);

}
function title() {
    push();
    textSize(45);
    fill(33, 16, 97);
    textAlign(CENTER, CENTER);
    text(
      "Touch the Magical SeaShell To Make The Evil Octopus Dissapear!!!",
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
    text("Yummy!", width / 2, height / 2);
  
    pop();
  }
  function loss() {
    push();
    textSize(40);
    fill(189, 38, 21);
    textAlign(CENTER, CENTER);
    text("Yuck!! :(", width / 2, height / 2);
  
    pop();
  }
function setup() {
  createCanvas(windowWidth, windowHeight);

  //   array for fish
  for (let i = 0; i < 6; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }

  //    array for trash
  for (let g = 0; g < 4; g++) {
    garbage[g] = createFish(random(0, width), random(0, height));
  }

  //   user.x = 50;
  //   user.y = windowHeight/2;

  whale.x = 50;
  whale.y = windowHeight / 2;

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
function createTrash() {
  let trash = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 1,
  };
  return trash;
}

function createUser() {
  let user = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 1,
  };
  push();
  image(
    imgWhale,
    user.x - user.size / 2,
    user.y - user.size / 2,
    user.size * 1.5,
    user.size * 1.5
  );
  pop();
}

function draw() {
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

  whale.x = constrain(whale.x, 0, windowWidth);
  whale.y = constrain(whale.y, 0, windowHeight);


  simulation();
}
function simulation() {
  //   createFish();
  //   createUser();
  for (let fish of school) {
    moveFish(fish);
    moveWhale(whale);
    displayFish(fish);
    overlapCheckFish();
    displayWhale();
  }
  for (let trash of garbage) {
    moveTrash(trash);
    displayTrash(trash);
  }
  overlapCheckTrash();
  pointSystem();
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
function moveTrash(trash) {
  let change = random(0, 1);
  if (change < 0.05) {
    trash.vx = random(-trash.speed, trash.speed);
    trash.vy = random(-trash.speed, trash.speed);
  }

  // Move the trash
  trash.x = trash.x + trash.vx;
  trash.y = trash.y + trash.vy;

  // Constrain the trash to the canvas

  trash.x = constrain(trash.x, 0, width);
  trash.y = constrain(trash.y, 0, height);
}
function moveWhale(whale) {
  // user.x = mouseX
  // user.y = mouseY

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
function displayWhale() {
  // display for whale
  push();
  image(imgWhale, whale.x, whale.y, whale.size, whale.size);
  pop();
}

function displayFish(fish) {
  push();
  fill(50, 70, 190);
  noStroke();
  ellipse(fish.x, fish.y, fish.size, 30, 40);
  pop();
}

function displayTrash(trash) {
  push();
  fill(190, 50, 30);
  noStroke();
  ellipse(trash.x, trash.y, trash.size, 50, 30);
  pop();
}

function overlapCheckFish() {
  for (let fish of school) {
    let s1 = dist(whale.x, whale.y, fish.x, fish.y);
    if (s1 < whale.size / 2 + fish.size / 2) {
      state = "win";
    }
  }
}

function overlapCheckTrash() {
  for (let trash of garbage) {
    let g1 = dist(whale.x, whale.y, trash.x, trash.y);
    if (g1 < whale.size / 2 + trash.size / 2) {
      state = "loss";
    }
  }
}
function pointSystem() {}


function mousePressed() {
    if (state === "title") {
      state = "simulation";
    };
  };
  