const sidebar = document.getElementById("sidebar");
const navBtn = document.getElementById("nav-btn");
const closeBtn = document.getElementById("close-btn");

navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
