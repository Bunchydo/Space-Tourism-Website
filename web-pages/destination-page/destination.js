// Dynamically determine the correct path to data.json
const repoName = "Space-Tourism-Website";
const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const dataPath = isLocalhost ? "../../../data.json" : `/${repoName}/data.json`;

// DOM elements
let changeDestination = document.querySelectorAll(".change-destination");

let destinationTitle = document.querySelector(".destination-wrapper__right_row2");
let destinationParagraph = document.querySelector(".destination-wrapper__right_row3");
let avgDistance = document.querySelector(".avg-distance-number");
let estTravelTime = document.querySelector(".estimated-number");
let destinationImage = document.querySelector(".destination-image");

// Update content function
function updateDestination(index) {
  changeDestination.forEach(dest => {
    dest.style.border = "none";
    dest.style.color = "#7780a0";
  });

  changeDestination[index].style.borderBottom = "2px solid white";
  changeDestination[index].style.color = "white";

  fetch(dataPath)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch JSON");
      return response.json();
    })
    .then(data => {
      const destData = data.destinations[index];
      destinationTitle.textContent = destData.name;
      destinationParagraph.textContent = destData.description;
      avgDistance.textContent = destData.distance;
      estTravelTime.textContent = destData.travel;
      destinationImage.src = destData.images.png;
    })
    .catch(error => {
      console.error("Error loading destination data:", error);
    });
}

// Add event listeners to all tabs
changeDestination.forEach((destination, index) => {
  destination.addEventListener("click", () => updateDestination(index));
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
