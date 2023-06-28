function toggleResponsiveMenu() {
  const btn =document.getElementById("btn")
  const menu = document.getElementById("top-menu");
  const menuIcon = document.getElementById("responsive-menu-icon");

  if (menu.className === "responsive") {
      menu.className = "";
      menuIcon.className = "";
  } else {
      menu.className = "responsive";
      menuIcon.className = "open-menu";
  }
  $('.carousel').carousel({
    interval: 10000
  })
}

