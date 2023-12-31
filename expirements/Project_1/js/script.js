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
function preload() {

}
//Krab object  
let Krab = {
    x: undefined,
    y: 250,
    headSizeK:70,
    eyes:{
        size: 15,
        xOffset: 25,
        yOffset: 10
    },
    legs:{
        x:10,
        y:10,
    
        size: 20
    },
    arms :{
        xOffset: 40,
        yOffset: - 50,
        w: 80,
        h: 70,
    },
    
    

};
let state = 'title';

/**
 * Description of setup
*/
function setup() {

// background info
    createCanvas (windowWidth,windowHeight);





}


/**
 * Description of draw()
*/
function draw() {
// background and function information
background (194, 178, 128)

if (state === 'title'){
    title();

}
    else if (state === 'simulation'){
    simulation();
    }
    else if (state === 'win') {
    win();
    }
    else if (state === 'Loss') {
     Loss();
    }
 

function title(){
    push();
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('Find the key and Escape!!!', width/2,height/2);
    pop();

}
function win(){
    push();
    textSize(64);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text('You Won!!', width/2,height/2);
    pop();

}
function Loss(){
    push();
    textSize(40);
    fill(150,150,255);
    textAlign(CENTER,CENTER);
    text('Krab Soup For You :(', width/2,height/2);
    pop();
}
function simulation(){
    checkOffscreen();
    checkOverlap();
    display();
    movements();
    controlUser();
    krabOffscreen();

}
//Krab Movements 
function controlUser(){
    if (keyIsDown(87)) {    //moving using the W key
        Krab.vy = -Krab.speed;
    }
    else if (keyIsDown(83)) {   //moving using the W key
        Krab.vy = Krab.speed;
    }
    else {
        Krab.vy =0;
    }
    
    if (keyIsDown(68)) {
        Krab.vx = Krab.speed;
    }
    else if (keyIsDown(65)) {
        Krab.vx = -Krab.speed;
    }
    else{
        Krab.vx = 0;
    }
    Krab.x += Krab.vx
    Krab.y += Krab.vy




}
function display (){
// Krab display
noStroke();
    
// body
   fill(194, 99, 31);
   ellipse(Krab.x,Krab.y,Krab.headSizeK);
// legs

// claws

//eyes 
    Krab.eyes.xOffset = map(height, 0, width, 10, 30);

// maze display

// // Obstacles and Walls
// fill(0);
// // Big Walls
// rect(120,0, 100, 460);
// rect(220,360, 260, 100);
// rect(340,130, 260, 110);
// rect(430,0, 100, 110);
// // End Maze
// rect(340,30, 60, 100);
// rect(530,100, 50, 10);
// rect(550,70, 50, 10);
// rect(530,40, 50, 10);
// // Bubble Run
// ellipse(60,100, 80);
// ellipse(0,220, 120);
// ellipse(120,320, 120);
// ellipse(0, 420, 120);



}

    
// check is crab touches borders
function checkOffscreen(){
    // check if the bears are long gone
    if (Krab.x < 0 || Krab.x > width || Krab.y < 0 || Krab.y > height){
        // loss ending 1
        state = 'Loss';
        
        }
    }
    function checkOverlap(){


    }
function movements(){

}
}
function krabOffscreen(){
    
}
function mousePressed() {
    if (state === 'title'){
        state = 'simulation';
    }
}
