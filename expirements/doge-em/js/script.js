/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// fishes object

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

let fishTail = {
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
}
// whale object

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
x:140,
y:260,
size: 100,
fill: {
r:70,
g:100,
b:230,
}
}
let whaleEnd = {
    x:80,
    y:260,
    size: 40,
    fill: {
    r:70,
    g:100,
    b:230,
    }

}
let whaleBelly ={
    x:250,
    y:280,
    size: 40,
    fill: {
    r:255,
    g:253,
    b:208,

    }
}
let whaleArm ={
        x:250,
        y:280,
        size: 40,
        fill: {
        r:70,
        g:80,
        b:240,
    
        }

    }
    let whaleEye = {
    x:250,
    y:280,
    size: 40,
    fill: (255)
    };


/**
 * Description of preload
*/
function preload() {

let slider;

}


/**
 * Description of setup
*/
function setup() {

createCanvas(windowWidth,windowHeight);

fishes.y =random (0,height);
fishes.vx = fishes.speed;

fishes.y =random (0,height);
fishes.vx = fishes.speed;


fishTail.y =random (0,height);
fishTail.vx = fishTail.speed;


fishTail.y =random (0,height);
fishTail.vx = fishTail.speed;

//slider = createSlider (0,1,0.2,0.0001);
//slider.position(10,10);
//slider.style("width","100px");


}




/**
 * Description of draw()
*/
function draw() {

background (0,0,139);


// fishes movement
fishes.x =fishes.x + fishes.vx;
fishes.y = fishes.y + fishes.vy;

if (fishes.x > width){
    fishes.x = 0;
    fishes.y =random (0,height);
// fish tail movement

fishTail.x =fishTail.x + fishTail.vx;
fishTail.y = fishTail.y + fishTail.vy;

if (fishTail.x > width){
    fishTail.x = 0;
    fishTail.y =random (0,height);
}
}
// the whales movement

//whale.x = mouseX;
//whale.y = mouseY;

// the whale Tail Movement






// the Whale End movement


// whale eye movement




//whale Arm movement




// keeping the fishes away




//display for fishes

fill(fishes.fill.r,fishes.fill.g,fishes.fill.b);
ellipse(fishes.x,fishes.y,20,10);

//fish tail
fill(fishTail.fill.r,fishTail.fill.g,fishTail.fill.b);
ellipse(fishTail.x,fishTail.y,2,7);



// display for whale
fill(whale.fill.r,whale.fill.g,whale.fill.b);
ellipse(whale.x, whale.y, 180,100);

//whale belly
fill(whaleBelly.fill.r,whaleBelly.fill.g,whaleBelly.fill.b);
ellipse(whaleBelly.x, whaleBelly.y, 120,40);




//whale tail

fill(whaleTail.fill.r,whaleTail.fill.g,whaleTail.fill.b)
noStroke()
ellipse (whaleTail.x, whaleTail.y, 110,50)



//whale tail end
fill(whaleEnd.fill.r,whaleEnd.fill.g,whaleEnd.fill.b)
noStroke()
ellipse (whaleEnd.x, whaleEnd.y, 20,70)

//whale Arm

fill(whaleArm.fill.r,whaleArm.fill.g,whaleArm.fill.b);
ellipse(whaleArm.x, whaleArm.y, 60,100);


// whale eye

fill(whaleEye.fill.r,whaleEye.fill.g,whaleEye.fill.b);
ellipse(whaleEye.x, whaleEye.y, 10,10);







}