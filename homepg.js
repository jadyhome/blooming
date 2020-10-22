let currentPhotos = 0
let slides = document.getElementsByTagName('img')

setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0
    }
    if (currentPhotos != slides.length - 1) {
        currentPhotos = currentPhotos + 1
    }
    else {
        currentPhotos = currentPhotos = 0
    }
    slides[currentPhotos].style.opacity = 2
}, 2500)
setInterval()