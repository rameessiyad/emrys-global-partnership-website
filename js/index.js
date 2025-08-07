// navbar toggle
const menuToggle = document.getElementById("menuToggle");
const mobileNavLinks = document.getElementById("mobileNavLinks");

let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileNavLinks.classList.remove("max-h-0", "opacity-0");
    mobileNavLinks.classList.add("max-h-[500px]", "opacity-100");
  } else {
    mobileNavLinks.classList.remove("max-h-[500px]", "opacity-100");
    mobileNavLinks.classList.add("max-h-0", "opacity-0");
  }
});

// faq toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      const content = toggleBtn.nextElementSibling;
      const icon = toggleBtn.querySelector(".faq-icon");
      const isOpen = content.classList.contains("open");

      // Close all others
      document.querySelectorAll(".faq-content").forEach((el) => {
        el.classList.remove("open");
        el.classList.remove("max-h-[524px]");
        el.style.maxHeight = null;
        el.style.paddingTop = "0px";
        el.style.paddingBottom = "0px";
      });
      document
        .querySelectorAll(".faq-icon")
        .forEach((el) => (el.textContent = "+"));
      document
        .querySelectorAll(".faq-toggle")
        .forEach((el) => el.classList.remove("bg-primary"));

      if (!isOpen) {
        content.classList.add("open");

        // 1. Apply padding first
        content.style.paddingTop = "16px";
        content.style.paddingBottom = "16px";

        // 2. Then recalculate height after padding is applied
        requestAnimationFrame(() => {
          content.classList.add("max-h-[524px]");
        });

        icon.textContent = "–";
        toggleBtn.classList.add("bg-primary");
      }
    });
  });
});

//form submission ajax
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultationForm");
  const messageDiv = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);

      fetch("sendMail.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          form.reset();

          messageDiv.innerText = data;
          messageDiv.classList.remove("text-red-500");
          messageDiv.classList.add("text-green-600", "font-medium");
        })
        .catch((error) => {
          console.error("Error:", error);
          messageDiv.innerText =
            "Something went wrong. Please try again later.";
          messageDiv.classList.remove("text-green-600");
          messageDiv.classList.add("text-red-500", "font-medium");
        });
    });
  }
});

//cta button
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta-button");
  const faqSection = document.querySelector("#faq");

  //initially hide it
  cta.classList.remove("show");

  window.addEventListener("scroll", () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile && window.scrollY > window.innerHeight) {
      cta.classList.add("show");
    } else {
      cta.classList.remove("show");
    }
  });
});
