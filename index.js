const mobile_nav = document.querySelector(".mobile-navbar");
const nav_header = document.querySelector(".main-nav");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



let docTitle = document.title;
window.addEventListener("blur",()=>{
  document.title="Come back :(";

})
window.addEventListener("focus",()=>{
  document.title=docTitle;
})