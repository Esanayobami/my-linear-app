const menu = document.getElementById("menu");
const menubutton = document.getElementById("menubtn");

if(menubutton){
    menubutton.addEventListener("click" , () =>{
        menu.classList.toggle("togglemenu")
    } )
};