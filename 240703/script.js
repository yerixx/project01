// typing
const content = "FRONT-END DEVELOPER \nPORTFOLIO \n 2024";
const text = document.querySelector(".main_text_typing");

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i >= content.length) {
    clearInterval(typingInterval);
  }
};

typingInterval = setInterval(typing, 100);

// scroll event
// window.addEventListener("scroll", () => {
//   const header = document.querySelector("#navigation");
//   const gnb = document.querySelector(".nav_gnb_mobile");

//   if (window.scrollY > 3000) {
//     header.classList.add("active");
//     gnb.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     gnb.classList.remove("active");
//   }
// });
// skills event
window.addEventListener("scroll", () => {
  const skillProgress = document.querySelector(".skill-progress");
  const progressLevels = document.querySelectorAll(".progress-level");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 2000) {
    skillProgress.classList.add("animate");
  } else {
    skillProgress.classList.remove("animate");
  }
});

// Add animation when the class 'animate' is added
document.styleSheets[0].insertRule(
  `
  .skill-progress.animate .progress-level {
      animation: bar 4s forwards;
  }
`,
  document.styleSheets[0].cssRules.length
);

// Button
const hikingBtn = document.querySelector(".hiking_btn");
const hikingModalBox = document.querySelector(".hiking_modal");

hikingBtn.addEventListener("click", () => {
  hikingModalBox.classList.add("active");
});
hikingModalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

const climbingBtn = document.querySelector(".climbing_btn");
const climbingModalBox = document.querySelector(".climbing_modal");

climbingBtn.addEventListener("click", () => {
  climbingModalBox.classList.add("active");
});
climbingModalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

const swimmingBtn = document.querySelector(".swimming_btn");
const swimmingModalBox = document.querySelector(".swimming_modal");

swimmingBtn.addEventListener("click", () => {
  swimmingModalBox.classList.add("active");
});
swimmingModalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

const lofiBtn = document.querySelector(".lofi_btn");
console.log(lofiBtn);
const lofiModalBox = document.querySelector(".lofi_modal");
console.log(lofiModalBox);
lofiBtn.addEventListener("click", () => {
  lofiModalBox.classList.add("active");
});
lofiModalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

const houseBtn = document.querySelector(".house_btn");
console.log(houseBtn);
const houseModalBox = document.querySelector(".house_modal");
console.log(houseModalBox);
houseBtn.addEventListener("click", () => {
  houseModalBox.classList.add("active");
});
houseModalBox.addEventListener("click", function () {
  this.classList.remove("active");
});

const bandBtn = document.querySelector(".band_btn");
console.log(bandBtn);
const bandModalBox = document.querySelector(".band_modal");
console.log(bandModalBox);
bandBtn.addEventListener("click", () => {
  bandModalBox.classList.add("active");
});
bandModalBox.addEventListener("click", function () {
  this.classList.remove("active");
});
