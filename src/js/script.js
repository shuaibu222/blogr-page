// ***** Hamburger DOM ***** //
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const hamMenu = document.getElementById("accordion");
const menu2 = document.querySelector(".menu2");
const hasFades = document.querySelectorAll(".has-fade");

// ***** Accordion DOM ***** //
const accordion = document.querySelector(".accordion");
const label = document.querySelectorAll(".label");
const content = document.querySelectorAll(".content");

// this is the nav itself
hamburgerBtn.addEventListener("click", () => {
  // hamburger button
  hamburgerBtn.classList.toggle("open");
  // hamburger menu
  hamburgerBtn.classList.toggle("visible");
  // accordion
  hamMenu.classList.toggle("display");

  if (header.classList.contains("active")) {
    hasFades.forEach(function (h) {
      h.classList.remove("fade-in");
      h.classList.add("fade-out");
    });
  } else {
    hasFades.forEach(function (h) {
      h.classList.add("fade-in");
      h.classList.remove("fade-out");
    });
  }
});

// this is the accordion JS code
accordion.addEventListener("click", function (a) {
  const id = a.target.dataset.id;

  if (id) {
    content.forEach(function (contents) {
      contents.classList.add("display");
    });

    const element = document.getElementById(id);
    element.classList.toggle("visible");
  }
});
