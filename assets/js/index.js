"use strict";
;
;
;
let arr_loai;
let arr_hinh;
let arr_hot;
const divbox = document.getElementById('feature');
const divhinhdep = document.getElementById('divhinhdep');
const divhot = document.getElementById('hot');
Promise.all([
    fetch('http://localhost:4000/loai'),
    fetch('http://localhost:4000/hinh'),
    fetch('http://localhost:4000/hot')
])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([data1, data2, data3]) => {
    console.log(data1, data2, data3);
    arr_loai = data1;
    arr_hinh = data2;
    arr_hinh = arr_hinh.slice(0, 8).sort((a, b) => 0.5 - Math.random());
    arr_hot = data3;
    return { arr_loai, arr_hinh, arr_hot };
})
    .then(({ arr_loai, arr_hinh, arr_hot }) => {
    // Hiển thị loại
    const boxHtml = arr_loai
        .map(loai => `<div class="fe-box">
              <a href="">
                <img src="../assets/images/product/${loai.urlloai}"
                  alt="hình ảnh minh họa các thông tin chính sách">
                <h6>${loai.tenloai}</h6>
              </a>
            </div>`)
        .join('');
    divbox.innerHTML = boxHtml;
    // Hiển thị sản phẩm
    const hinhdepHtml = arr_hinh
        .map(h => `<div class="pro">
                <a href="./product187.html">
                <img src="../assets/images/product/${h.urlHinh}" alt="">
                </a>
                <div class="des">
                <span>${h.loai}</span>
                <a href="/${h.id}" style="text-decoration:none"> <h5> ${h.ten}</h5></a>
                <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                <h4> ${h.gia.toLocaleString('vi')} <sup>đ</sup></h4>
                </div>
                <a href="/sach/${h.id}" class="cart">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </a>
            </div>`)
        .join('');
    divhinhdep.innerHTML = hinhdepHtml;
    // Hiển thị sản phẩm hot
    const hotHtml = arr_hot
        .map(hot => `<div class="pro">
              <a href="#" >
                <img src="../assets/images/product/${hot.urlHinh}" alt="">
              </a>
              <div class="des">
                <span>${hot.loai}</span>
                <a href="/${hot.id}" style="text-decoration:none"> <h5> ${hot.ten}</h5></a>
                <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                <h4> ${hot.gia.toLocaleString('vi')} <sup>đ</sup></h4>
              </div>
              <a href="/sach/${hot.id}" class="cart" >
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </a>
            </div>`)
        .join('');
    divhot.innerHTML = hotHtml;
    return { arr_loai, arr_hinh, arr_hot };
});
