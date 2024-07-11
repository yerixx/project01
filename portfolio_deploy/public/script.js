window.addEventListener("resize", function () {
  const appContainer = document.getElementById("appContainer");
  appContainer.style.maxWidth = window.innerWidth + "px";
});

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
// window scrill event

const nav = document.querySelector("#navigation");
const navDeskGnb = nav.querySelector(".nav_gnb_desktop");
const navMoGnb = nav.querySelector(".nav_gnb_mobile");
const mobileLogo = nav.querySelector(".mobile_logo");

function applyResponsiveStyles() {
  if (window.innerWidth <= 780) {
    // 모바일 스타일 적용
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 3800) {
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
  } else {
    // 데스크탑 스타일 적용
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 4660) {
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
  }
}
// 초기 로드 시 스타일 적용
applyResponsiveStyles();
// 윈도우 리사이즈 시 스타일 적용
window.addEventListener("resize", applyResponsiveStyles);

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
  if (scrollTop >= 1400) {
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
const link = document.querySelectorAll(".nav_gnb_mobile li");

console.log(ToggleBtn1, ToggleBtn2, gnbMo);

ToggleBtn2.addEventListener("click", () => {
  console.log("click");
  gnbMo.classList.add("action");
});

ToggleBtn1.addEventListener("click", () => {
  console.log("click");
  gnbMo.classList.remove("action");
});

link.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("click");
    gnbMo.classList.remove("action");
  });
});

// 버튼
const arrowBtn = document.querySelector(".like_arrow");
const nextBtn = arrowBtn.querySelector("button");
// 슬라이드
const slides = document.querySelector(".like_contents");
const slide = slides.querySelectorAll("li");

const slideWidth = 400;
const slideMargin = 20;
let currentIdx = 0;

// 초기화 함수
const initializeSlider = () => {
  // 모바일과 데스크탑 버전에 따라 슬라이드 너비와 마진 설정
  if (window.innerWidth < 768) {
    slideWidth = 355;
    slideMargin = 20;
  } else {
    slideWidth = 400;
    slideMargin = 20;
  }
};

// 복제한 5개의 li node를 왼쪽으로 이동시키기 위한 함수 (1)
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".like_contents li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

// 복제한 5개의 li node를 왼쪽으로 이동시키기 위한 함수 (2)
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slide.length;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// li node를 복제하기 위한 코드
const makeClone = () => {
  for (let i = 0; i < slide.length; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slide.length - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  const totalSlides = document.querySelectorAll(".like_contents li").length;
  slides.style.transform = `translateX(${
    -(slideWidth + slideMargin) * num -
    (slideWidth + slideMargin) * slide.length
  }px)`;
  currentIdx = num;

  if (currentIdx === slide.length || currentIdx === -slide.length) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.transform = `translateX(${
        -(slideWidth + slideMargin) * slide.length
      }px)`;
      currentIdx = 0;
    }, 500);

    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }

  console.log(currentIdx, slide.length);
};

nextBtn.addEventListener("click", () => {
  console.log("click");
  moveSlide(currentIdx + 1);
});

let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});
slides.addEventListener("mouseleave", () => {
  autoSlide();
});

arrowBtn.addEventListener("mouseover", () => {
  stopSlide();
});
arrowBtn.addEventListener("mouseout", () => {
  autoSlide();
});

// like mouse over
slide.forEach((item) => {
  item.addEventListener("mouseover", function () {
    slide.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  });
  item.addEventListener("mouseout", function () {
    slide.forEach((item) => {
      item.classList.remove("active");
    });
  });
});
