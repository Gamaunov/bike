// $(function(){
//     $('.menu-btn').on('click', function(){
//         $('.header__top-list').toggleClass('header__top-list--active');
//     });
// });


let menuBtn = document.querySelector('.menu-btn');
let list = document.querySelector('.header__top-list')

menuBtn.addEventListener('click', mMenu);

    function mMenu() {
        menuBtn.classList.toggle('active');
        list.classList.toggle('header__top-list--active')
    }


const navLink = document.querySelectorAll('.header__menu-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

    function closeMenu() {
        menuBtn.classList.remove("active");
        list.classList.remove("header__top-list--active");
    }