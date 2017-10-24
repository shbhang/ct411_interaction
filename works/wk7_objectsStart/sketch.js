var img;
var imageSize;

var imgX = 200;
var imgY = 100;
var imgSize = 400;

var imgLeft;
var imgTop;
var imgRight;
var imgBottom;

var col = 200;

function preload(){
    img = loadImage("sphynx_sq2.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    imageSize = 400;
    
    

}

function draw(){
    background(col);
    image(img, imgX, imgY, imgSize, imgSize);

    
}

function mousePressed(){
//    if (mouseX > rect1Left && mouseX < rect1Right && mouseY > rect1Top && mouseY < rect1Bottm){
//        col = 255;
//    }else{
//        col = 100;
//    }
}