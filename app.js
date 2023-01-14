window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//CSS3 Transform Effects on Scroll
let scroll = document.querySelector('.curve');
window.addEventListener('scroll', function() {
    //if the vh is 200 it is better to devide scrollY by -500
    let value = 1 + window.scrollY / -800;
    scroll.style.transform = `scaleY(${value})`;
})
