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
headSizeP:100,
eyes:{
    size: 15,
    xOffset: 25,
    yOffset: 10
},
mouthSizeP:{
    size: 10
},
PapaBearEar :{
    size : 30,
    xOffset: 30,
    yOffset: 10,
},
size: 100,
vx: 0,
vy: 0,
speed: 2

};

let MamaBear = {
x: undefined,
y: 250,
headSizeM: 100,
eyes:{
    size: 15,
    xOffset: 25,
    yOffset: 10
},
mouthSizeM:{
    size:10
},
size:100,
vx: 0,
vy: 0,
speed: 2,

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
MamaBear.eyes.xOffset = map(height, 0, width, 10, 30);
PapaBear.eyes.xOffset = map(height, 0, width, 10, 30);
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

// papabear display
// ellipse(PapaBear.x,PapaBear.y,PapaBear.size);


noStroke();


// this is the right Ear
fill(199,21,133);
ellipse(PapaBear.x,PapaBear.y,PapaBear.size);

fill(255,228,196);
ellipse(PapaBear.x,PapaBear.y,PapaBear.size);


// this is the left Ear
fill(199,21,133);
ellipse(PapaBear.x,PapaBear.y,30);

fill(255,228,196);
ellipse(PapaBear.x,PapaBear.y,30);



// this is the Head
fill(199,21,133);
ellipse(PapaBear.x,PapaBear.y,PapaBear.headSizeM);

// fill(255,228,196);
// ellipse(PapaBear.x,PapaBear.y,PapaBear.size);

//eyes
//left eye
fill(255,250,240);
ellipse(PapaBear.x - PapaBear.eyes.xOffset, PapaBear.y - PapaBear.eyes.yOffset, PapaBear.eyes.size);

//right eye
fill(255,250,240);
ellipse(PapaBear.x + PapaBear.eyes.xOffset, PapaBear.y - PapaBear.eyes.yOffset, PapaBear.eyes.size);

//mouth
fill(199,21,133);
ellipse(PapaBear.x,PapaBear.y, 30);



// mamabear display
fill(130,255,80)
 ellipse(MamaBear.x,MamaBear.y,MamaBear.size);
 
 //left eye
 fill(255,250,240);
 ellipse(MamaBear.x - MamaBear.eyes.xOffset, MamaBear.y - MamaBear.eyes.yOffset, MamaBear.eyes.size);
 
 //right eye
 fill(255,250,240);
 ellipse(MamaBear.x + MamaBear.eyes.xOffset, MamaBear.y - MamaBear.eyes.yOffset, MamaBear.eyes.size);
 
}
function mousePressed(){
    if (state === 'title'){
        state = 'simulation';
    }


}