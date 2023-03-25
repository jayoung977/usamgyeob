const textareaEl = document.querySelector("textarea");
const btnEl = document. querySelector("button");
const radioBtnEls = document.querySelectorAll("input[name='rating']");

btnEl.addEventListener("click", function(event) {
  let count = 0;

  for (let radioBtnEl of radioBtnEls) {
    if (radioBtnEl.checked === true) {
      count++;
    }
  }
  
  if (count === 0) {
    event.preventDefault();
    alert("별점을 입력해주세요!");
  }

  if (textareaEl.value === "") {
    event.preventDefault();
    alert("리뷰를 입력해주세요!");
  }
})

