var img1 = {
    loc: 0, 
    size: 400,
    x: 200,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   // no comma for the last one
};

var meowmeow;


//var img;
//var imageSize;
//
//var imgX = 200;
//var imgY = 100;
//var imgSize = 400;
//
//var imgLeft;
//var imgTop;
//var imgRight;
//var imgBottom;

var col = 200;

function preload(){
    img1.loc = loadImage("frenchi.jpg");
    meowmeow = loadSound("johnnyMeowMeow.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
//    imageSize = 400;
    
    

}

function draw(){
    background(col);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);

    
}

function mousePressed(){
        img1.top = img1.y;
        img1.left = img1.x;
        img1.right = img1.x + img1.size;
        img1.bottom = img1.y + img1.size;
        
    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        col = 255;
          meowmeow.play();
    }
    
    
  
    
}