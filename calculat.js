var buttons=document.querySelectorAll("button");
var textb=document.getElementById("txt1");
var cler=false;
for (var item of buttons) 
{  
   item.addEventListener("click",(e)=>{
       var trt=e.target.innerText;
       if(trt=="x")
       {
           if(cler==true)
           {
               textb.value="";
               cler=false;
           }
          textb.value=textb.value+"*";
       }
       else if(trt=="C")
       {
        if(cler==true)
        {
            textb.value="";
            cler=false;
        }
         textb.value="";
       }
       else if(trt=="=")
       {
        
           textb.value=eval(textb.value);
           cler=true;
       }
       else
       {
        if(cler==true)
        {
            textb.value="";
            cler=false;
        }
        textb.value=textb.value+trt;     
       }
      
   })
}
