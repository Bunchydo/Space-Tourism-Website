let currentTechIndex = 0;

// DOM elements
let technologyTerminology = document.querySelector(".technology-wrapper__left_row1");
let technologyVehicleName = document.querySelector(".technology-wrapper__left_row2");
let technologyParagraph = document.querySelector(".technology-wrapper__left_row3");
let technologyImage = document.querySelector(".technology-image");
let technologyNumberSwitcher = document.querySelectorAll(".select-number-switcher");

// Media query setup
const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");
const mobileQuery = window.matchMedia("(max-width: 767px)");

// Dynamic JSON path (works for both local and GitHub Pages)
const repoName = "Space-Tourism-Website";
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const dataPath = isLocalhost ? "../../../data.json" : `/${repoName}/data.json`;

function loadTechSlide(idx) {
  currentTechIndex = idx;

  // Update switcher styles
  technologyNumberSwitcher.forEach((btn, i) => {
    btn.style.backgroundColor = i === idx ? "white" : "transparent";
    btn.style.color = i === idx ? "black" : "white";
  });

  fetch(dataPath)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      const slide = data.technology[idx];
      technologyVehicleName.textContent = slide.name;
      technologyParagraph.textContent = slide.description;

      const useLandscape = tabletQuery.matches || mobileQuery.matches;
      const newSrc = useLandscape ? slide.images.landscape : slide.images.portrait;
      technologyImage.src = newSrc;

      // Optional styling
      technologyVehicleName.style.fontSize = "60px";
      technologyParagraph.style.fontSize = "18px";
      technologyParagraph.style.letterSpacing = "2px";
      technologyParagraph.style.lineHeight = "4vh";
    })
    .catch(err => {
      console.error("Error loading technology slide:", err);
    });
}

// Number button click events
technologyNumberSwitcher.forEach((btn, i) => {
  btn.addEventListener("click", () => loadTechSlide(i));
});

// Recalculate on viewport resize
tabletQuery.addEventListener("change", () => loadTechSlide(currentTechIndex));
mobileQuery.addEventListener("change", () => loadTechSlide(currentTechIndex));

// Initial load after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  loadTechSlide(0);
});

// Mobile nav toggle
let hambugerIcon = document.querySelector(".hambuger-wrapper");
let closeIcon = document.querySelector(".close-menu");
let navMenu = document.querySelector(".navigation-bar");

function toggleMenu() {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}

hambugerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
