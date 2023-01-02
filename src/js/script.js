// ***** Hamburger DOM ***** //
const hamburgerBtn = document.querySelector(".hamburger-icon");
hamMenu = document.getElementById("accordion");

// ***** Accordion DOM ***** //
const accordion = document.querySelector(".accordion");
const label = document.querySelectorAll(".label");
const content = document.querySelectorAll(".content");

// this si the nav itself
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("ham-icon");
  hamMenu.classList.toggle("display");
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
