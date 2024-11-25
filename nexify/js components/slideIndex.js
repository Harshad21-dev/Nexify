let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide'); // Select all slides
  slides.forEach((slide) => (slide.style.display = 'none')); // Hide all slides
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; // Loop back to the first slide
  slides[slideIndex - 1].style.display = 'block'; // Show the current slide
  setTimeout(showSlides, 6000); // Change slide every 6 seconds
}

// Start the slideshow
showSlides();