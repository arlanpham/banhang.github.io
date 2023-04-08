var sanphams = [];
let sanpham = {
    masp: "",
    tensp: "",
    gia: "",
    ctsp: "",
    hinh: "",
    khoitao: function sanpham(masp, tensp, gia, ctsp, hinh) {
        this.masp = masp;
        this.tensp = tensp;
        this.gia = gia;
        this.ctsp = ctsp;
        this.hinh = hinh;
    },
    xuatsp: function(sanphams) {
        let text = "";
        for (let i = 0; i < sanphams.length; i++) {
            text += '<div class="sanpham">';
            text += this.motsp(sanphams[i]);
            text += '</div>';
        }
        return text;
    },
    motsp: function(sanpham) {
        let text = "";
        text += ' <div><img src="./hinh/' + sanpham.hinh + '"></div>';
        text += ' <h4>' + sanpham.tensp + '</h4>'
        text += '<p><span>' + sanpham.gia + '</span> VND</p>';
        text += '<input nam="soluong" value="1" min="1" type="number"><br>';
        text += '<button class="muasp" onclick="chonhang(this)">MUA</button>';
        text += `<button class='xemsp' onclick="window.location.href = 'spct.html'" >XEM</button>`;
        return text;
    }
};
let sp1 = new sanpham.khoitao("001", "CABOTINE DE GRES", "1700000", "Nước Hoa Pháp", "CABOTINE DE GRES.jpg");
sanphams.push(sp1);
let sp2 = new sanpham.khoitao("002", "Guerlain", "3500000", "Nước Hoa Pháp", "guerlain.jpg");
sanphams.push(sp2);
let sp3 = new sanpham.khoitao("003", "Hermes Twilly Eau Poivree ", "2000000", "Nước Hoa Pháp", "Hermes Twilly Eau Poivree.jpg");
sanphams.push(sp3);
let sp4 = new sanpham.khoitao("004", "Channel", "1900000", "Nước Hoa Pháp", "channel.jpg");
sanphams.push(sp4);
let sp5 = new sanpham.khoitao("005", "Lavie Est Belle", "1600000", "Nước Hoa Pháp", "Lavie Est Belle.jpg");
sanphams.push(sp5);
let sp6 = new sanpham.khoitao("006", "Riori", "1600000", "Nước Hoa Pháp", "Riori.jpg");
sanphams.push(sp6);
let sp7 = new sanpham.khoitao("007", "Charrier Mademoiselle", "1900000", "Nước Hoa Pháp", "Charrier Parfums Mademoiselle France.jpg");
sanphams.push(sp7);
let sp8 = new sanpham.khoitao("008", "Miss Dior", "2100000", "Nước Hoa Pháp", "miss.jpg");
sanphams.push(sp8);

let sp = sanpham
document.getElementById("showsanpham").innerHTML = sp.xuatsp(sanphams);