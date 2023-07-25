// JavaScript代码

const slideshowImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let currentImageIndex = 0;

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
    const slideshowImg = document.getElementById("slideshowImg");
    slideshowImg.src = "images/" + slideshowImages[currentImageIndex];
}

function showContactInfo() {
    const contactInfo = document.getElementById("contactInfo");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
}

// 自动轮播图片，每隔3秒切换一张图片
setInterval(showNextImage, 3000);
