/* First step is to tell browser to read html first 
then javascript*/
document.addEventListener('DOMContentLoaded',function() {
    let tabs = document.getElementsByTagName('li');
    let len  = tabs.length;
    let style = "null" ;
    
    function myFunction (event){
        let style = event.target.style;
        style.color =  "rgb(110, 6, 6)";
    
        event.target 
        
    };
    
    $(".sub-menu li a").fitText(0.10);
    // $('.sub-menu li a').fitText(.5, { minFontSize: '6px', maxFontSize: '25px' });


    for (i = 0; i< len; i++){
        style = tabs[i].style 
        tabs[i].addEventListener('click',myFunction,true)

    };
    
    let recipes = document.getElementsByTagName('h4');
    let len1 = recipes.length;
    function myFunction1 (event){
        let style = event.target.style;
        if (style.colour !== 'red'){
            style.color = "red";
        } else {
        }
    
        event.target  
    };

    
    for (i = 0; i< len1; i++){
        style = recipes[i].style 
        recipes[i].addEventListener('click',myFunction1,true)

    };
    