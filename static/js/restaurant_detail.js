const textareaEl = document.querySelector("textarea");
const btnEl = document. querySelector("button");

btnEl.addEventListener("click", function(event) {
  if (textareaEl.value === "") {
    event.preventDefault();
    alert("리뷰를 입력해주세요!");
  }
})