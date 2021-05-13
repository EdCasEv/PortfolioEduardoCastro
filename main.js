//Function expression to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelector(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle");
});