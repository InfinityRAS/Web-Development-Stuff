const header = document.querySelector('.header');
const hamburger = document.getElementById("hamburger");
const hideContent = document.querySelector(".hide-content");

hamburger.addEventListener('click', () => {
    hideContent.classList.toggle('show-nav-resp');
    header.classList.toggle("h-header-resp")
});

