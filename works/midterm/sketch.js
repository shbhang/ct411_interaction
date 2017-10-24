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

var img2 = {
    loc: 0, 
    size: 400,
    x: 800,
    y: 100,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0   // no comma for the last one
};

var courtmusic;
var orchestra;

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
    img1.loc = loadImage("royalcourtmusic.jpg");
    img2.loc = loadImage("orchestra.jpg");
    courtmusic = loadSound("royalMusic.mp3");
    orchestra = loadSound("hisaishijoe.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
//    imageSize = 400;
    
    

}

function draw(){
    background(col);
    image(img1.loc, img1.x, img1.y, img1.size, img1.size);
    image(img2.loc, img2.x, img2.y, img2.size, img2.size);

    
}

function mousePressed(){
        img1.top = img1.y;
        img1.left = img1.x;
        img1.right = img1.x + img1.size;
        img1.bottom = img1.y + img1.size;
        
        img2.top = img2.y;
        img2.left = img2.x;
        img2.right = img2.x + img2.size;
        img2.bottom = img2.y + img2.size;
    
    if (mouseX > img1.left && mouseX < img1.right && mouseY > img1.top && mouseY < img1.bottom){
        col = 255;
          courtmusic.play();
    }
        
    
    if (mouseX > img2.left && mouseX < img2.right && mouseY > img2.top && mouseY < img2.bottom){
        col = 150;
          courtmusic.stop();
        orchestra.play();    
        }
            
 
        if (mouseX < img2.left && mouseX > img2.right && mouseY < img2.top && mouseY > img2.bottom){
        col = 100;
          courtmusic.stop();
        orchestra.stop(); 
    }
        
        
    
    
    
    
}
  
    
