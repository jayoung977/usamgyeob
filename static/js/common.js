const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".sidebar__menu");
const asideBar = document.querySelector(".aside_sidebar");
toggleBtn.addEventListener("click", () => {
  asideBar.classList.toggle("active");
  menu.classList.toggle("active");
});
