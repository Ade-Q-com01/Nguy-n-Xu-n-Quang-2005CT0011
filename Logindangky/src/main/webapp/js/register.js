const form = document.getElementById("register_form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {

    // Kiểm tra Username
    if (username.value.trim() === "") {
        e.preventDefault();
        alert("Vui lòng nhập tên đăng nhập.");
        username.focus();
        return;
    }

    // Kiểm tra Email
    if (!checkEmail(email.value.trim())) {
        e.preventDefault();
        alert("Email không đúng định dạng.");
        email.focus();
        return;
    }

    // Kiểm tra Password
    if (password.value.length < 6) {
        e.preventDefault();
        alert("Mật khẩu phải có ít nhất 6 ký tự.");
        password.focus();
        return;
    }

    // Kiểm tra nhập lại Password
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Mật khẩu xác nhận không khớp.");
        confirmPassword.focus();
        return;
    }

});

function checkEmail(email) {

    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    return emailRegex.test(email);
}




