/* ------------------------------------------------------------------ */
/* ======================== Login & Register ======================== */
/* ------------------------------------------------------------------ */

/* ******************* */
/* ***** Toggle ****** */
/* ******************* */

let contain = document.getElementById('contain');

var toggle = () => {
    contain.classList.toggle('sign-in');
    contain.classList.toggle('sign-up');
};

setTimeout(() => {
    contain.classList.add('sign-in');
}, 200);


/* ************************************** */
/* ***** Validation & Local Storage ***** */
/* ************************************** */

/* ***** Sign Up ***** */

const signUpBtn = document.querySelector(".sign-up button");
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.querySelector(".signup-username").value.trim();
    let email = document.querySelector(".signup-email").value.trim();
    let password = document.querySelector(".signup-password").value.trim();
    let confirmPassword = document.querySelector(".signup-confirm").value.trim();
    let phone = document.querySelector(".signup-phone").value.trim();

    if (username.length < 3) {
        alert("Username must be at least 3 characters");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone must be 10-15 digits");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("This email is already registered!");
        return;
    }

    let newUser = { username, email, password, phone };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign Up successful! Please Sign In.");
    toggle();
});

/* ***** Sign In ***** */

const signInBtn = document.querySelector(".sign-in button");
signInBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.querySelector(".signin-email").value.trim();
    let password = document.querySelector(".signin-password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        alert("No users registered yet. Please sign up first!");
        return;
    }

    let validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("Welcome " + validUser.username + "!");
        localStorage.setItem("currentUser", JSON.stringify(validUser));
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
});

/* ************************* */
/* ***** Show Password ***** */
/* ************************* */

/* ***** Sign In ***** */

const toggleSignInPassword = document.getElementById('toggleSignInPassword');
const passwordInputSignIn = document.getElementById('signin-password');
const eyeIconSignIn = document.getElementById('eyeIconSignIn');

toggleSignInPassword.addEventListener('click', () => {
    if (passwordInputSignIn.type === "password") {
        passwordInputSignIn.type = "text";
        eyeIconSignIn.classList.remove("bi-eye");
        eyeIconSignIn.classList.add("bi-eye-slash");
    } else {
        passwordInputSignIn.type = "password";
        eyeIconSignIn.classList.remove("bi-eye-slash");
        eyeIconSignIn.classList.add("bi-eye");
    }
});

/* ***** Sign Up (Password) ***** */

const toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
const passwordInputSignUp = document.getElementById('signup-password');
const eyeIconSignUp = document.getElementById('eyeIconSignUp');

toggleSignUpPassword.addEventListener('click', () => {
    if (passwordInputSignUp.type === "password") {
        passwordInputSignUp.type = "text";
        eyeIconSignUp.classList.remove("bi-eye");
        eyeIconSignUp.classList.add("bi-eye-slash");
    } else {
        passwordInputSignUp.type = "password";
        eyeIconSignUp.classList.remove("bi-eye-slash");
        eyeIconSignUp.classList.add("bi-eye");
    }
});

/* ***** Sign Up (Confirm) ***** */

const toggleConfirmPassword = document.getElementById('toggleSignUpConfirmPassword');
const passwordConfirmInput = document.getElementById('signup-confirm');
const eyeIconConfirm = document.getElementById('eyeIconConfirm');

toggleConfirmPassword.addEventListener('click', () => {
    if (passwordConfirmInput.type === "password") {
        passwordConfirmInput.type = "text";
        eyeIconConfirm.classList.remove("bi-eye");
        eyeIconConfirm.classList.add("bi-eye-slash");
    } else {
        passwordConfirmInput.type = "password";
        eyeIconConfirm.classList.remove("bi-eye-slash");
        eyeIconConfirm.classList.add("bi-eye");
    }
});


/* ------------------------------------------------------------------ */
/* ========================  ======================== */
/* ------------------------------------------------------------------ */