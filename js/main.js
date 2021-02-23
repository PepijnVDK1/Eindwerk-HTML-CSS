//Style voor header
let nav = document.getElementById("header");
let subnav = document.getElementById("nav");

let navMenu = document.getElementById("nav-menu");
let btns = document.getElementsByClassName("nav-btn");

let sections = document.getElementsByClassName("pageSection");

let scrollPos = 0;
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (test) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

window.addEventListener("scroll", function () {
  //   console.log("PageYOfsett: " + window.pageYOffset);

  if (window.innerWidth > 800) {
    if (window.pageYOffset > 200) {
      nav.style.backgroundColor = "rgb(22 24 23 / 70%)";
    } else if (window.pageYOffset < 200) {
      nav.style.backgroundColor = "transparent";
    }
  }

  let ypos = parseInt(window.pageYOffset);

  if (document.body.getBoundingClientRect().top > scrollPos) {
    //PAGE SCROLLING UP
    for (let i = sections.length - 1; i >= 0; i--) {
      if (ypos < sections[i].offsetTop && ypos > sections[i - 1].offsetTop) {
        console.log(i);
        if (i < btns.length) {
          btns[i].classList.remove("active");
          btns[i - 1].classList.add("active");
        }
        console.log;
      }
    }
  } else {
    //PAGE SCROLLING DOWN

    for (let i = 1; i < sections.length; i++) {
      if (
        ypos > parseInt(sections[i].offsetTop - 95) &&
        ypos < parseInt(sections[i + 1].offsetTop)
      ) {
        btns[i - 1].classList.remove("active");
        btns[i].classList.add("active");
      }
    }
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});
