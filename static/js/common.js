const drawerBtnElement = document.getElementById('drawer-btn');
const sideBarElement = document.getElementById('side-bar');

drawerBtnElement.addEventListener('click', function (event) {
  sideBarElement.classList.toggle("open");
});
