

let navBtn = document.getElementsByClassName("nav-btn")
navBtn[0].addEventListener("click", () => {
    console.log("work");
let menuIcon = document.getElementById('menu-icon');
menuIcon.classList.toggle('fa-times');
    let dropMenu = document.getElementsByClassName('drop-menu')[0];
    dropMenu.classList.toggle('active');
});
