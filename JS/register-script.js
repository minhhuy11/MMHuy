function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp");
        return;
    }

    // Add your registration logic here
    console.log("Register - Username: " + username + ", Password: " + password);
}
