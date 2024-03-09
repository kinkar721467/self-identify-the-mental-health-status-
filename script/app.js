//nav-bar menu
const sideMenu = document.getElementById('sidemenu');
const scrollControl = document.querySelector(".gallery");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

// -------------------auto----text----------
let typed = new Typed('#element', {
    strings: ['Check Mental Health', 'Console a Doctor','Support from us'],
    typeSpeed: 150,
    loop: true
});


// ---------------doctor-consult---------------------
let scrollControll = document.querySelector(".gallary");
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

scrollControll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollControll.scrollLeft += evt.deltaY;
});

backbtn.addEventListener("click", () => {
    scrollControll.scrollLeft -= 100; 
});

nextbtn.addEventListener("click", () => {
    scrollControll.scrollLeft += 100;
});


ScrollReveal().reveal('left-title', { delay: 375, reset: true });

