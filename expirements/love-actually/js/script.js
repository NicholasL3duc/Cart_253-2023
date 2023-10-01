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

let state = 'title'; 

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


if (state === 'title'){
    title();

}
else if (state === 'simulation'){
simulation();
}
else if (state === 'love') {
    love();
}
else if (state === 'sadness') {
     sadness();
    }
}
function title(){
    push();
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('LOVE?', width/2,height/2);
    pop();
}

function simulation(){
    move();
    checkOffscreen();
    checkOverlap();
    display();
}
function love(){
    push();
    textSize(64);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text('SOULMATES!', width/2,height/2);
    pop();

}
function sadness(){
    push();
    textSize(40);
    fill(150,150,255);
    textAlign(CENTER,CENTER);
    text('Other Bears in the forest :(', width/2,height/2);
    pop();

}

function move(){

// moves the bears
PapaBear.x = PapaBear.x + PapaBear.vx;
PapaBear.y = PapaBear.y + PapaBear.vy;


MamaBear.x = MamaBear.x + MamaBear.vx;
MamaBear.y = MamaBear.y + MamaBear.vy;

}

function checkOffscreen(){
// check if the bears are long gone
if (PapaBear.x < 0 || PapaBear.x > width || PapaBear.y < 0 || PapaBear.y > height || MamaBear.x < 0 || MamaBear.x > width || MamaBear.y < 0 || MamaBear.y > height){
    // tear jerking ending
    state = 'sadness';
    }
}

function checkOverlap(){
// check if the bears meet
let d = dist(PapaBear.x,PapaBear.y,MamaBear.x,MamaBear.y);
if (d < PapaBear.size/2 + MamaBear.size/2){
    // BEST ENDING EVEEEEEER, they get married and happy ever after
    state = 'love';
}

}

function display(){
// display the bears
ellipse(PapaBear.x,PapaBear.y,PapaBear.size);
ellipse(MamaBear.x,MamaBear.y,MamaBear.size);

}
function mousePressed(){
    if (state === 'title'){
        state = 'simulation';
    }


}