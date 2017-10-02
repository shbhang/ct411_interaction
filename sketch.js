var img;
var img2;
var isClicked = false;



function preload(){
    img = loadImage("sun.png");
    img2 = loadimage("moon.png");
   
    
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    
    
}


function draw(){
    
    background(39,170,225);
    imageMode(CENTER);
    image(img, width/2, height/2, 200, 200);
   
       
if (mouseIsPressed){
        
   background(0);          

  } else {
      
    background(39,170,225);
    
  }

    }


