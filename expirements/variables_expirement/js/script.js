/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let hat = {
    topX: 290,
    topY: 0,
    topW: 60,
    topH: -70,

    bottomX: 250,
    bottomY: 0,
    bottomW: 140,
    bottomH: 20,
}
let arm = {
    x: 270,
    y: 340,
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

createCanvas(500, 500);

angleMode(DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
   background (255,255,255);

    

noStroke();
// this is the body
fill(199,21,133);
ellipse(320,400,220,200);

fill(255,228,196);
ellipse(320,400,190,170);



// this is the right Ear
fill(199,21,133);
ellipse(360,220,80,70);

fill(255,228,196);
ellipse(360,220,60,50);


// this is the left Ear
fill(199,21,133);
ellipse(280,220,80,70);

fill(255,228,196);
ellipse(280,220,60,50);



// this is the Head
fill(199,21,133);
ellipse(320,270,150,120);

fill(255,228,196);
ellipse(320,280,110,85);

//eyes
//left eye
fill(255,250,240);
ellipse(300,230,22,20);



//right eye
fill(255,250,240);
ellipse(340,230,22,20);


//mouth
fill(199,21,133);
ellipse(320,275,60,40);
    
 // hat attempt
fill(0)
hat.topY = constrain(mouseY, 70, 210);
 rect(hat.topX, hat.topY, hat.topW, hat.topH);
 
 hat.bottomY = constrain(mouseY,70,210);
  fill(150)
 rect(hat.bottomX,hat.bottomY, hat.bottomW,hat.bottomH);


// angry brows
let browOpacity = map(mouseY,210,70, 0, 255);

fill(0, 0, 0, browOpacity);
let browH = map(mouseY,210, 70, -15, -30 );
let browW =map(mouseY,210, 70, -40, -60);

//    rect(275,210,40,15);

rect(315,225,browW,browH);

let rightBrowH =map(mouseY,210,70, -15,-30);
let rightBrowW =map(mouseY,210,70, 40, 60);
fill(0, 0, 0, browOpacity);
   rect(320,225,rightBrowW,rightBrowH);


   //left arm and right arm
  
 
    
    push();
    let angle = map(mouseY, height, 0, 0, 180);
    translate(arm.x, arm.y);
    rotate(angle);
    fill(199,21,133)
    ellipse(0, 50, 40, 150);
    
    pop();
    
     push();
    let angle2 = map(mouseY, height, 0, 0, -180);
    translate(arm.x + 100, arm.y);
    rotate(angle2);
    fill(199,21,133)
    ellipse(0, 50, 40, 150);
    pop();
   
  


    

    



   





}