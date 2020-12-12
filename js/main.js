let nav = document.getElementById("header");
let subnav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    nav.style.backgroundColor = "rgb(22 24 23 / 70%)";
  } else if (window.pageYOffset < 200) {
    nav.style.backgroundColor = "transparent";
  }
  if (window.pageYOffset > 200) {
    subnav.style.borderBottom = "none";
  } else if (window.pageYOffset < 100) {
    subnav.style.borderBottom = "1px inset rgb(32 32 32 / 48%)";
  }
});
