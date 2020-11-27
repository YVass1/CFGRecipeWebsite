/* First step is to tell browser to read html first 
then javascript*/
document.addEventListener('DOMContentLoaded',function() {
    let tabs = document.getElementsByTagName('li');
    let len  = tabs.length;
    let style = null;
    
    function myFunction (event){
        let style = event.target.style;
    
        style.color =  "rgb(110, 6, 6)";
        
        event.target 
    
        
    };
    
    
    for (i = 0; i< len; i++){
        style = tabs[i].style
     
        tabs[i].addEventListener('click',myFunction,true)
    
        
    
    };
    
    
    }); 
    
    for (i = 0; i< len; i++){
        style = tabs[i].style
     
        tabs[i].addEventListener('click',myFunction,true)
    
        
    
    };
    
    
    }); 
    
    
    
    

    
    