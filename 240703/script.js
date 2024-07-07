const content =
  // H =0 띄어쓰기도 숫자에 포함
  "FRONT-END DEVELOPER \nPORTFOLIO \n 2024";
// 들어갈 html 의 클래스 node 값 찾기
const text = document.querySelector(".main_text_typing");
console.log(text);
// 문자 0부터 순차적으로 들어왔으면 좋겠음-> 증감연산자 사용
// \n을 만나면 행을 바꾸게 하고싶음
// 기준값 0 필요
let i = 0;
const typing = () => {
  // content[0] = 문자열 첫번째 부터 찾아오겠다는 뜻
  //  i++ 증감 연산자 사용해서 마지막 문자까지 증감해서 찾아오겠다
  let txt = content[i++];
  // += 복합 대입 연산자
  // text.innerHTML 에 txt 을 하나씩 넣어줘 삼항연산자
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  // content.length = 콘텐츠 총 개수
  if (i >= content.length) {
    clearInterval(typingInterval); // 타이핑 완료 후 setInterval 멈춤
    // 문자열 초과하는 순간 리셋 시키도 다시 찾아오게 하는 함수
    // if (i > content.length) {
    //   text.textContent = "";
    //   i = 0;
  }
};
// setInterval =  특정주기에 맞춰서 실행해주는 함수
// 0.25초에 한번씩 typimg 함수가 실행하게 해줘
// setInterval(typing, 250);
typingInterval = setInterval(typing, 100);

// 버튼 불러오기
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

//
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
