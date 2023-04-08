var i = 0
var img = ["./hinh/banner2.jpg", "./hinh/banner3.jpg"];
setInterval(function() {
    document.getElementById('chuyendong').src = img[i];
    i++;
    if (i == 2) {
        i = 0;
    }
}, 1500);