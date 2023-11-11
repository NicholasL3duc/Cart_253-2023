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

//krab object
let krab = {
  x: 20,
  y: 20,
  w: 30,
  h: 10,
  size: 80,
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

let babyKrab2 = {
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
  wall1: {
    x: 550,
    y: 200,
    w: 300,
    h: 20,
  },
  wall2: {
    x: 250,
    y: 200,
    w: 300,
    h: 20,
  },
  wall3: {
    x: 850,
    y: 200,
    w: 300,
    h: 20,
  },
  wall4: {
    x: 550,
    y: 500,
    w: 300,
    h: 20,
  },
  wall5: {
    x: 250,
    y: 500,
    w: 300,
    h: 20,
  },
  wall6: {
    x: 850,
    y: 500,
    w: 300,
    h: 20,
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
  },
};
let state = "title";

// the images used
let imgHouse;
let imgseaShell;
let imgOctopus;
let imgCoral;
let imgBubbles;
let imgsoup;
let imgkrab;
let imgBabykrab;
let imgConstruct;
function preload() {
  imgHouse = loadImage("assets/images/House.jpg");
  imgseaShell = loadImage("assets/images/seaShell.jpg");
  imgOctopus = loadImage("assets/images/evil octo smirk.webp");
  imgCoral = loadImage("assets/images/coral.png");
  imgBubbles = loadImage("assets/images/bubbles.png");
  imgsoup = loadImage("assets/images/soup.png");
  imgkrab = loadImage("assets/images/krab.webp");
  imgConstruct = loadImage("assets/images/constuct.png");
  imgBabykrab = loadImage("assets/images/dancing baby krab.gif")
}

/**
 * Description of setup
 */
function setup() {
// mic movements for Krab
mic = new p5.AudioIn();
mic.start();

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
// mic volume and settings
xloc += xspeed;
yloc +=yspeed;
// the krabs postion when called
let krabInfo = {
x: xloc,
y: yloc,
};
krabAry.push(krabInfo); //push the info into the array
//krab circles based on info stored in the info array
for (let i = 0; i < krabAry.length; i++) {
  fill(krabAry[i].col);
  circle(krabAry[i].x, krabAry[i].y, 20);
}

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
  text("krab Soup For You :(", width / 2, height / 2);
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
//krab Movements
function controlUser() {
  // if (keyIsDown(87)) {
  //   //moving using the W key
  //   krab.vy = -krab.speed;
  // } else if (keyIsDown(83)) {
  //   //moving using the W key
  //   krab.vy = krab.speed;
  // } else {
  //   krab.vy = 0;
  // }

  // if (keyIsDown(68)) {
  //   krab.vx = krab.speed;
  // } else if (keyIsDown(65)) {
  //   krab.vx = -krab.speed;
  // } else {
  //   krab.vx = 0;
  // }







  krab.x += krab.vx;
  krab.y += krab.vy;
}

function display() {
  //   // krab display

  // display for krab
  push();
  image(imgkrab, krab.x, krab.y, krab.size, krab.size);
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
  // check if the krab is long gone
  if (krab.x < 0 || krab.x > width || krab.y < 0 || krab.y > height) {
    // loss ending 1
    state = "loss";
  }
}
function checkOverlap() {
  // getting the shell
  let k = dist(krab.x, krab.y, shell.x, shell.y);
  if (k < krab.size / 4 + shell.size / 4) {
    shell.active = false;
    octopus.active = false;
  }
  // overlap for the octopus
  if (
    krab.x > octopus.x &&
    octopus.active &&
    krab.y > octopus.y &&
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
    krab.x + krab.w > waterMaze.wall1.x  &&
    krab.x < waterMaze.wall1.x + waterMaze.wall1.w &&
    krab.y + krab.h > waterMaze.wall1.y &&
    krab.y < waterMaze.wall1.y + waterMaze.wall1.h
  ) {
    state = "loss";
  }
  //over lap check for wall 2
  if (
    krab.x + krab.w > waterMaze.wall2.x &&
    krab.x < waterMaze.wall2.x + waterMaze.wall2.w &&
    krab.y + krab.h > waterMaze.wall2.y &&
    krab.y < waterMaze.wall2.y + waterMaze.wall2.h
  ) {
    state = "loss";
  }
  //over lap check for wall 3
  if (
    krab.x + krab.w > waterMaze.wall3.x &&
    krab.x < waterMaze.wall3.x + waterMaze.wall3.w &&
    krab.y + krab.h > waterMaze.wall3.y &&
    krab.y < waterMaze.wall3.y + waterMaze.wall3.h
  ) {
    state = "loss";
  }
  //over lap check for wall 4
  if (
    krab.x + krab.w > waterMaze.wall4.x &&
    krab.x < waterMaze.wall4.x + waterMaze.wall4.w &&
    krab.y + krab.h > waterMaze.wall4.y &&
    krab.y < waterMaze.wall4.y + waterMaze.wall4.h
  ) {
    state = "loss";
  }
  //over lap check for wall 5
  if (
    krab.x + krab.w > waterMaze.wall5.x &&
    krab.x < waterMaze.wall5.x + waterMaze.wall5.w &&
    krab.y + krab.h > waterMaze.wall5.y &&
    krab.y < waterMaze.wall5.y + waterMaze.wall5.h
  ) {
    state = "loss";
  }
  //over lap check for wall 6
  //   if (
  //     krab.x + krab.w > waterMaze.wall6.x &&
  //     krab.x < waterMaze.wall6.x + waterMaze.wall6.w &&
  //     krab.y + krab.h > waterMaze.wall6.y &&
  //     krab.y < waterMaze.wall6.y + waterMaze.wall6.h
  //   ) {
  //     state = "loss";
  //   }
  //over lap check for wall 7
  if (
    krab.x + krab.w > waterMaze.wall7.x &&
    krab.x < waterMaze.wall7.x + waterMaze.wall7.w &&
    krab.y + krab.h > waterMaze.wall7.y &&
    krab.y < waterMaze.wall7.y + waterMaze.wall7.h
  ) {
    state = "loss";
  }
  // over lap check for sand 1
  let d1 = dist(krab.x, krab.y, sand.bank1.x, sand.bank1.y);
  if (d1 < krab.size / 2 + sand.bank1.size / 2) {
    state = "loss";
  }
  // over lap check for sand 2
  let d2 = dist(krab.x, krab.y, sand.bank2.x, sand.bank2.y);
  if (d2 < krab.size / 2 + sand.bank2.size / 2) {
    state = "loss";
  }
  // over lap check for sand 3
  let d3 = dist(krab.x, krab.y, sand.bank3.x, sand.bank3.y);
  if (d3 < krab.size / 2 + sand.bank3.size / 2) {
    state = "loss";
  }
  // over lap check for sand 4
  let d4 = dist(krab.x, krab.y, sand.bank4.x, sand.bank4.y);
  if (d4 < krab.size / 2 + sand.bank4.size / 2) {
    state = "loss";
  }
  // over lap check for sand 5
  let d5 = dist(krab.x, krab.y, sand.bank5.x, sand.bank5.y);
  if (d5 < krab.size / 2 + sand.bank5.size / 2) {
    state = "loss";
  }
  // over lap check for sand 6
  let d6 = dist(krab.x, krab.y, sand.bank6.x, sand.bank6.y);
  if (d6 < krab.size / 2 + sand.bank6.size / 2) {
    state = "loss";
  }
  //over lap check for sharks

  // overlap shark 1
  let s1 = dist(krab.x, krab.y, shark.b1.x, shark.b1.y);
  if (s1 < krab.size / 2 + shark.b1.size / 2) {
    state = "loss";
  }
  // overlap shark 2
  let s2 = dist(krab.x, krab.y, shark.b2.x, shark.b2.y);
  if (s2 < krab.size / 2 + shark.b2.size / 2) {
    state = "loss";
  }
  // overlap shark 3
  let s3 = dist(krab.x, krab.y, shark.b3.x, shark.b3.y);
  if (s3 < krab.size / 2 + shark.b3.size / 2) {
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
  let h1 = dist(krab.x, krab.y, home.x, home.y);
  if (h1 < home.size / 2 + krab.size / 2) {
    state = "stage2";
  }
}
function mousePressed() {
  if (state === "title") {
    state = "simulation";
  }
}

function stage2() {
  // checkOffscreen2();
  display2();
  checkOverlap2();
  controlUser();
  babyKrab();
}

function display2() {

 
  // starting wall
  push();
  noStroke();
  fill(224, 222, 159);
  rect(
    startWall.wall1.x,
    startWall.wall1.y,
    startWall.wall1.h,
    startWall.wall1.w
  );
  pop();
  // ending wall
  push();
  noStroke();
  fill(224, 222, 159);
  rect(
    startWall.wall2.x,
    startWall.wall2.y,
    startWall.wall2.h,
    startWall.wall2.w
  );
  pop();
  // wall 1 display
  push();
  noStroke();
  fill(159, 222, 100);
  rect(
    colorWall.wall1.x,
    colorWall.wall1.y,
    colorWall.wall1.w,
    colorWall.wall1.h
  );
  pop();
  // wall 2 display
  push();
  noStroke();
  fill(237, 92, 228);
  rect(
    colorWall.wall2.x,
    colorWall.wall2.y,
    colorWall.wall2.w,
    colorWall.wall2.h
  );
  pop();
  // wall 3 display
  push();
  noStroke();
  fill(95, 81, 240);
  rect(
    colorWall.wall3.x,
    colorWall.wall3.y,
    colorWall.wall3.w,
    colorWall.wall3.h
  );
  pop();

  // wall 4 display
  push();
  noStroke();
  fill(95, 81, 240);
  rect(
    colorWall.wall4.x,
    colorWall.wall4.y,
    colorWall.wall4.w,
    colorWall.wall4.h
  );
  pop();

  // wall 5 display
  push();
  noStroke();
  fill(159, 222, 100);
  rect(
    colorWall.wall5.x,
    colorWall.wall5.y,
    colorWall.wall5.w,
    colorWall.wall5.h
  );
  pop();

  // wall 6 display
  push();
  noStroke();
  fill(237, 92, 228);
  rect(
    colorWall.wall6.x,
    colorWall.wall6.y,
    colorWall.wall6.w,
    colorWall.wall6.h
  );
  pop();
    // krab display
    image(imgkrab, krab.x, krab.y, krab.size, krab.size);
}
function checkOverlap2() {
  // start and end wall
  // starting wall
  if (
    krab.x + krab.w > startWall.wall1.x  &&
    krab.x < startWall.wall1.x + startWall.wall1.h &&
    krab.y + krab.h > startWall.wall1.y &&
    krab.y < startWall.wall1.y + startWall.wall1.w
  ) {
    state = "loss";
  }
// ending wall
if(
krab.x + krab.w > startWall.wall2.x  &&
krab.x < startWall.wall2.x + startWall.wall2.h &&
krab.y + krab.h > startWall.wall2.y &&
krab.y < startWall.wall2.y + startWall.wall2.w
) {
state = "loss";
}

// the lose colours

// overlap for 1st green and pink
// green
if (
  krab.x + krab.w >colorWall.wall5.x  &&
  krab.x <colorWall.wall5.x +colorWall.wall5.w &&
  krab.y + krab.h >colorWall.wall5.y &&
  krab.y <colorWall.wall5.y +colorWall.wall5.h
) {
  state = "loss";
}
// pink
if (
  krab.x + krab.w >colorWall.wall6.x  &&
  krab.x <colorWall.wall6.x +colorWall.wall6.w &&
  krab.y + krab.h >colorWall.wall6.y &&
  krab.y <colorWall.wall6.y +colorWall.wall6.h
) {
  state = "loss";
}


// over lap for the 2nd green and purple

// purple 
if (
  krab.x + krab.w >colorWall.wall3.x  &&
  krab.x <colorWall.wall3.x +colorWall.wall3.w &&
  krab.y + krab.h >colorWall.wall3.y &&
  krab.y <colorWall.wall3.y +colorWall.wall3.h
) {
  state = "loss";
}
// green
if (
  krab.x + krab.w >colorWall.wall1.x  &&
  krab.x <colorWall.wall1.x +colorWall.wall1.w &&
  krab.y + krab.h >colorWall.wall1.y &&
  krab.y <colorWall.wall1.y +colorWall.wall1.h
) {
  state = "loss";
}

}
function babyKrab(){
  let b2 = dist(krab.x, krab.y, babyKrab2.x, babyKrab2.y);
  if (b2 < babyKrab2.size / 2 + krab.size / 2) {
    state = "Ending";
  }


}
