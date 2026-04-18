function showMenu() {
  var menu = document.getElementById("top-nav");
  var x = document.querySelector(".material-symbols-outlined");
  if (menu.style.display === "none" || menu.style.display === '') {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

   x.classList.toggle("change");
}