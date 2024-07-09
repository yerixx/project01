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
window.addEventListener("scroll", () => {
  const gnbDesktop = document.querySelector(".nav_gnb_desktop");
  const gnbMobile = document.querySelector(".nav_gnb_mobile");

  if (window.scrollY > 60) {
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
  } else {
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
  }
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

// document.addEventListener("DOMContentLoaded", function () {
//   const mobileDia1 = document.getElementById("mobile_dia_1");
//   const mobileDia2 = document.getElementById("mobile_dia_2");
//   const navGnbMobile = document.querySelector(".nav_gnb_mobile");

//   mobileDia1.addEventListener("click", function () {
//     navGnbMobile.classList.add("active");
//   });

//   mobileDia2.addEventListener("click", function () {
//     navGnbMobile.classList.remove("active");
//   });
// });
