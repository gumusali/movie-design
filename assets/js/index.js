const openMenuBtn = document.querySelector("button.open-menu-mobile");
const closeMenuBtn = document.querySelector("button.close-menu-mobile");
const toggleClass = () => document.querySelector("section.left").classList.toggle("open");

openMenuBtn.addEventListener("click", () => {
    toggleClass();
});

closeMenuBtn.addEventListener("click", () => {
    toggleClass();
});

