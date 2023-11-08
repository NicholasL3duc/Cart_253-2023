/**
 * Title of Project
 * Nicholas Leduc
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
 */

//Krab object
let Krab = {
  x: 20,
  y: 20,
  w: 30,
  h: 10,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3.5,
};

let waterMaze = {
  wall1: {
    x: 120,
    y: 0,
    w: 100,
    h: 460,
  },
  wall2: {
    x: 220,
    y: 360,
    w: 260,
    h: 100,
  },
  wall3: {
    x: 340,
    y: 130,
    w: 260,
    h: 110,
  },
  wall4: {
    x: 500,
    y: 0,
    w: 100,
    h: 200,
  },
  wall5: {
    x: 590,
    y: 360,
    w: 400,
    h: 100,
  },
  wall6: {
    x: 590,
    y: 360,
    w: 110,
    h: 500,
  },
  wall7: {
    x: 900,
    y: 360,
    w: 110,
    h: 300,
  },
  wall7: {
    x: 900,
    y: 360,
    w: 110,
    h: 300,
  },
};
let sand = {
  bank1: {
    x: 1150,
    y: 300,
    size: 35,
  },
  bank2: {
    x: 1100,
    y: 600,
    size: 60,
  },
  bank3: {
    x: 1400,
    y: 700,
    size: 20,
  },
  bank4: {
    x: 1300,
    y: 500,
    size: 20,
  },
  bank5: {
    x: 1250,
    y: 800,
    size: 20,
  },
  bank6: {
    x: 1400,
    y: 300,
    size: 20,
  },
};
let shark = {
  b1: {
    x: 700,
    y: 100,
    w: 20,
    h: 60,
    size: 20,
    vx: 0,
    vy: 4,
    speed: 4,
    angle: 0,
    distance: 100,
  },
  b2: {
    x: 850,
    y: 100,
    w: 20,
    h: 60,
    size: 20,
    vx: 0,
    vy: 3,
    speed: 3,
    angle: 0,
    distance: 100,
  },
  b3: {
    x: 1000,
    y: 100,
    w: 20,
    h: 60,
    size: 20,
    vx: 0,
    vy: 5,
    speed: 5,
    angle: 0,
    distance: 100,
  },
};
let home = {
  x: undefined,
  y: 450,
  size: 150,
};

let shell = {
  x: undefined,
  y: 0,
  size: 150,
  active: true,
};

let octopus = {
  x: undefined,
  y: 0,
  size: 150,
  active: true,
};

let mine = {
  x: undefined,
  y: 0,
  size: 150,
};
let colorWall = {
  Wall1: {
    x: 550,
    y: 200,
    w: 300,
    h: 90,
  },
  Wall2: {
    x: 250,
    y: 200,
    w: 300,
    h: 90,
  },
  Wall3: {
    x: 850,
    y: 200,
    w: 300,
    h: 90,
  },
  Wall4: {
    x: 550,
    y: 500,
    w: 300,
    h: 90,
  },
  Wall5: {
    x: 250,
    y: 500,
    w: 300,
    h: 90,
  },
  Wall6: {
    x: 850,
    y: 500,
    w: 300,
    h: 90,
  },
};
let startWall = {
  wall1: {
    x: 200,
    y: 0,
    w: 700,
    h: 50,
  },
  wall2: {
    x: 1150,
    y: 150,
    w: 700,
    h: 50,

  }
};
let state = "title";

// the images used
let imgHouse;
let imgseaShell;
let imgOctopus;
let imgCoral;
let imgBubbles;
let imgsoup;
let imgKrab;
let imgBabyKrab;
let imgConstruct;
function preload() {
  imgHouse = loadImage("assets/images/House.jpg");
  imgseaShell = loadImage("assets/images/seaShell.jpg");
  imgOctopus = loadImage("assets/images/evil octo smirk.webp");
  imgCoral = loadImage("assets/images/coral.png");
  imgBubbles = loadImage("assets/images/bubbles.png");
  imgsoup = loadImage("assets/images/soup.png");
  imgKrab = loadImage("assets/images/Krab.webp");
  imgConstruct = loadImage("assets/images/constuct.png");
}

/**
 * Description of setup
 */
function setup() {
  // background info
  createCanvas(1400, 850);
  // the positions of my images
  home.x = 1450 / 2 + home.size / 2;
  home.y = 450 + home.size / 2;

  shell.x = 1450 / 3 + shell.size / 2 - 200;
  shell.y = 200 + shell.size / 2 - 290;

  octopus.x = 1450 / 2 + octopus.size / 2 + 100;
  octopus.y = 600 + octopus.size / 3;
}

function windowResized() {
  resizeCanvas(1400, 900);
}

/**
 * Description of draw()
 */
function draw() {
  // background and function information
  background(11, 139, 230);

  if (state === "title") {
    title();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "stage2") {
    stage2();
  } else if (state === "stage3") {
    stage3();
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
  fill(33, 16, 97);
  textAlign(CENTER, CENTER);
  text(
    "Touch the Magical SeaShell To Make The Evil Octopus Dissapear!!!",
    width / 2,
    height / 2
  );
  image(imgseaShell, 600, 100, 250, 250);
  image(imgOctopus, 450, 450, 500, 400);
  pop();
}
function win() {
  push();
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text("You Won And Got Home Safe!!", width / 2, height / 2);
  image(imgHouse, 600, 500, 250, 250);
  pop();
}
function loss() {
  push();
  textSize(40);
  fill(189, 38, 21);
  textAlign(CENTER, CENTER);
  text("Krab Soup For You :(", width / 2, height / 2);
  image(imgsoup, 250, 250, 250, 250);
  pop();
}
// functions used during simulator
function simulation() {
  image(imgHouse, 1450 / 2, 450, 150, 150);
  image(imgseaShell, imgseaShell.x, imgseaShell.y, 250, 250);
  image(imgOctopus);
  image(imgCoral, 0, 400, 500, 500);
  image(imgBubbles, 1100, 50, 300, 300);
  image(imgsoup);

  checkOffscreen();
  checkOverlap();
  display();
  movement();
  controlUser();
  checkOverlapshark();
  house();
}
//Krab Movements
function controlUser() {
  if (keyIsDown(87)) {
    //moving using the W key
    Krab.vy = -Krab.speed;
  } else if (keyIsDown(83)) {
    //moving using the W key
    Krab.vy = Krab.speed;
  } else {
    Krab.vy = 0;
  }

  if (keyIsDown(68)) {
    Krab.vx = Krab.speed;
  } else if (keyIsDown(65)) {
    Krab.vx = -Krab.speed;
  } else {
    Krab.vx = 0;
  }
  Krab.x += Krab.vx;
  Krab.y += Krab.vy;
}

function display() {
  //   // Krab display

  // display for Krab
  push();
  image(imgKrab, Krab.x, Krab.y, Krab.size, Krab.size);
  pop();

  // water walls
  fill(194, 178, 128);
  // wall1
  rect(
    waterMaze.wall1.x,
    waterMaze.wall1.y,
    waterMaze.wall1.w,
    waterMaze.wall1.h
  );
  // wall 2
  fill(194, 178, 128);
  rect(
    waterMaze.wall2.x,
    waterMaze.wall2.y,
    waterMaze.wall2.w,
    waterMaze.wall2.h
  );
  // // wall 3
  rect(
    waterMaze.wall3.x,
    waterMaze.wall3.y,
    waterMaze.wall3.w,
    waterMaze.wall3.h
  );
  // // // wall 4
  rect(
    waterMaze.wall4.x,
    waterMaze.wall4.y,
    waterMaze.wall4.w,
    waterMaze.wall4.h
  );
  // // wall 5
  rect(
    waterMaze.wall5.x,
    waterMaze.wall5.y,
    waterMaze.wall5.w,
    waterMaze.wall5.h
  );
  // // wall 6
  rect(
    waterMaze.wall6.x,
    waterMaze.wall6.y,
    waterMaze.wall6.w,
    waterMaze.wall6.h
  );
  // // wall 7
  rect(
    waterMaze.wall7.x,
    waterMaze.wall7.y,
    waterMaze.wall7.w,
    waterMaze.wall7.h
  );

  //

  // shark Run

  //   shark 1

  fill(140, 154, 163);
  noStroke();
  ellipse(shark.b1.x, shark.b1.y, 40, 70);

  // shark 2
  fill(140, 154, 163);
  noStroke();
  ellipse(shark.b2.x, shark.b2.y, 40, 70);
  // shark 3
  fill(140, 154, 163);
  noStroke();
  ellipse(shark.b3.x, shark.b3.y, 40, 70);

  // sand bank display

  fill(74, 79, 82);
  ellipse(sand.bank1.x, sand.bank1.y, 100, 100);
  // sand 2
  ellipse(sand.bank2.x, sand.bank2.y, 150, 150);
  // sand 3
  ellipse(sand.bank3.x, sand.bank3.y, 60, 60);
  // sand 4
  ellipse(sand.bank4.x, sand.bank4.y, 70, 70);
  //   // sand 5
  //   ellipse(sand.bank5.x, sand.bank5.y, 180, 180);
  // sand 6
  ellipse(sand.bank6.x, sand.bank6.y, 100, 100);
}

// check is crab touches borders
function checkOffscreen() {
  // check if the Krab is long gone
  if (Krab.x < 0 || Krab.x > width || Krab.y < 0 || Krab.y > height) {
    // loss ending 1
    state = "loss";
  }
}
function checkOverlap() {
  // getting the shell
  let k = dist(Krab.x, Krab.y, shell.x, shell.y);
  if (k < Krab.size / 4 + shell.size / 4) {
    shell.active = false;
    octopus.active = false;
  }
  // overlap for the octopus
  if (
    Krab.x > octopus.x &&
    octopus.active &&
    Krab.y > octopus.y &&
    octopus.active
  ) {
    state = "loss";
  }

  // getting the shell overlap

  if (shell.active);
  push();
  image(imgseaShell, shell.x, shell.y, shell.size, shell.size);
  pop();
  if (octopus.active) {
    push();
    image(imgOctopus, octopus.x, octopus.y, octopus.size, octopus.size);
    pop();
  }

  //over lap check for wall 1
  if (
    Krab.x + Krab.w > waterMaze.wall1.x &&
    Krab.x < waterMaze.wall1.x + waterMaze.wall1.w &&
    Krab.y + Krab.h > waterMaze.wall1.y &&
    Krab.y < waterMaze.wall1.y + waterMaze.wall1.h
  ) {
    state = "loss";
  }
  //over lap check for wall 2
  if (
    Krab.x + Krab.w > waterMaze.wall2.x &&
    Krab.x < waterMaze.wall2.x + waterMaze.wall2.w &&
    Krab.y + Krab.h > waterMaze.wall2.y &&
    Krab.y < waterMaze.wall2.y + waterMaze.wall2.h
  ) {
    state = "loss";
  }
  //over lap check for wall 3
  if (
    Krab.x + Krab.w > waterMaze.wall3.x &&
    Krab.x < waterMaze.wall3.x + waterMaze.wall3.w &&
    Krab.y + Krab.h > waterMaze.wall3.y &&
    Krab.y < waterMaze.wall3.y + waterMaze.wall3.h
  ) {
    state = "loss";
  }
  //over lap check for wall 4
  if (
    Krab.x + Krab.w > waterMaze.wall4.x &&
    Krab.x < waterMaze.wall4.x + waterMaze.wall4.w &&
    Krab.y + Krab.h > waterMaze.wall4.y &&
    Krab.y < waterMaze.wall4.y + waterMaze.wall4.h
  ) {
    state = "loss";
  }
  //over lap check for wall 5
  if (
    Krab.x + Krab.w > waterMaze.wall5.x &&
    Krab.x < waterMaze.wall5.x + waterMaze.wall5.w &&
    Krab.y + Krab.h > waterMaze.wall5.y &&
    Krab.y < waterMaze.wall5.y + waterMaze.wall5.h
  ) {
    state = "loss";
  }
  //over lap check for wall 6
  //   if (
  //     Krab.x + Krab.w > waterMaze.wall6.x &&
  //     Krab.x < waterMaze.wall6.x + waterMaze.wall6.w &&
  //     Krab.y + Krab.h > waterMaze.wall6.y &&
  //     Krab.y < waterMaze.wall6.y + waterMaze.wall6.h
  //   ) {
  //     state = "loss";
  //   }
  //over lap check for wall 7
  if (
    Krab.x + Krab.w > waterMaze.wall7.x &&
    Krab.x < waterMaze.wall7.x + waterMaze.wall7.w &&
    Krab.y + Krab.h > waterMaze.wall7.y &&
    Krab.y < waterMaze.wall7.y + waterMaze.wall7.h
  ) {
    state = "loss";
  }
  // over lap check for sand 1
  let d1 = dist(Krab.x, Krab.y, sand.bank1.x, sand.bank1.y);
  if (d1 < Krab.size / 2 + sand.bank1.size / 2) {
    state = "loss";
  }
  // over lap check for sand 2
  let d2 = dist(Krab.x, Krab.y, sand.bank2.x, sand.bank2.y);
  if (d2 < Krab.size / 2 + sand.bank2.size / 2) {
    state = "loss";
  }
  // over lap check for sand 3
  let d3 = dist(Krab.x, Krab.y, sand.bank3.x, sand.bank3.y);
  if (d3 < Krab.size / 2 + sand.bank3.size / 2) {
    state = "loss";
  }
  // over lap check for sand 4
  let d4 = dist(Krab.x, Krab.y, sand.bank4.x, sand.bank4.y);
  if (d4 < Krab.size / 2 + sand.bank4.size / 2) {
    state = "loss";
  }
  // over lap check for sand 5
  let d5 = dist(Krab.x, Krab.y, sand.bank5.x, sand.bank5.y);
  if (d5 < Krab.size / 2 + sand.bank5.size / 2) {
    state = "loss";
  }
  // over lap check for sand 6
  let d6 = dist(Krab.x, Krab.y, sand.bank6.x, sand.bank6.y);
  if (d6 < Krab.size / 2 + sand.bank6.size / 2) {
    state = "loss";
  }
  //over lap check for sharks

  // overlap shark 1
  let s1 = dist(Krab.x, Krab.y, shark.b1.x, shark.b1.y);
  if (s1 < Krab.size / 2 + shark.b1.size / 2) {
    state = "loss";
  }
  // overlap shark 2
  let s2 = dist(Krab.x, Krab.y, shark.b2.x, shark.b2.y);
  if (s2 < Krab.size / 2 + shark.b2.size / 2) {
    state = "loss";
  }
  // overlap shark 3
  let s3 = dist(Krab.x, Krab.y, shark.b3.x, shark.b3.y);
  if (s3 < Krab.size / 2 + shark.b3.size / 2) {
    state = "loss";
  }
}
// movements for the sharks
function movement() {
  shark.b1.y = shark.b1.y + shark.b1.vy;

  shark.b2.y = shark.b2.y + shark.b2.vy;
  shark.b3.y = shark.b3.y + shark.b3.vy;
}

function checkOverlapshark() {
  // shark 1 bounce

  if (shark.b1.y < 0 || shark.b1.y > 360) {
    shark.b1.vy *= -1;
  }

  // shark 2 bounce

  if (shark.b2.y < 0 || shark.b2.y > 360) {
    shark.b2.vy *= -1;
  }

  // shark 3 bounce

  if (shark.b3.y < 0 || shark.b3.y > 360) {
    shark.b3.vy *= -1;
  }
}
// the ending goal of the cave
function house() {
  let h1 = dist(Krab.x, Krab.y, home.x, home.y);
  if (h1 < home.size / 2 + Krab.size / 2) {
    state = "stage2";
  }
}
function mousePressed() {
  if (state === "title") {
    state = "stage2";
  }
}

function stage2() {
  // checkOffscreen2();
  checkOverlap2();
  display2();
  controlUser();
}
function checkOverlap2() {
  // starting wall
  if (
    Krab.x + Krab.w > startWall.wall1.x &&
    Krab.x < startWall.wall1.x + startWall.wall1.w &&
    Krab.y + Krab.h > startWall.wall1.y &&
    Krab.y < startWall.wall1.y + startWall.wall1.h
  ) {
    state = "loss";
  }
//   ending wall
if (
    Krab.x + Krab.w > startWall.wall2.x &&
    Krab.x < startWall.wall2.x + startWall.wall2.w &&
    Krab.y + Krab.h > startWall.wall2.y &&
    Krab.y < startWall.wall2.y + startWall.wall2.h
  ) {
    state = "loss";
  }
  // wall 1 overlap
  if (
    Krab.x + Krab.w > colorWall.Wall1.x &&
    Krab.x < colorWall.Wall1.x + colorWall.Wall1.w &&
    Krab.y + Krab.h > colorWall.Wall1.y &&
    Krab.y < colorWall.Wall1.y + colorWall.Wall1.h
  ) {
    state = "loss";
  }
  // wall 2 overlap
  if (
    Krab.x + Krab.w > colorWall.Wall2.x &&
    Krab.x < colorWall.Wall2.x + colorWall.Wall2.w &&
    Krab.y + Krab.h > colorWall.Wall2.y &&
    Krab.y < colorWall.Wall2.y + colorWall.Wall2.h
  ) {
    state = "loss";
  }
}

function display2() {
  // krab display
  image(imgKrab, Krab.x, Krab.y, Krab.size, Krab.size);
  // construction image
  image(imgConstruct, 250, 200, 900, 500);

  // starting wall
  push();
  noStroke();
  fill(224, 222, 159);
  rect(startWall.wall1.x, startWall.wall1.y, startWall.wall1.h, startWall.wall1.w);
  pop();
  // ending wall
  push();
  noStroke();
  fill(224, 222, 159);
  rect(startWall.wall2.x, startWall.wall2.y, startWall.wall2.h, startWall.wall2.w);
  pop();
  // wall 1 display
  push();
  noStroke();
  fill(159, 222, 100);
  rect(
    colorWall.Wall1.x,
    colorWall.Wall1.y,
    colorWall.Wall1.w,
    colorWall.Wall1.h
  );
  pop();
  // wall 2 display
  push();
  noStroke();
  fill(237, 92, 228);
  rect(
    colorWall.Wall2.x,
    colorWall.Wall2.y,
    colorWall.Wall2.w,
    colorWall.Wall2.h
  );
  pop();
  // wall 3 display
  push();
  noStroke();
  fill(95, 81, 240);
  rect(
    colorWall.Wall3.x,
    colorWall.Wall3.y,
    colorWall.Wall3.w,
    colorWall.Wall3.h
  );
  pop();

  // wall 4 display
  push();
  noStroke();
  fill(95, 81, 240);
  rect(
    colorWall.Wall4.x,
    colorWall.Wall4.y,
    colorWall.Wall4.w,
    colorWall.Wall4.h
  );
  pop();

  // wall 5 display
  push();
  noStroke();
  fill(159, 222, 100);
  rect(
    colorWall.Wall5.x,
    colorWall.Wall5.y,
    colorWall.Wall5.w,
    colorWall.Wall5.h
  );
  pop();

  // wall 6 display
  push();
  noStroke();
  fill(237, 92, 228);
  rect(
    colorWall.Wall6.x,
    colorWall.Wall6.y,
    colorWall.Wall6.w,
    colorWall.Wall6.h
  );
  pop();
}
