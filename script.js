// & Define function created earlier in html file
function toggleMenu() {
    // ~ document -> built in system in js to target an element on webpage and utilize that element
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    // ~ whenever click element it will add or remove the open class in that element 
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}