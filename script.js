// === Hero Carousel Logic ===
let slides = document.querySelectorAll(".carousel-slide");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds

// === Reveal Animation Logic ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target); // Animate once
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".from-left, .from-right").forEach((el) => {
  observer.observe(el);
});
