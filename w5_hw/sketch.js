var img;
var img2;
var isClicked = false;
var bgcolor = 0;



function preload(){
    img = loadImage("sun.png");
    img2 = loadImage("moon.png");
   
    
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    
    
}


function draw(){
    
    background(bgcolor);
    imageMode(CENTER);
    
    if(isClicked){
        bgcolor = color(39,170,225);
    image(img, width/2, height/2, 600, 600);
   }else{
       image(img2, width/2, height/2, 480, 479);
       bgcolor = 0;
   }
       


    }


function mousePressed(){
        
         
    isClicked = !isClicked;
  }