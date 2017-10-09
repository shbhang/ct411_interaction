var rectX = 300;
var rectY = 300;
var rectSize = 400;
var rectTop = rectY;
var rectBottom = rectY + rectSize;
var rectLeft = rectX;
var rectRight = rectX + rectSize;
var colR;


function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    
    background(0);
  
    if(mouseX > rectLeft && mouseX < rectRight && mouseY > rectTop && mouseY < rectBottom){
        colR = 249;  
                
                textSize(100);
                textAlign(CENTER);
                text("CODING IS", 700, 150);
                textAlign(CENTER);
                text("SO MUCH FUN", 900, 250);
                textAlign(CENTER);
                text("JOYFUL", 1035, 350);
        
    }else{
        colR = 0;   
    }
        fill(colR, 0, 0);
        rect(rectX, rectY, rectSize, rectSize);
    
    
    
    
}