const $toggleBtn = document.getElementById("toggle-btn");
const $toggleIcon = document.getElementById("toggle-icon");
const $nav = document.getElementById("nav");
const $menuMobile = document.getElementById("menu-mobile");

$toggleBtn.addEventListener("click", () => {
  $nav.classList.toggle("expanded");
  const currentSrc = $toggleIcon.getAttribute("src");
      if (currentSrc === "images/icon-close.svg") {
        $toggleIcon.setAttribute("src", "images/icon-hamburger.svg");
      } else {
        $toggleIcon.setAttribute("src", "images/icon-close.svg");
      }
});
