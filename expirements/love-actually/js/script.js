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
let papaBear = {
    x: undefined,
    y: 250,
    headSizeP:100,
    eyes:{
        size: 15,
        xOffset: 25,
        yOffset: 10
    },
    mouthSizeP:{
        x:10,
        y:10,
    
        size: 20
    },
    nose :{
        xOffset: 40,
        yOffset: - 50,
        w: 80,
        h: 70,

    },
    ear :{
        outside:{
            xOffset: 40,
            yOffset: - 50,
            w: 80,
            h: 70,
        },

        inside:{
            xOffset: 40,
            yOffset:-50,
            w: 65,
            h: 55

        },
        size : 30,
        xOffset: 30,
        yOffset: 10,
    },


    
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2

};

let mamaBear = {
    x: undefined,
    y: 250,
    headSizeM:100,
    eyes:{
        size: 15,
        xOffset: 25,
        yOffset: 10
    },
    mouthSizeM:{
        x:10,
        y:10,
    
        size: 20
    },
    nose :{
        xOffset: 40,
        yOffset: - 50,
        w: 80,
        h: 70,

    },
    ear :{
        outside:{
            xOffset: 40,
            yOffset: - 50,
            w: 80,
            h: 70,
        },

        inside:{
            xOffset: 40,
            yOffset:-50,
            w: 65,
            h: 55

        },
        size : 30,
        xOffset: 30,
        yOffset: 10,
    },


    
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,

};


let state = 'title'; 

/**
 * Description of setup
*/
function setup() {

createCanvas (windowWidth,windowHeight);


// set up for papaBear
papaBear.x = width/3 ;
 papaBear.vx = random(-papaBear.speed,papaBear.speed);
 papaBear.vy = random(-papaBear.speed,papaBear.speed);
// set up for mamaBear

mamaBear.x = 2 * width /3;
mamaBear.vx = random(-mamaBear.speed,mamaBear.speed);
mamaBear.vy = random(-mamaBear.speed,mamaBear.speed);

}


/**
 * Description of draw()
*/
function draw() {

background(0);
mamaBear.eyes.xOffset = map(height, 0, width, 10, 30);
papaBear.eyes.xOffset = map(height, 0, width, 10, 30);
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
    else if (state === 'egg'){
        egg();
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
    controlUser();
    papaOffscreen();
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
function egg(){
    push();
    textSize(40);
    fill(199,21,133);
    textAlign(CENTER,CENTER);
    text('You Are One Picky Bear???', width/2,height/2);
    pop();



}
function controlUser(){
if (keyIsDown(87)) {    //moving using the W key
    papaBear.vy = -papaBear.speed;
}
else if (keyIsDown(83)) {
    papaBear.vy = papaBear.speed;
}
else {
    papaBear.vy =0;
}

if (keyIsDown(68)) {
    papaBear.vx = papaBear.speed;
}
else if (keyIsDown(65)) {
    papaBear.vx = -papaBear.speed;
}
else{
    papaBear.vx = 0;
}
papaBear.x += papaBear.vx
papaBear.y += papaBear.vy

}
function move(){

// moves the bears
//papaBear.x = papaBear.x + papaBear.vx;
//papaBear.y = papaBear.y + papaBear.vy;


mamaBear.x = mamaBear.x + mamaBear.vx;
mamaBear.y = mamaBear.y + mamaBear.vy;

}
function papaOffscreen(){
    // check if the bears are long gone
    if (papaBear.x < 0 || papaBear.x > width || papaBear.y < 0 || papaBear.y > height ){
        // secret end
        state = 'egg';
        
        }
    }
function checkOffscreen(){
// check if the bears are long gone
if (papaBear.x < 0 || papaBear.x > width || papaBear.y < 0 || papaBear.y > height || mamaBear.x < 0 || mamaBear.x > width || mamaBear.y < 0 || mamaBear.y > height){
    // tear jerking ending
    state = 'sadness';
    
    }
}

function checkOverlap(){
// check if the bears meet
let d = dist(papaBear.x,papaBear.y,mamaBear.x,mamaBear.y);
if (d < papaBear.size/2 + mamaBear.size/2){
    // BEST ENDING EVEEEEEER, they get married and happy ever after
    state = 'love';
}

}

function display(){
// display the bears

// papaBear display
// ellipse(papaBear.x,papaBear.y,papaBear.size);


noStroke();


// this is the right Ear
fill(199,21,133);
ellipse(papaBear.x + papaBear.ear.outside.xOffset,papaBear.y + papaBear.ear.outside.yOffset,papaBear.ear.outside.w,papaBear.ear.outside.h);

fill(255,228,196);
ellipse(papaBear.x + papaBear.ear.inside.xOffset,papaBear.y + papaBear.ear.inside.yOffset,papaBear.ear.inside.w,papaBear.ear.inside.h);


// this is the left Ear
fill(199,21,133);
ellipse(papaBear.x - papaBear.ear.outside.xOffset,papaBear.y + papaBear.ear.outside.yOffset,papaBear.ear.outside.w,papaBear.ear.outside.h);


fill(255,228,196);
ellipse(papaBear.x - papaBear.ear.inside.xOffset,papaBear.y + papaBear.ear.inside.yOffset,papaBear.ear.inside.w,papaBear.ear.inside.h);



// this is the Head
fill(199,21,133);
ellipse(papaBear.x,papaBear.y,papaBear.headSizeP);

 fill(255,228,196);
 ellipse(papaBear.x,papaBear.y,papaBear.mouthSizeP);

//eyes
//left eye
fill(255,250,240);
ellipse(papaBear.x - papaBear.eyes.xOffset, papaBear.y - papaBear.eyes.yOffset, papaBear.eyes.size);

//right eye
fill(255,250,240);
ellipse(papaBear.x + papaBear.eyes.xOffset, papaBear.y - papaBear.eyes.yOffset, papaBear.eyes.size);

//nose
 fill(199,21,133);
ellipse(papaBear.x + papaBear.nose.xOffset, papaBear.y - papaBear.nose.yOffset, papaBear.nose.size);




// mamaBear display

//  this is the right Ear
fill(170,250,100);
ellipse(mamaBear.x + mamaBear.ear.outside.xOffset,mamaBear.y + mamaBear.ear.outside.yOffset,mamaBear.ear.outside.w,mamaBear.ear.outside.h);

fill(255,228,196);
ellipse(mamaBear.x + mamaBear.ear.inside.xOffset,mamaBear.y + mamaBear.ear.inside.yOffset,mamaBear.ear.inside.w,mamaBear.ear.inside.h);


// this is the left Ear
fill(170,240,100);
ellipse(mamaBear.x - mamaBear.ear.outside.xOffset,mamaBear.y + mamaBear.ear.outside.yOffset,mamaBear.ear.outside.w,mamaBear.ear.outside.h);


fill(255,228,196);
ellipse(mamaBear.x - mamaBear.ear.inside.xOffset,mamaBear.y + mamaBear.ear.inside.yOffset,mamaBear.ear.inside.w,mamaBear.ear.inside.h);



// this is the Head
fill(130,255,80);
ellipse(mamaBear.x,mamaBear.y,mamaBear.headSizeP);

 fill(255,228,196);
 ellipse(mamaBear.x,mamaBear.y,mamaBear.mouthSizeP);


//nose
 fill(130,255,80);
ellipse(mamaBear.x + mamaBear.nose.xOffset, mamaBear.y - mamaBear.nose.yOffset, mamaBear.nose.size);











fill(130,255,80)
 ellipse(mamaBear.x,mamaBear.y,mamaBear.size);
 
 //left eye
 fill(255,250,240);
 ellipse(mamaBear.x - mamaBear.eyes.xOffset, mamaBear.y - mamaBear.eyes.yOffset, mamaBear.eyes.size);
 
 //right eye
 fill(255,250,240);
 ellipse(mamaBear.x + mamaBear.eyes.xOffset, mamaBear.y - mamaBear.eyes.yOffset, mamaBear.eyes.size);
 
}
function mousePressed(){
    if (state === 'title'){
        state = 'simulation';
    }


}