    function setup(){
    createCanvas(1920,1080);

    
}

    function draw(){
    
    
        background(250);
    
    
        var x = 0;
        
        while (x <= width) {
        fill(242,239,121,100);
        ellipse(x,110,400,400);
        noStroke();
    
        x = x + 600;
        }
        
        fill(35,31,32,10 );
        for (var x = 0; x <= width; x = x + 150){
        for (var y = 0; y <= height; y = y + 150){
           
            ellipse(x,y,200,200);
        }
        
         
            
        }
        
          var x = 0;
        
        while (x <= width) {
        fill(244,135,166);
        ellipse(x,110,200,200);
        x = x + 600;
        }
        
      
    }

    
        

    
       
