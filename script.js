
let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');


if(top >= offset && top<offset + he){
navLinks.forEach(link => {
    navLinks.classList.remove('active')
    document.querySelector('header nav a[href='+ id +']').classList.add('active')
});
};
    });
    let header = document.querySelectorAll('header');

    header.classList.toggle('sticky', window.scrollY > 100);

 menuIcon.classList.remove("bx-x");
 navbar.classList.remove("active");

};