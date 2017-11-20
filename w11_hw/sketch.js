var words = ["it", "is", "freezing"];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20,102,247);
             
    fill(255);
    textSize(300);
    text(words[index], random(),300);
        

function mousePressed() {
        
        index = index + 1;
        
        if (index == words.length){
        index = 0;
            
        }
        
    }
 
}
    
   
