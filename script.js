const mainMenu = document.querySelector(".main-menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click",open);
closeMenu.addEventListener("click",close);

function open(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    
}
function close(){
    
    mainMenu.style.top = "-100%";
    
}