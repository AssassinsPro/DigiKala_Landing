// import alpine.js in js file
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// So that when we click on the search box div, the input inside the box is also clicked.
document
  .getElementById("search-container")
  .addEventListener("click", function () {
    document.getElementById("search-input").focus();
  });
