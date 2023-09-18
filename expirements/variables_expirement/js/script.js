/**
 * Title of Project
 * Author Name
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


/**
 * Description of setup
*/
function setup() {

createCanvas(500, 500);


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
fill(105,105,105)
 rect(250, mouseY, 140,20);

 fill(0)
rect(290,mouseY, 60,-70);


// angry brows
rect.fill = map(0,mouseY,width,0,15);
fill(rect.fill);
fill(mouseY)
   rect(275,200,40,15);

fill(mouseY)
   rect(320,200,40,15);


   


    

    



   





}