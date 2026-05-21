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
});

// Tabs
const tabsContainer = document.querySelector(".tabs");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabsContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".tab-btn");

  if (!button) return;

  const tab = button.dataset.tab;

  tabButtons.forEach((btn) => btn.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  button.classList.add("active");
  document.getElementById(tab).classList.add("active");
});

// Accordion
const accordion = document.querySelector(".accordion");
const accordionContents = document.querySelectorAll(".accordion-content");

accordion.addEventListener("click", (e) => {
  const header = e.target.closest(".accordion-header");

  if (!header) return;

  const content = header.nextElementSibling;

  accordionContents.forEach((item) => {
    item.classList.remove("active");
  });

  content.classList.add("active");
});

// Tooltip
const tooltip = document.getElementById("tooltip");

document.addEventListener("mousemove", (e) => {
  const button = e.target.closest(".tooltip-btn");

  if (!button) {
    tooltip.style.opacity = "0";
    return;
  }

  tooltip.innerText = button.dataset.tooltip;

  tooltip.style.opacity = "1";
  tooltip.style.left = e.pageX + "px";
  tooltip.style.top = e.pageY - 40 + "px";
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".tooltip-btn")) {
    tooltip.style.opacity = "0";
  }
});

// Model
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
