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
      const isOpen = content.style.maxHeight;

      // Optional: Accordion behavior – close others
      const allContents = document.querySelectorAll(".faq-content");
      const allIcons = document.querySelectorAll(".faq-icon");
      const allToggles = document.querySelectorAll(".faq-toggle");

      allContents.forEach((el) => {
        if (el !== content) el.style.maxHeight = null;
      });
      allIcons.forEach((el) => {
        if (el !== icon) el.textContent = "+";
      });
      allToggles.forEach((el) => {
        if (el !== toggleBtn) el.classList.remove("bg-primary");
      });

      // Toggle clicked one
      if (isOpen) {
        content.style.maxHeight = null;
        icon.textContent = "+";
        toggleBtn.classList.remove("bg-primary");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "–";
        toggleBtn.classList.add("bg-primary");
      }
    });
  });
});

//form submission ajax
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("consultationForm");

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
          alert(data);
          form.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong. Please try again later.");
        });
    });
  }
});

//cta button
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelector(".cta-button");
  const faqSection = document.querySelector("#faq");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  const handleScroll = () => {
    const isMobile = window.innerWidth < 768;
    const faqInView = isInViewport(faqSection);

    if (!isMobile && window.scrollY > window.innerHeight && !faqInView) {
      cta.classList.add("show");
    } else {
      cta.classList.remove("show");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once initially
});
