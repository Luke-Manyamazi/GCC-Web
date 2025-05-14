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

document.querySelectorAll(".toggle-trigger").forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    const listItems = trigger
      .closest("ul")
      .querySelectorAll("li:not(.toggle-trigger)");
    listItems.forEach((item) => {
      item.classList.toggle("visible");
      item.classList.toggle("hidden");
    });

    const icon = trigger.querySelector(".icon");
    if (icon.classList.contains("fa-plus-circle")) {
      icon.classList.remove("fa-plus-circle");
      icon.classList.add("fa-minus-circle");
    } else {
      icon.classList.remove("fa-minus-circle");
      icon.classList.add("fa-plus-circle");
    }
  });
});
