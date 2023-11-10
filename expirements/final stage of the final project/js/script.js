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

/**
 * Description of setup
 */
function setup() {
  createCanvas(1400, 850);
  osc = new p5.triOcs();
  osc.start();
  osc.amp(0);
}
function playNote(note, duration) {
  osc.freq(miditofreq(note));
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
function draw() {}
