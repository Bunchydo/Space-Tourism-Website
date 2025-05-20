// Dynamically determine the correct path to data.json
const repoName = "Space-Tourism-Website";
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const dataPath = isLocalhost ? "../../../data.json" : `/${repoName}/data.json`;

// DOM elements
let changeCrew = document.querySelectorAll(".change-crew");
let crewTitle = document.querySelector(".crew-wrapper__left_row1");
let crewName = document.querySelector(".crew-wrapper__left_row2");
let crewParagraph = document.querySelector(".crew-wrapper__left_row3");
let buttonToSwitch = document.querySelectorAll(".button-to-switch");
let crewImage = document.querySelector(".crew-image");

// Function to update crew section
function updateCrew(index) {
  buttonToSwitch.forEach(button => {
    button.style.backgroundColor = "#373944";
  });

  changeCrew[index].style.backgroundColor = "white";

  fetch(dataPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch crew data");
      return response.json();
    })
    .then(data => {
      const crewData = data.crew[index];
      crewTitle.textContent = crewData.role;
      crewName.textContent = crewData.name;
      crewParagraph.textContent = crewData.bio;
      crewImage.src = crewData.images.png;
    })
    .catch(error => {
      console.error("Error loading crew data:", error);
    });
}

// Add event listeners
changeCrew.forEach((crew, index) => {
  crew.addEventListener("click", () => updateCrew(index));
});

// Mobile menu toggle
let hambugerIcon = document.querySelector(".hambuger-wrapper");
let closeIcon = document.querySelector(".close-menu");
let navMenu = document.querySelector(".navigation-bar");

function toggleMenu() {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
}

hambugerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
