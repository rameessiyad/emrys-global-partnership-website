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
        if(el !== toggleBtn) el.classList.remove("text-[var(--primary-color)]")
      })

      // Toggle clicked one
      if (isOpen) {
        content.style.maxHeight = null;
        icon.textContent = "+";
        toggleBtn.classList.remove("text-[var(--primary-color)]")
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "–";
        toggleBtn.classList.add("text-[var(--primary-color)]")
      }
    });
  });
});
