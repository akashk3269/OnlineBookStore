var i = 0;
var images = [];

images[0] = '../Images/books11.jpg';
images[1] = '../Images/books12.jpg';
images[2] = '../Images/books13.jpg';
images[3] = '../Images/deal-img.jpg';


function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", 2000);
}
window.onload = changeImg;



$(document).ready(function () {
    $('.btn2').click(function () {
        $('.toast').css({ display: 'block' }).show(2000).hide(3000);
    })
})


function addToCart(){
    alert("Your product has been added to the cart");
}

