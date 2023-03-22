const drawerBtnElement = document.getElementById('drawer-btn');
const sideBarElement = document.getElementById('side-bar');
drawerBtnElement.addEventListener('click', function (event) {
  if (sideBarElement.className === '') {
    sideBarElement.classList.add('open');
  } else {
    sideBarElement.classList.remove('open');
  }
});
