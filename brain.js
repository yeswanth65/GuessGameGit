let b= Math.round(Math.random()*100);window.alert(b)+1;
      let count=0;
      let round=10;
      document.getElementById("").innerHTML="pic.jpg"
    function printing(){
             if(count<round-1){
                    let a = document.getElementById("num").value;
                    if(a<=100 && a>=1){
                     if(a==b){
                        document.getElementById("hint").innerHTML="You Guessed it right<br>Score:"+((round-count)*10);
                        
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
                      document.getElementById("hint").innerHTML="Game over <br> The number is "+(b+1); 
                      document.getElementsByClassName("loss").innerHTML="lost.jpg"
                 }
                  document.getElementById("chance").innerHTML=count;
                }
                
