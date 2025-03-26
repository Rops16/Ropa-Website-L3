// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }
// navigation
const hamburger = document.querySelector(".hamburger");
const navMenuLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenuLinks.classList.toggle("active");
})