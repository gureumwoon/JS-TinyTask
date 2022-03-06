const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const list = document.querySelector('.list');
const imgs = document.querySelector('.item');
let currentIndex = 1;

const size = list.clientWidth;
console.log(size);
list.style.transform = 'translateX(' + currentIndex * -size + 'px)';

function imgTransition() {
    console.log(imgs[currentIndex].id)
    if (imgs[currentIndex].id === 'first-img') {
        list.style.transition = 'none';
        currentIndex = imgs.length - currentIndex;
    } list.style.transform = 'translateX(' + currentIndex * -size + 'px)';
}


list.addEventListener('transitioned', imgTransition);
prevBtn.addEventListener('click', handleLeft);
nextBtn.addEventListener('click', handleRight);