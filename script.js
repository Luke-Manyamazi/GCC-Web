document.addEventListener("DOMContentLoaded", () => {
  // === Hero Carousel Logic ===
  let slides = document.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return; // no slides found, stop

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

  // === Toggle trigger logic ===
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

  // === Form submission logic ===
  document
    .getElementById("visitForm")
    .addEventListener("submit", async function (e) {
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
          document.getElementById("visitForm").reset();
        } else {
          alert("Submission failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
      }
    });
});
