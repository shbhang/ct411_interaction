//!constructor!//

function Bubble(x,y,img){
    this.x = x;
    this.y = y;
    this.img = img;
    
this.display = function() {
    imageMode(CENTER);
    image(this.img, this.x, this.y);
}     

this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);  
    }
}

//!arrays!//

var bubbles = [];
var alphabets = [];

function preload() {
    for (var i = 0; i <25; i++) {
      alphabets[i] = loadImage('images/alphabet' + i +'.png');  
        
    }
}

function setup() {
     createCanvas(windowWidth, windowHeight);
    
}

function mousePressed() {
    var r = floor(random(0, alphabets.length));
    var b = new Bubble(mouseX, mouseY, alphabets[r]);
    bubbles.push(b);
    
}

function draw() {
    background(255);
    for (var i = bubbles.length -1; i>=0; i--) {
        bubbles[i].update();
        bubbles[i].display();
        
    }
    
}