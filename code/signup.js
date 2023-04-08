const usernamerg = document.querySelector(".input_signup_username");
const passwordrg = document.querySelectorAll(".input_signup_password");
const button = document.querySelector(".signup_signIn");

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (
        usernamerg.value === "" || passwordrg.value === "") {
        alert("Vui Lòng Không Để Trống");
    } else {
        const user = {
            username: usernamerg.value,
            password: passwordrg.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(usernamerg.value, json);
        alert("Đăng Ký Thành Công");
        window.location.href = "login.html";
    }
});