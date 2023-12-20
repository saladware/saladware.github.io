let computed_offset = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop.replace("px", "")) * 1.1;
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - computed_offset;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav li a[href*=' + id + ']').parentElement.classList.add('active');
            });
        };
    });
};

const slider = document.querySelector('.courses');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
});
slider.addEventListener('mouseup', () => {
    isDown = false;
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); 
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});