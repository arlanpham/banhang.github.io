const smallImg = document.querySelectorAll(".small-img");
console.log(smallImg);
const mainImg = document.querySelector("#MainImg");
// console.log(mainImg);
[...smallImg].forEach((item) => {
    item.addEventListener("click", function() {
        var link = item.src;
        mainImg.src = `${link}`;
    });
});