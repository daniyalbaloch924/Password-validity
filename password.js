let users = []; // Array to store user objects
// Password validation function
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
// Sign-up function using objects (without role logic)
function signUp() {
    let username = prompt("Enter a username:");
    let password = prompt("Enter a password:");
    let confirmPassword = prompt("Confirm your password:");
    // Check if username is already taken
    if (users.some(user => user.username === username)) {
        alert("Username already exists.");
        return;
    }
    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    // Validate password
    let passwordValidation = validatePassword(password);
    if (passwordValidation !== "Password is valid!") {
        alert("Sign-up failed: " + passwordValidation);
        return;
    }
    // Add user as an object without role
    users.push({ username, password });
    alert("Sign-up successful!");
}
// Login function using objects
function login() {
    let username = prompt("Enter your username:");
    let password = prompt("Enter your password:");
    let user = users.find(user => user.username === username);
    if (!user) {
        alert("Login failed: Username not found.");
        return;
    }
    if (user.password === password) {
        alert("Login successful! Welcome.");
    } else {
        alert("Login failed: Incorrect password.");
    }
}
// Example usage
signUp();
// login();