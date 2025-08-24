/* ------------------------------------------------------------------ */
/* ========================= Shopping Cart ========================== */
/* ------------------------------------------------------------------ */

document.querySelector('.shopping_cart > a').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.mini_cart').classList.add('active');
    document.querySelector('.body_overlay').classList.add('active');
});

document.querySelector('.mini_cart_close a').addEventListener('click', () => {
    document.querySelector('.mini_cart').classList.remove('active');
    document.querySelector('.body_overlay').classList.remove('active');
});

/* ------------------------------------------------------------------ */
/* =========================== Search Box =========================== */
/* ------------------------------------------------------------------ */

document.querySelector('.header_search_btn > a').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.page_search_box').classList.add('active');
});

document.querySelector('.search_close > i').addEventListener('click', () => {
    document.querySelector('.page_search_box').classList.remove('active');
});

/* ------------------------------------------------------------------ */
/* ========================= Offcanvas menu ========================= */
/* ------------------------------------------------------------------ */

document.querySelector('.canvas_open').addEventListener('click', () => {
    document.querySelector('.offcanvas_menu_wrapper').classList.add('active');
    document.querySelector('.body_overlay').classList.add('active');
});

document.querySelector('.canvas_close a').addEventListener('click', () => {
    document.querySelector('.offcanvas_menu_wrapper').classList.remove('active');
    document.querySelector('.body_overlay').classList.remove('active');
});

/* ------------------------------------------------------------------ */
/* ======================= User Profile Image ======================= */
/* ------------------------------------------------------------------ */

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser && currentUser.userImage) {
    let defaultIcon = document.getElementById("defaultIcon");
    let userToggle = document.getElementById("userToggle");
    defaultIcon.style.display = "none";
    let img = document.createElement("img");
    img.src = currentUser.userImage;
    img.alt = "User";
    img.classList = "user-profile-image";
    userToggle.appendChild(img);
}

/* ------------------------------------------------------------------ */
/* ======================= Testimonial Slider ======================= */
/* ------------------------------------------------------------------ */

let slides = document.querySelector(".slides");
let cards = document.querySelectorAll(".card");
let indicatorsBox = document.querySelector(".indicators");
let index = 0;

let firstClone = cards[0].cloneNode(true);
slides.appendChild(firstClone);

cards.forEach((_, i) => {
    let dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => showSlide(i);
    indicatorsBox.appendChild(dot);
});

let dots = document.querySelectorAll(".indicators span");

function showSlide(i) {
    index = i;
    slides.style.transition = "transform 0.5s ease";
    slides.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    if (i < dots.length) dots[i].classList.add("active");
}

setInterval(() => {
    index++;
    showSlide(index);

    if (index === cards.length) {
        setTimeout(() => {
            slides.style.transition = "none";
            index = 0;
            slides.style.transform = "translateX(0)";
            dots.forEach(d => d.classList.remove("active"));
            dots[0].classList.add("active");
        }, 500);
    }
}, 3000);
