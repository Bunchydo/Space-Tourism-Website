let currentTechIndex = 0;
let technologyTerminology = document.querySelector(".technology-wrapper__left_row1");
let technologyVehicleName = document.querySelector(".technology-wrapper__left_row2");
let technologyParagraph = document.querySelector(".technology-wrapper__left_row3");
let technologyImage = document.querySelector(".technology-image");
let technologyNumberSwitcher = document.querySelectorAll(".select-number-switcher");

const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");
const mobileQuery = window.matchMedia("(max-width: 767px)");


function loadTechSlide(idx) {
  console.clear();
  console.log(`→ loadTechSlide(${idx})`);
  currentTechIndex = idx;

  // highlight switcher dot
  technologyNumberSwitcher.forEach((other, i) => {
    other.style.backgroundColor = i === idx ? "white" : "transparent";
    other.style.color           = i === idx ? "black" : "white";
  });

  fetch("../../../data.json")
    .then(res => {
      console.log("Fetch response:", res.status, res.statusText);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      if (!data.technology || !Array.isArray(data.technology)) {
        throw new Error("Malformed JSON: missing data.technology array");
      }
      const slide = data.technology[idx];
      console.log("Slide data:", slide);

      technologyVehicleName.textContent   = slide.name;
      technologyParagraph.textContent     = slide.description;

      const useLandscape = tabletQuery.matches || mobileQuery.matches;
      console.log("Viewport matches tablet/mobile?", useLandscape);

      const newSrc = useLandscape
        ? slide.images.landscape
        : slide.images.portrait;
      console.log("Setting image.src =", newSrc);
      technologyImage.src = newSrc;

      // reapply inline font sizing
      technologyVehicleName.style.fontSize    = "60px";
      technologyParagraph.style.fontSize      = "18px";
      technologyParagraph.style.letterSpacing = "2px";
      technologyParagraph.style.lineHeight    = "4vh";
    })
    .catch(err => {
      console.error("Error in loadTechSlide:", err);
    });
}

// click handlers
technologyNumberSwitcher.forEach((btn, i) => {
  btn.addEventListener("click", () => loadTechSlide(i));
});

// respond to viewport changes
tabletQuery.addEventListener("change", () => {
  console.log("tabletQuery changed:", tabletQuery.matches);
  loadTechSlide(currentTechIndex);
});
mobileQuery.addEventListener("change", () => {
  console.log("mobileQuery changed:", mobileQuery.matches);
  loadTechSlide(currentTechIndex);
});

// initial load once DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initial loadTechSlide(0)");
  loadTechSlide(0);
});

let hambugerIcon = document.querySelector(".hambuger-wrapper")
let closeIcon = document.querySelector(".close-menu")
let navMenu = document.querySelector(".navigation-bar")

hambugerIcon.addEventListener("click",()=>{
    if(navMenu.style.display == "flex"){
        navMenu.style.display = "none"
    }else{navMenu.style.display = "flex"}
})


closeIcon.addEventListener("click",()=>{
    if(navMenu.style.display == "flex"){
        navMenu.style.display = "none"
    }else{navMenu.style.display = "flex"}
})