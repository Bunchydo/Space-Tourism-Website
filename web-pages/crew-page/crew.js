let changeCrew = document.querySelectorAll(".change-crew");
let crewTitle = document.querySelector(".crew-wrapper__left_row1");
let crewName = document.querySelector(".crew-wrapper__left_row2");
let crewParagraph = document.querySelector(".crew-wrapper__left_row3");
let buttonToSwitch = document.querySelectorAll(".button-to-switch");
let crewImage = document.querySelector(".crew-image");
changeCrew.forEach((crew, index) => {
  crew.addEventListener("click", () => {
    if (index === 0) {
      buttonToSwitch.forEach((otherCrewSwitcherCircle) => {
        otherCrewSwitcherCircle.style.backgroundColor = "#373944";
      });

      // Apply the desired border to the currently clicked element
      crew.style.backgroundColor = "white";
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          crewTitle.textContent = data.crew[0].role;
          crewName.textContent = data.crew[0].name;
          crewParagraph.textContent = data.crew[0].bio;
          crewImage.src = data.crew[0].images.png;
        });
    }
    if (index === 1) {
      buttonToSwitch.forEach((otherCrewSwitcherCircle) => {
        otherCrewSwitcherCircle.style.backgroundColor = "#373944";
      });

      // Apply the desired border to the currently clicked element
      crew.style.backgroundColor = "white";
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          crewTitle.textContent = data.crew[1].role;
          crewName.textContent = data.crew[1].name;
          crewParagraph.textContent = data.crew[1].bio;
          crewImage.src = data.crew[1].images.png;
        });
    }
    if (index === 2) {
      buttonToSwitch.forEach((otherCrewSwitcherCircle) => {
        otherCrewSwitcherCircle.style.backgroundColor = "#373944";
      });

      // Apply the desired border to the currently clicked element
      crew.style.backgroundColor = "white";
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          crewTitle.textContent = data.crew[2].role;
          crewName.textContent = data.crew[2].name;
          crewParagraph.textContent = data.crew[2].bio;
          crewImage.src = data.crew[2].images.png;
        });
    }
    if (index === 3) {
      buttonToSwitch.forEach((otherCrewSwitcherCircle) => {
        otherCrewSwitcherCircle.style.backgroundColor = "#373944";
      });

      // Apply the desired border to the currently clicked element
      crew.style.backgroundColor = "white";
      fetch("../../../data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          crewTitle.textContent = data.crew[3].role;
          crewName.textContent = data.crew[3].name;
          crewParagraph.textContent = data.crew[3].bio;
          crewImage.src = data.crew[3].images.png;
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