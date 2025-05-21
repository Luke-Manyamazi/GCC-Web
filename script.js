document.addEventListener("DOMContentLoaded", () => {
  // === Hero Carousel Logic ===
  let slides = document.querySelectorAll(".carousel-slide");
  if (slides.length) {
    let index = 0;
    function showNextSlide() {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }
    setInterval(showNextSlide, 5000);
  }

  // === Reveal Animation Logic ===
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const revealEls = document.querySelectorAll(".from-left, .from-right");
  revealEls.forEach((el) => observer.observe(el));

  // === Toggle trigger logic ===
  document.querySelectorAll(".toggle-trigger").forEach(function (trigger) {
    const parentList = trigger.closest("ul");
    if (!parentList) return;

    trigger.addEventListener("click", function () {
      const listItems = parentList.querySelectorAll("li:not(.toggle-trigger)");
      listItems.forEach((item) => {
        item.classList.toggle("visible");
        item.classList.toggle("hidden");
      });

      const icon = trigger.querySelector(".icon");
      if (icon) {
        icon.classList.toggle("fa-plus-circle");
        icon.classList.toggle("fa-minus-circle");
      }
    });
  });

  // === Form submission logic ===
  const form = document.getElementById("visitForm");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phoneType: document.getElementById("phoneType").value,
        phone: document.getElementById("phone").value,
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
      };

      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzUAzIeymWaGmPRLj5K--keYF_qrsZBvbpVCotdN8dVxg-DeJi9Knw8iEr7kmUHd3HS/exec",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        if (result.result === "success") {
          alert("Form submitted successfully!");
          form.reset();
        } else {
          alert("Submission failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
});
