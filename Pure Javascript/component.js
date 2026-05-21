// Dropdown
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.classList.remove("show");
  }
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

})

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(tab).classList.add("active");
  });
});

// Accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    accordionContents.forEach((accordionContent) => accordionContent.classList.remove("active"));

    content.classList.add("active");
  });
});

// Tooltip
const tooltip = document.getElementById("tooltip");
const tooltipButtons = document.querySelectorAll(".tooltip-btn");

tooltipButtons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    tooltip.innerText = button.dataset.tooltip;

    tooltip.style.opacity = "1";
    tooltip.style.left = e.pageX + 0 + "px";
    tooltip.style.top = e.pageY - 40 + "px";
  });

  button.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });
});

// Model
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show")
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
})