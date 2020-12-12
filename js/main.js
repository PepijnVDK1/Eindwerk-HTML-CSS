//Style voor header
let nav = document.getElementById("header");
let subnav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  if (window.innerWidth > 800) {
    if (window.pageYOffset > 200) {
      nav.style.backgroundColor = "rgb(22 24 23 / 70%)";
    } else if (window.pageYOffset < 200) {
      nav.style.backgroundColor = "transparent";
    }
  }
});

let navMenu = document.getElementById("nav-menu");
let btns = document.getElementsByClassName("nav-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
