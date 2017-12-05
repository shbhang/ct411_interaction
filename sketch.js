var bgcol = 255;
var bool = false;
var imgBool = false;
var bubbles = [];

//!constructor!//

function Bubble(x,y, img) {
    this.x = x;
    this.y = y;
    this.img = img;

    this.display = function() {
        imageMode(CENTER);
        image(this.img, this.x, this.y);
    }
    
    this.update = function() {
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }
    
}

function Eng (x,y,letter, index) {
    this.x = x;
    this.y = y;
    this.rectwidth = 130;
    this.rectheight = 200;
    this.letter = letter;
    this.top = this.y;
    this.bottom = this.y+ this.rectheight;
    this.left = this.x;
    this.right = this.x+ this.rectwidth;
    
     this.display = function() {
            text(letter, this.x, this.y+150);       
            rect(this.x,this.y, this.rectwidth, this.rectheight); 
    }
    
    
   this.clickbutton = function() {
   
   if(mouseX > this.left && mouseX < this.right && mouseY > this.top && mouseY < this.bottom){
       imgBool = true;
       
       bool = !bool;
//       if(bool){
//           bgcol = 0;
//       }else{
//           bgcol = 255;
//       }
       
   }
   }
   
   this.imgDisplay = function(){
//       if(bubbles.length >0){
//       bubbles[this.index].display();
//     }

   }
}


//!array!//


var alphabets = [];
var letters = ["A", "B", "C", "D", "E", "F", "G"];
var engs = [];
var increment = 200;
var x= 200;
//var song;

function preload() {
       
//    song = loadSound('song.mp3');
    
    for (var i = 0; i < 27; i++){
        alphabets[i] = loadImage ('images/alphabet' + i + '.png');
       
    }
}

function setup() {
    
//    song.play();
    createCanvas(windowWidth, windowHeight);
//       var r = floor(random(0, alphabets.length));  
        var engs1 = new Eng(x+ increment, height-450, letters[0], 0);
        engs.push(engs1);
}

function mousePressed() {
//    var r = floor(random(0, alphabets.length));  
//    var b = new Bubble(mouseX, mouseY, alphabets[r]);
    for (var i = 0; i < engs.length; i++) {
    engs[i].clickbutton();
    }

}

function draw() {

    background(bgcol);
    for (var i = 0; i < 26; i++) {
        var b = new Bubble(width/2, height/2, alphabets[i]);
        bubbles.push(b);
    }
//    for (var i = bubbles.length -1; i >= 0; i--) {
//        bubbles[i].update();
//        bubbles[i].display(); 
//    }
    for (var i = 0; i < engs.length; i++) {
    engs[i].display();
    }
//    engs[0].imgDisplay();
        if(imgBool){
       bubbles[0].display();
        }
    
    
//    bubbles[0].display();
    fill(0);
    textSize(200);
//    text(letters[0], 200, height-300);     
//     for (var i = 0; i < letters.length; i++){
//       text(letters[i], x+ increment*i, height-300);       
//            rect(x+ increment*i,height-450, 130, 200);     
//     }
}

