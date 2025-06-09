// So that when we click on the search box div, the input inside the box is also clicked.
document
  .getElementById("search-container")
  .addEventListener("click", function () {
    document.getElementById("search-input").focus();
  });

// offer slider swiper scripts
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
  },
});
// hadis swiper



 let lastScrollY = window.scrollY;
  const botSec = document.getElementById('botSec');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      botSec.classList.add('hidden');
    } else {
      // Scrolling up
      botSec.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
  });