let b= Math.round(Math.random()*100);window.alert(b)+1;
      let count=0;
      document.getElementById("").innerHTML="pic.jpg"
    function printing(){
             if(count<4){
                    let a = document.getElementById("num").value;
                    if(a<=100 && a>=1){
                     if(a==b){
                        document.getElementById("hint").innerHTML="Woah it is the number";
                        
                     }
                      
                     else {
                           if(a>b){
                                  document.getElementById("hint").innerHTML="think lower";
                                  document.getElementById("num").value = "";
                                  }
                           else{
                               document.getElementById("hint").innerHTML="think greater";
                               document.getElementById("num").value = "";
                               }
                           }
                    }
                   else{
                       document.getElementById("hint").innerHTML="enter number between 1 and 100";
                       document.getElementById("num").value = "";}
                 count++;
                  }
                  else{
                      document.getElementById("hint").innerHTML="game over";     
                 }
                  document.getElementById("chance").innerHTML=5-count;
                }
                
