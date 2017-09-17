var state = 1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
}

 
function draw(){
    
        if(state == 1){
            
            noFill()
            stroke (255,243,29);
            rect (600, 300,347, 105);
            
        }else if (state==2){
            
            fill(random(139),0,255);
            stroke (255,243,29);
            rect (600, 300,347, 105);
        
        }else if(state==3){
        
            noFill()
            stroke (255,243,29);
            rect (560, 290, 420, 130);
        
        }else if (state==4){
           
            fill(random (241),90,36);
            stroke (255,243,29);
            rect (560, 290, 420, 130);
        
        }else if (state==5){
            
             noFill()
             stroke (255,243,29);
             rect (520, 280, 493, 155);
            
        }else if (state==6){
             
             fill(57, random (181),74);
             stroke (255,243,29);
             rect (520, 280, 493, 155);
            
        }else if (state==7){
   
             noFill()
             stroke (255,243,29);
             rect (480, 270, 566, 180);
             
    
        }else if (state==8){
            
              fill(255,123,random(172));
              stroke (255,243,29);
              rect (480, 270, 566, 180)
            
        }else if (state==9){
            
              noFill()
              stroke (255,243,29);
              rect (440, 260, 639, 205);
       
        }else if (state==10){
            
              fill(252,random(238),33);
              stroke (255,243,29);
              rect (440, 260, 639, 205);
            
        
        }else if (state==11){
            
              noFill()
              stroke (255,243,29);
              rect (400, 250, 712, 230);
            

        }else if (state==12){
            
              fill(252,random(238),33);
              stroke (255,243,29);
              rect (400, 250, 712, 230);
            
        }else if (state==13){
            
              noFill()
              stroke (255,243,29);
              rect (360, 240, 785, 255);
            
            
        }else if (state==14){
            
              fill(random(105),246,249);
              stroke (255,243,29);
              rect (360, 240, 785, 255);
            
            
        }else if (state==15){
                  
                noFill()
                stroke (255,243,29);
                rect (320, 230, 858, 280);
            
            
        }else if (state==16){
            
                fill(34,random(92),221);
                stroke (255,243,29);
                rect (320, 230, 858, 280);
            
            
        
        }else if (state==17){
            
                noFill()
                stroke (255,243,29);
                rect (280, 220, 931, 305);
            
    
        }else if (state==18){
            
                fill(random(234),27,215);
                stroke (255,243,29);
                rect (280, 220, 931, 305);
            
        }else if (state==19){
            
                noFill()
                stroke (255,243,29);
                rect(240,210,1004,330);
            
        }else if (state==20){
            
                fill(252,random(239),0);
                stroke (255,243,29);
                rect(240,210,1004,330);
            
        }else if (state==21){
            
                noFill()
                stroke (255,243,29);
                rect(200,200,1077,355);
            
        }else{
            
                fill(random(249),45,45);
                stroke (255,243,29);
                rect(200,200,1077,355);
            
            
        }
    
}
     
    

function mousePressed(){
    if(state < 20){
        state = state +1;
    }else{
        state = 1;
    }
}