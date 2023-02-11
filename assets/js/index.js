const mobilmenu = document.getElementById("mobile-menu");
const navbarwrapper = document.getElementById("navbar-wrapper");
const listmenu = document.getElementById("list-menu");
const crossicon = document.getElementById("cross-icon");

mobilmenu.addEventListener("click", function () {
  navbarwrapper.classList.add("left-0");
  navbarwrapper.classList.remove("-left-full");
});

listmenu.addEventListener("click", function () {
  if (navbarwrapper.classList.contains("left-0")) {
    navbarwrapper.classList.remove("left-0");
    navbarwrapper.classList.add("-left-full");
  }
});
crossicon.addEventListener("click", function () {
  if (navbarwrapper.classList.contains("left-0")) {
    navbarwrapper.classList.remove("left-0");
    navbarwrapper.classList.add("-left-full");
  }
});

// Get the button
let mybutton = document.getElementById("backtotopbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
