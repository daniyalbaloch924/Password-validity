let users = [];

function validatePassword(password) {
    let errorMessage = "";
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    if (password.length < 8) {
        errorMessage += "Password must be at least 8 characters long. ";
    }
    for (let i = 0; i < password.length; i++) {

        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        }
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if ("@$!%*?&".includes(char)) {
            hasSpecialChar = true;
        }
    }
    if (!hasUppercase) {
        errorMessage += "Password must contain at least one uppercase letter. ";
    }
    if (!hasLowercase) {
        errorMessage += "Password must contain at least one lowercase letter. ";
    }
    if (!hasNumber) {
        errorMessage += "Password must contain at least one number. ";
    }
    if (!hasSpecialChar) {
        errorMessage += "Password must contain at least one special character (@, $, !, %, *, ?, &). ";
    }
    return errorMessage ? "Invalid password: " + errorMessage : "Password is valid!";
}

function signUp() {
    let username = prompt("Enter a username:");
    let password = prompt("Enter a password:");

    let passwordValidation = validatePassword(password);

    if (passwordValidation !== "Password is valid!") {
        alert("Sign-up failed: " + passwordValidation);

    }

    else {

        let confirmPassword = prompt("Confirm your password:");
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        else {
            alert("Sign-up successful!!");
        }

    }

}

signUp(); 