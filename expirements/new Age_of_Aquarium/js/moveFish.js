/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */
"use strict";
function moveFish(fish) {
  // direction change for the fishes
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  // movements for the fishes
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // contraisnt to keep the fishes in the aquarium
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}
