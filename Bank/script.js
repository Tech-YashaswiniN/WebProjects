let slideIndex = 0;
let autoSlideInterval;

document.addEventListener("DOMContentLoaded", function() {
    showSlides();  // Start the slideshow when the page loads
    autoSlideInterval = setInterval(showSlides, 3000);  // Change slide every 3 seconds
});

function plusSlides(n) {
    clearInterval(autoSlideInterval);  // Stop the auto slideshow when navigating manually
    showSlides(slideIndex += n);  // Manually move to the next/previous slide
    autoSlideInterval = setInterval(showSlides, 3000);  // Resume automatic slideshow after navigation
}

function currentSlide(n) {
    clearInterval(autoSlideInterval);  // Stop the auto slideshow when a dot is clicked
    showSlides(slideIndex = n - 1);  // Show the selected slide
    autoSlideInterval = setInterval(showSlides, 3000);  // Resume automatic slideshow
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides and remove 'active' class from dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Update slide index and loop back to first slide if necessary
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
