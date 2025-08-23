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

/* ************************* */
/* ***** Show Password ***** */
/* ************************* */

// Sign In
let toggleSignInPassword = document.getElementById('toggleSignInPassword');
let passwordInputSignIn = document.getElementById('signin-password');
let eyeIconSignIn = document.getElementById('eyeIconSignIn');

toggleSignInPassword.addEventListener('click', () => {
    if (passwordInputSignIn.type === "password") {
        passwordInputSignIn.type = "text";
        eyeIconSignIn.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        passwordInputSignIn.type = "password";
        eyeIconSignIn.classList.replace("bi-eye-slash", "bi-eye");
    }
});

// Sign Up (Password)
let toggleSignUpPassword = document.getElementById('toggleSignUpPassword');
let passwordInputSignUp = document.getElementById('signup-password');
let eyeIconSignUp = document.getElementById('eyeIconSignUp');

toggleSignUpPassword.addEventListener('click', () => {
    if (passwordInputSignUp.type === "password") {
        passwordInputSignUp.type = "text";
        eyeIconSignUp.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        passwordInputSignUp.type = "password";
        eyeIconSignUp.classList.replace("bi-eye-slash", "bi-eye");
    }
});

// Sign Up (Confirm)
let toggleConfirmPassword = document.getElementById('toggleSignUpConfirmPassword');
let passwordConfirmInput = document.getElementById('signup-confirm');
var eyeIconConfirm = document.getElementById('eyeIconConfirm');

toggleConfirmPassword.addEventListener('click', () => {
    if (passwordConfirmInput.type === "password") {
        passwordConfirmInput.type = "text";
        eyeIconConfirm.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        passwordConfirmInput.type = "password";
        eyeIconConfirm.classList.replace("bi-eye-slash", "bi-eye");
    }
});

/* ************************************** */
/* ***** Validation & Local Storage ***** */
/* ************************************** */

function setError(input, message) {
    let formGroup = input.parentElement;
    let errorMsg = formGroup.querySelector(".error-message");
    if (errorMsg) errorMsg.textContent = message;
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
}

function setSuccess(input) {
    let formGroup = input.parentElement;
    let errorMsg = formGroup.querySelector(".error-message");
    if (errorMsg) errorMsg.textContent = "";
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
}

/* ***** Sign Up ***** */

let signUpBtn = document.querySelector(".sign-up button");
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.querySelector(".signup-username");
    let email = document.querySelector(".signup-email");
    let password = document.querySelector(".signup-password");
    let confirmPassword = document.querySelector(".signup-confirm");
    let phone = document.querySelector(".signup-phone");
    let userNameIcon = document.querySelector(".sign-up .bi-person");
    let mailIcon = document.querySelector(".sign-up .bi-envelope");
    let passIcon = document.querySelector(".sign-up .pass .bi-lock");
    let confirmIcon = document.querySelector(".sign-up .conPass .bi-lock");
    let phoneIcon = document.querySelector(".sign-up .bi-telephone");
    let userImageInput = document.querySelector(".signup-image");
    let imageIcon = document.querySelector(".sign-up .bi-image");

    let isValid = true;

    // Username
    const userNameRegex = /^[A-Z][a-z]{2,}$/;
    if (!userNameRegex.test(username.value.trim()) || username.value.trim().length < 3) {
        setError(username, "Username must be at least 3 characters & first character must be capital");
        userNameIcon.style.top = "27%";
        isValid = false;
    } else {
        setSuccess(username);
        userNameIcon.style.top = "50%";
    }

    // Email
    let emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/;
    if (!emailRegex.test(email.value.trim())) {
        setError(email, "Invalid email format : aa1@gmail.com");
        mailIcon.style.top = "37%";
        isValid = false;
    } else {
        setSuccess(email);
        mailIcon.style.top = "50%";
    }

    // Password
    let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passRegex.test(password.value.trim())) {
        setError(password, "Password must be 8+ chars, 1 uppercase, 1 number, 1 special character");
        passIcon.style.top = "30%";
        toggleSignUpPassword.style.top = "30%";
        isValid = false;
    } else {
        setSuccess(password);
        passIcon.style.top = "50%";
        toggleSignUpPassword.style.top = "50%";
    }

    // Confirm Password
    if (password.value.trim() !== confirmPassword.value.trim()) {
        setError(confirmPassword, "Passwords do not match");
        confirmIcon.style.top = "35%";
        toggleConfirmPassword.style.top = "35%";
        isValid = false;
    } else {
        setSuccess(confirmPassword);
        confirmIcon.style.top = "50%";
        toggleConfirmPassword.style.top = "50%";
    }

    // Phone
    let phoneRegex = /^(010|011|012|015)[0-9]{8}$/;
    if (!phoneRegex.test(phone.value.trim())) {
        setError(phone, "Phone must be 11 digits & must start with (010 || 011 || 012 || 015)");
        phoneIcon.style.top = "27%";
        isValid = false;
    } else {
        setSuccess(phone);
        phoneIcon.style.top = "50%";
    }

    if (!isValid) return;

    // LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.some(user => user.email === email.value.trim());
    if (userExists) {
        setError(email, "This email is already registered!");
        return;
    }

    let file = userImageInput.files[0];
    if (!file) {
        setError(userImageInput, "Please upload a profile picture");
        imageIcon.style.top = "37%";
        return;
    } else {
        imageIcon.style.top = "50%";
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        let newUser = {
            username: username.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
            phone: phone.value.trim(),
            userImage: event.target.result
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign Up successful! Please Sign In.");
        toggle();
    };
    reader.readAsDataURL(file);

});

/* ***** Sign In ***** */

let signInBtn = document.querySelector(".sign-in button");
signInBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let email = document.querySelector(".signin-email");
    let password = document.querySelector(".signin-password");
    let mailSignInIcon = document.querySelector(".signin-mailicon");
    let passSignInIcon = document.querySelector(".signin-passicon");

    let isValid = true;

    setSuccess(email);
    setSuccess(password);

    // Email
    if (email.value.trim() === "") {
        setError(email, "Email is required");
        mailSignInIcon.style.top = "37%";
        isValid = false;
    } else {
        setSuccess(email);
        mailSignInIcon.style.top = "50%";
    }

    // Password
    if (password.value.trim() === "") {
        setError(password, "Password is required");
        passSignInIcon.style.top = "37%";
        toggleSignInPassword.style.top = "37%";
        isValid = false;
    } else {
        setSuccess(password);
        passSignInIcon.style.top = "50%";
        toggleSignInPassword.style.top = "50%";
    }

    if (!isValid) return;

    // LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        setError(email, "No users registered yet. Please sign up first!");
        return;
    }

    let validUser = users.find(user => user.email === email.value.trim() && user.password === password.value.trim());

    if (validUser) {
        alert("Welcome " + validUser.username + "!");
        localStorage.setItem("currentUser", JSON.stringify(validUser));
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
        setError(email, "");
        setError(password, "");
    }
});
