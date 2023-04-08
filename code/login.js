const usernamerg = document.querySelector(".input_login_username");
const passwordrg = document.querySelector(".input_login_pass");
const button = document.querySelector(".login_signIn");


button.addEventListener("click", (x) => {
    x.preventDefault();
    if (usernamerg.value == "" || passwordrg.value == "") {
        alert("Tài Khoản Hoặc Mật Khẩu Không Đúng");
    } else {
        alert("Đăng Nhập Thành Công");
        window.location.href = "index.html";
    }
});

























// if (user.username === usernamerg.value && user.password === passwordrg.value) {
//     alert("Đăng Nhập Thành Công");
//     window.location.href = "index.html";
// } else {
//     alert("Đăng Nhập Thất Bại");
// }