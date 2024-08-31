function closeCookies() {
  document.getElementById("cookies").style.display = "none";
}

function toggleMobileNav() {
  var x = document.getElementById("menu-list");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }

  var x = document.getElementsById("disappear");
  if (x.style.display === "flex") {
    x.style.display = "none";
  }
}

function hideMobileNav() {
  document.getElementById("menu-list").style.display = "none";
}
