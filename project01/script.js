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

// 스크롤바 이벤트
window.addEventListener("scroll", () => {
  const nav = document.querySelector("#navigation");
  const navDeskGnb = nav.querySelector(".nav_gnb_desktop");
  const navMoGnb = nav.querySelector(".nav_gnb_mobile");
  const mobileLogo = nav.querySelector(".mobile_logo");
  const scrollTop = window.scrollY;

  if (scrollTop >= 4600) {
    nav.style.backgroundColor = "#ffee96";
    navDeskGnb.style.backgroundColor = "#ffee96";
    mobileLogo.style.backgroundColor = "#ffee96";
    navMoGnb.style.backgroundColor = "#ffee96";
  } else if (scrollTop >= 4380) {
    nav.style.backgroundColor = "#ffee96";
    navDeskGnb.style.backgroundColor = "#ffee96";
    mobileLogo.style.backgroundColor = "#ffee96";
    navMoGnb.style.backgroundColor = "#ffee96";
  } else {
    nav.style.backgroundColor = "white";
    navDeskGnb.style.backgroundColor = "white";
    mobileLogo.style.backgroundColor = "white";
    navMoGnb.style.backgroundColor = "white";
  }
});

//skills event
window.addEventListener("scroll", () => {
  const skillProgress = document.querySelector(".skill-progress");
  const progressLevels = document.querySelectorAll(".progress-level");
  const scrollTop = window.scrollY;

  if (scrollTop >= 2000) {
    skillProgress.classList.add("animate");
  } else {
    skillProgress.classList.remove("animate");
  }
  if (scrollTop >= 1490) {
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

//trigger mobile
const ToggleBtn1 = document.querySelector(".trigger");
const ToggleBtn2 = document.querySelector(".mobile_dia_trigger");
const gnbMo = document.querySelector(".nav_gnb_mobile");
console.log(ToggleBtn1, ToggleBtn2, gnbMo);

ToggleBtn2.addEventListener("click", () => {
  console.log("click");
  gnbMo.classList.add("action");
});

ToggleBtn1.addEventListener("click", () => {
  console.log("click");
  gnbMo.classList.remove("action");
});

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
