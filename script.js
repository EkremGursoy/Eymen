let currentSlideIndex = 0;
let autoSlideInterval;

// Function to show the current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  // Reset all slides
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

// Function to move the slide manually
function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  currentSlideIndex += direction;

  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }

  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }

  showSlide(currentSlideIndex);
}

// Function to start the automatic slider
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1); // Move to the next slide
  }, 3000); // Change slide every 3 seconds
}

// Function to stop the automatic slider
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Initialize the carousel and start the automatic slider
showSlide(currentSlideIndex);
startAutoSlide();
