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
    x: 50,
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
    
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3

    

};
let waterMaze ={
        Wall1:{
            x:120,
            y:0,
            w:100,
            h:460,

        Wall2:{
            x:220,
            y:360,
            w:260,
            h:100,

        },
        Wall3:{
            x:340,
            y:130,
            w:260,
            h:110,
        },

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
 else if (state === 'test'){
    test();
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
function test (){
    fill(255, 255, 0);
    ellipse(Krab.x,Krab.y,Krab.w,Krab.h)
}

function simulation(){
    checkOffscreen();
    checkOverlap();
    display();
    movements();
    controlUser();
    KrabOffscreen();

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
   ellipse(Krab.x,Krab.y,60,40,Krab.headSizeK);
// legs
    fill (194, 99, 31);
    rect(Krab.legs.x,Krab.legs.y,Krab.legs.size);
// claws

//eyes
    // left eye
    Krab.eyes.xOffset = map(height, 0, width, 5, 20);
    fill (0);
    ellipse (Krab.x - Krab.eyes.xOffset, Krab.y - Krab.eyes.yOffset, Krab.eyes.size);
    // right eye
    fill(0);
    ellipse(Krab.x + Krab.eyes.xOffset, Krab.y - Krab.eyes.yOffset, Krab.eyes.size);

// maze display

    // Obstacles and Walls
  
    // water walls
     fill (11, 139, 230);
    // wall1
     rect(waterMaze.Wall1.x,waterMaze.Wall1.y,waterMaze.Wall1.w,waterMaze.Wall1.h);
    // Wall 2
    //fill (11, 139, 230);
    //rect(waterMaze.Wall2.x,waterMaze.Wall2.y,waterMaze.Wall2.w,waterMaze.Wall2.h);
    // // Wall 3
    // rect(waterMaze.Wall3.x,waterMaze.Wall3.y,waterMaze.Wall3.w,waterMaze.Wall3.h);
    // // // Wall 4
    // rect(waterMaze.Wall4.x,waterMaze.Wall4.y,waterMaze.Wall4.w,waterMaze.Wall4.h);
    // // Wall 5
    // rect(waterMaze.Wall5.x,waterMaze.Wall5.y,waterMaze.Wall5.w,waterMaze.Wall5.h);
    // // Wall 6
    // rect(waterMaze.Wall6.x,waterMaze.Wall6.y,waterMaze.Wall6.w,waterMaze.Wall6.h);
    // // Wall 7
    // rect(waterMaze.Wall7.x,waterMaze.Wall7.y,waterMaze.Wall7.w,waterMaze.Wall7.h);

  


}

    
// check is crab touches borders
function checkOffscreen(){
    // check if the Krab is long gone
    if (Krab.x < 0 || Krab.x > width || Krab.y < 0 || Krab.y > height){
        // loss ending 1
        state = 'Loss';
        
        }
    }
    function checkOverlap(){
         //rect(430,0, 100, 110);
     if (Krab.y < waterMaze.Wall1.x -waterMaze.Wall1.h || Krab.x > waterMaze.Wall1.w || Krab.y < waterMaze.Wall1.y ){
        //if (Krab.x > waterMaze.Wall1.x - waterMaze.Wall1.w && Krab.x < waterMaze.Wall1.x + waterMaze.Wall1.w && Krab.y > waterMaze.Wall1.y - waterMaze.Wall1.h && Krab.y <  waterMaze.Wall1.y + waterMaze.Wall1.h){
         state = 'loss';
      }
        }
   


//   || Krab.y > waterMaze.Wall1.h  || Krab.x > waterMaze.Wall1.w 
;
    
function movements(){

}

function KrabOffscreen(){
    
}



};


function mousePressed() {
    if (state === 'title'){
        state = 'simulation';
    }
}
