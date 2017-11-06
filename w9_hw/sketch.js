var earth;
var moon;
var sun;

var counter = 0;
var counter2 = 0;
var counter3 = .2;

var speed = 2;
var speed2 = 1;
var speed3 = .2;


function preload(){
    
    cmd = loadImage("cmd.png");
    z = loadImage("z.svg");

}


function setup(){
    createCanvas(1000,1000);
    imageMode(CENTER);

}

function draw(){
    background(100);
    
 

    
    push();

    
        translate(300,600);
        rotate(radians(counter));
        scale(2);
        image(cmd,0,2);
           
            push();
                translate(0,0);
                rotate(radians(counter));
//                scale(1);
                image(z,0,0);
                 
    
             pop();
    pop();
        
        counter += speed;
        counter2 += speed2;
        counter3 += speed3;
}