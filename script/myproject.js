/* Horizontal-scroll*/

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".marquee-container");
  const marquee = document.querySelector(".js-marquee");

  let containerWidth = container.offsetWidth;
  let marqueeWidth = marquee.offsetWidth;

  marquee.style.left = `${containerWidth}px`;

  const animateMarquee = () => {
    let currentLeft = parseInt(marquee.style.left, 10);

    if (currentLeft < -marqueeWidth) {
      marquee.style.left = `${containerWidth}px`;
      currentLeft = containerWidth;
    } else {
      marquee.style.left = `${currentLeft - 1}px`;
    }
  };

  setInterval(animateMarquee, 20);
});

/*Carousel*/

const slides = document.querySelectorAll(".carousel-slide img");
const bullets = document.querySelectorAll(".carousel-bullets .bullet");
 
let currentSlide = 0;
 
function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));
 
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }
 
  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
}
 function prevSlide() {
    showSlide(currentSlide - 1)
 }
 function nextSlide() {
    showSlide(currentSlide + 1)
 }

 document.querySelector(".next").addEventListener("click",nextSlide);
 document.querySelector(".prev").addEventListener("click",prevSlide);
 

bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      showSlide(index);
    });
  });
  function autoSlide() {
    nextSlide();
  }
  setInterval(autoSlide, 2000);