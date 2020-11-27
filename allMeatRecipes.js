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


    // Carousel 

    var slideIndex = 0;
    showSlides();

    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 12000); // Change image every 2 seconds
    }

    //OPTION 2

    
    // var slideIndex = 1;
    // // Next/previous controls
    // showSlides(slideIndex);

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    //     }
    
    //     // Thumbnail image controls
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    //     }
    
    // function showSlides(n) {
    // var i;
    // var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";

    // }

    
    }); 
    