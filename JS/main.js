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