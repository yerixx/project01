const tabs = document.querySelectorAll(".tab");
const pics = document.querySelectorAll(".pics");
// console.log(tabs, pics);

pics.forEach((img) => {
  img.addEventListener("click", function () {
    //console.log("click");
    pics.forEach((sibling) => {
      if (sibling !== img) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");

    //연결고리 만들기
    const targetId = img.getAttribute("data-alt");
    console.log(targetId);
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
