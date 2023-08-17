var arr_shop;
var divshop = document.getElementById('shop');
fetch('http://localhost:4000/hinh')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    console.log(data);
    arr_shop = data;
    arr_shop = arr_shop.slice(0, 16);
    return arr_shop;
})
    .then(function (arr_shop) {
    arr_shop.forEach(function (h) {
        divshop.innerHTML += "\n          <div class=\"pro\">\n            <a href=\"./product187.html\"\">\n              <img src=\"./../public/images/product/".concat(h.urlHinh, "\" alt=\"\">\n            </a>\n            <div class=\"des\">\n              <span>").concat(h.loai, "</span>\n              <a href=\"/").concat(h.id, "\" style=\" text-decoration: none;\"> <h5> ").concat(h.ten, "</h5></a>\n              <div class=\"star\">\n              <i class=\"fas fa-star\"></i>\n              <i class=\"fas fa-star\"></i>\n              <i class=\"fas fa-star\"></i>\n              <i class=\"fas fa-star\"></i>\n          </div>\n              <h4> ").concat(h.gia.toLocaleString('vi'), " <sup>\u0111</sup></h4>\n            </div>\n            <a href=\"/sach/").concat(h.id, "\" class=\"cart\">\n            <i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i>\n            </a>\n          </div>");
    });
    return arr_shop;
})["catch"](function (error) {
    console.error(error);
    // Xử lý lỗi ở đây
});
