document.addEventListener('DOMContentLoaded', function(){
    let tabs = document.getElementsByTagName("li");
    let len  = tabs.length;
    let style = null;
    
    function myFunction (event){
        let style = event.target.style;

        style.color = "darkred";
        
        event.target 
    };
    
    
    for (i = 0; i< len; i++){
        style = tabs[i].style
     
        tabs[i].addEventListener('click',myFunction,true)
    
        
    
    };
    
     /*

        var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}*/


});
