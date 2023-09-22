/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let fishes = {
x: 0,
y: 250,
size: 20,
vx: 0,
vy: 0,
speed: 2,
fill: {
    r:20,
    g:70,
    b:240,
}

};

let whale = {
x:250,
y:250,
size:100,
fill: {
r:60,
g:100,
b:240,
}
}
let whaleTail = {
x:250,
y:250,
size: 70,
fill: {
r:70,
g:100,
b:230,
}


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

createCanvas(windowWidth,windowHeight);

fishes.y =random (0,height);
fishes.vx = fishes.speed;






}


/**
 * Description of draw()
*/
function draw() {

background (20, 20, 184);


// fishes movement
fishes.x =fishes.x + fishes.vx;
fishes.y = fishes.y + fishes.vy;

if (fishes.x > width){
    fishes.x = 0;
    fishes.y =random (0,height);

}
// the whales movement
whale.x = mouseX;
whale.y = mouseY;

whaleTail.x = mouseX;
whaleTail.y = mouseY;

// keeping the fishes away




//display for fishes

fill(fishes.fill.r,fishes.fill.g,fishes.fill.b);
ellipse(fishes.x,fishes.y,fishes.size);

// display for whale
fill(whale.fill.r,whale.fill.g,whale.fill.b);
ellipse(whale.x, whale.y, whale.size);

//whale tail
fill(whaleTail.fill.r,whaleTail.fill.g,whaleTail.fill.b)
ellipse (whaleTail.x, whaleTail.y, 20,80)

//whale


}