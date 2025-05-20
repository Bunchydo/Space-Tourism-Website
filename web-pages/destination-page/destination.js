let changeDestination = document.querySelectorAll(".change-destination");

let destinationTitle = document.querySelector(
  ".destination-wrapper__right_row2"
);
let destinationParagraph = document.querySelector(
  ".destination-wrapper__right_row3"
);
let avgDistance = document.querySelector(".avg-distance-number");
let estTravelTime = document.querySelector(".estimated-number");
let destinationImage = document.querySelector(".destination-image");
changeDestination.forEach((destination, index) => {
  destination.addEventListener("click", () => {
    if (index === 0) {
      changeDestination.forEach((otherDestination) => {
        otherDestination.style.border = "none";
        otherDestination.style.color = "#7780a0";
      });

      // Apply the desired border to the currently clicked element
      destination.style.borderBottom = "2px solid white";
      destination.style.color = "white";

      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          destinationTitle.textContent = data.destinations[0].name;
          destinationParagraph.textContent = data.destinations[0].description;
          avgDistance.textContent = data.destinations[0].distance;
          estTravelTime.textContent = data.destinations[0].travel;
          destinationImage.src = data.destinations[0].images.png;
        });
    }
    if (index === 1) {
      changeDestination.forEach((otherDestination) => {
        otherDestination.style.border = "none";
        otherDestination.style.color = "#7780a0";
      });

      // Apply the desired border to the currently clicked element
      destination.style.borderBottom = "2px solid white";
      destination.style.color = "white";

      console.log("This is mars");
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          destinationTitle.textContent = data.destinations[1].name;
          destinationParagraph.textContent = data.destinations[1].description;
          avgDistance.textContent = data.destinations[1].distance;
          estTravelTime.textContent = data.destinations[1].travel;
          destinationImage.src = data.destinations[1].images.png;
        });
    }
    if (index === 2) {
      changeDestination.forEach((otherDestination) => {
        otherDestination.style.border = "none";
        otherDestination.style.color = "#7780a0";
      });

      // Apply the desired border to the currently clicked element
      destination.style.borderBottom = "2px solid white";
      destination.style.color = "white";

      console.log("This is mars");
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          destinationTitle.textContent = data.destinations[2].name;
          destinationParagraph.textContent = data.destinations[2].description;
          avgDistance.textContent = data.destinations[2].distance;
          estTravelTime.textContent = data.destinations[2].travel;
          destinationImage.src = data.destinations[2].images.png;
        });
    }
    if (index === 3) {
      changeDestination.forEach((otherDestination) => {
        otherDestination.style.border = "none";
        otherDestination.style.color = "#7780a0";
      });

      // Apply the desired border to the currently clicked element
      destination.style.borderBottom = "2px solid white";
      destination.style.color = "white";

      console.log("This is mars");
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          destinationTitle.textContent = data.destinations[3].name;
          destinationParagraph.textContent = data.destinations[3].description;
          avgDistance.textContent = data.destinations[3].distance;
          estTravelTime.textContent = data.destinations[3].travel;
          destinationImage.src = data.destinations[3].images.png;
        });
    }
  });
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