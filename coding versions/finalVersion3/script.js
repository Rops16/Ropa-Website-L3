// navigation
const hamburger = document.querySelector(".hamburger");
const navMenuLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuLinks.classList.toggle("active");
});

//slideshow for resources page
var slideIndex = 1;

// Only run slideshow code if the elements exist
var slides = document.getElementsByClassName("mySlides");
if (slides.length > 0) {
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return; // Exit if no slides exist
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (dots.length > 0) { // Only run if dots exist
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex-1].className += " active";
    }
    
    slides[slideIndex-1].style.display = "block";
}