// slide
const slideContainer = document.querySelector(".slide_card_items");
const slideImag = document.querySelectorAll(".slide_card_items span");
const slideArrows = 0,
  slideCount = slide.length,
  slideWidth = 240,
  slideMargin = 30;

const slideArrowLeft = document.querySelector(".slide_arrow_left");
const slideArrowRight = document.querySelector(".slide_arrow_right");

// 슬라이드 개수만큼 복사본 만들어서 증가
makeClone();

function makeClone() {
  for (var i = 0; i < slideCount; i++) {
    // a요소 복사 방법 -> a.cloneNod()
    // a요소 자식까지 모두 복사 방법 -> a.cloneNod(ture)
    var cloneSlide = slideImag[i].cloneNod(ture);
    cloneSlide.classList.add("clone");
    // a.appendChild(b)
    // a요소 뒤에 추가
    slideImag.appendChild(cloneSlide);
  }
  for (var i = slideCount - 1; i >= 0; i--) {
    var cloneSlide = slideImag[i].cloneNod(ture);
    cloneSlide.classList.add("clone");
    // a.prepend(b)
    // a요소 앞에 추가
    slideImag.prepend(cloneSlide);
  }
}

// 1. card_item 각 요소에 마우스를 오버하면, 각 item들이 위쪽으로 올라오도록 하고 싶다

// 1-1. 기능을 구현하고 싶다면
// 웹 브라우저가 card_item들이 어떤 요소들인지 알게끔 도와줘야 한다
// 1-1-1. how ->
// 웹 브라우저는 dom 객체 모델을 갖고 있으니까
// 해당 dom에서 card_item들의 node를 찾아와야겠다
// 1-1-1-1. how ->
// dom 에서 원하는 node를 찾아오려면
// querselector()혹은 getElemenrById()등의 함수를 사용할 수 있다

// 1-2. card_item이 1개가 아니라 총 5개 이며, 5개 카드 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야 한다

// 2. 마우스가 a item 위에 있다가 b item으로 이동을 하게 된다면 a item 은 다시 원래의 위치로 돌아오게 하고싶고, b item은 위쪽으로 올라오게 하고 싶다

const items = document.querySelectorAll(".slide_card_items span");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateY(-30px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

//1.컴퓨터에게 상단 nav ul & li 태그를 인지시켜줘야 한다
// 2. 상단 nav요소에 마우스를 오버하면 이벤트가 실행된다
// 2-1 마우스 오버시 active 가상 클래스가 실행된다 [텍스트 화이트]
// 2-2 하단 lnb 요소의 opacity value값이 1이 되어야 한다
// 3. mouseleave||mouseout 기능을 활용해 마우스가 옆에 있는 li태그로 이동하면 기존 이벤트는 제거가 되고 || 신규 이벤트가 2번기능을 그대로 구현해야한다

const gnbLi = document.querySelectorAll(".navigation_gnb > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});
