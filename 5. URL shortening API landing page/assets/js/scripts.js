var navUser = document.getElementById("navUser");

function showNavUser() {
  if (navUser.classList.contains("nav-user-visible")) {
    navUser.classList.remove("nav-user-visible");
  } else {
    navUser.classList.add("nav-user-visible");
  }
}

var navMenu = document.getElementById("nav");

function showMenu() {
  if (navMenu.classList.contains("nav-menu-visible")) {
    navMenu.classList.remove("nav-menu-visible");
    navUser.classList.remove("border-nav");
  } else {
    navMenu.classList.add("nav-menu-visible");
    navUser.classList.add("border-nav");
  }
}