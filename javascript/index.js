const burgerButton = document.getElementById("burgerBtn");
const menu = document.querySelector('ul.menu__list');

burgerButton.addEventListener('click', showMenu);

function showMenu() {
    let currentClassName = burgerButton.className;

    if (currentClassName === "menu__btn menu__btn_active") {
        burgerButton.className = "menu__btn";
        menu.className = "menu__list";
        
    } else {
        burgerButton.className = "menu__btn menu__btn_active";
        menu.className = "menu__list menu__list-active";
    }
}

function unShowMenu() {
    burgerButton.className = "menu__btn";
    menu.className = "menu__list";
}
