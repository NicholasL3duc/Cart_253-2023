/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let notes = [60, 62, 64, 65, 67, 69, 71];
let osc;
let piano = {
    x: 120,
    y: 200,
    w: 200,
    h: 100,

}

/**
 * Description of setup
 */
function setup() {
  createCanvas(1400, 850);
  osc = new p5.TriOsc();
  osc.start();
  osc.amp(0);
}
function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.fade(0.5, 0.2);
  if (duration) {
    setTimeout(function () {
      osc.fade(0, 0.2);
    }, duration - 50);
  }
}

/**
 * Description of draw()
 */
function draw() {
// the piano
rect(
    piano.x,
    piano.y,
    piano.w,
    piano.h
    )

  let w = width / notes.length;
  for (let i = 0; i < notes.length; i++) {
    let x = i * w;
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      if (mouseIsPressed) {
        fill(113, 166, 222);
      } else {
        fill(49, 46, 148);
      }
    } else {
      fill(200);
    }
    rect(x, 0, w - 1, height - 1);
  }

// rect(
//     piano.x,
//     piano.y,
//     piano.w,
//     piano.h
//     )

function mousePressed() {
  let key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}
function mouseReleased() {
  osc.fade(0, 0.5);
}
