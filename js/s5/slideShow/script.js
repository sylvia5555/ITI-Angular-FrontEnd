let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let slideshowInterval;

showSlide(slideIndex);

function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function showPrevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function playSlideshow() {
    slideshowInterval = setInterval(showNextSlide, 1000); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}
