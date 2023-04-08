var giohangs = [];
var giohang = {
    tensp: "",
    gia: "",
    soluong: "",
    hinh: "",
    khoitao: function giohang(hinh, ten, gia, soluong) {
        this.hinh = hinh;
        this.tensp = ten;
        this.gia = gia;
        this.soluong = soluong;
    },
    xuatgiohang: function(giohangs) {
        let text = "";
        for (let i = 0; i < giohangs.length; i++) {
            text += '<div id="giohang11">';
            text += this.motsp_giohang(giohangs[i]);
            text += '</div>';
        }

        text += "<div id='btn-giohang'><a href='thanhtoan.html'><button>Thanh Toán</button></a></div>";
        return text;
    },
    motsp_giohang: function(giohang) {
        let text = "";
        text += '<div><img heigth="40px" width="60px" src="' + giohang.hinh + '"></div>';
        text += '<div class="ctgh"><p>' + giohang.tensp + '&emsp;</p></div>'
        text += '<div class="ctgh"><p><span>' + giohang.gia + '</span>VND</p></div>';
        text += '<div class="ctgh"><input nam="soluong" disabled value="' + giohang.soluong + '" min="1" type="number" ></div>';
        text += '<div class="ctgh"><p>=&emsp;<span>' + giohang.gia * giohang.soluong + '&emsp;</span>VND</p></div>';
        text += '<div class="ctgh"><button onclick ="xoaspgiohang(this)">X</button></div>';
        return text;
    }
}