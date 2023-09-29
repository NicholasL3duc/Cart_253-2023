/**
 * love-actually
 * Nicholas Leduc
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}
let PapaBear = {
x: undefined,
y: 250,
size: 100,
vx: 0,
vy: 0,
speed: 3

};

let MamaBear = {
x: undefined,
y: 250,
size: 100,
vx: 0,
vy: 0,
speed: 3,

};

/**
 * Description of setup
*/
function setup() {

createCanvas (500,500)


// set up for PapaBear
PapaBear.x = width/3 ;
 PapaBear.vx = random(-PapaBear.speed,PapaBear.speed);
 PapaBear.vy = random(-PapaBear.speed,PapaBear.speed);
// set up for MamaBear

MamaBear.x = 2 * width /3;
MamaBear.vx = random(-MamaBear.speed,MamaBear.speed);
MamaBear.vy = random(-MamaBear.speed,MamaBear.speed);

}


/**
 * Description of draw()
*/
function draw() {

background(0);

PapaBear.x = PapaBear.x + PapaBear.vx;
PapaBear.y = PapaBear.y + PapaBear.vy;


MamaBear.x = MamaBear.x + MamaBear.vx;
MamaBear.y = MamaBear.y + MamaBear.vy;

ellipse(PapaBear.x,PapaBear.y,PapaBear.size);
ellipse(MamaBear.x,MamaBear.y,MamaBear.size);

}