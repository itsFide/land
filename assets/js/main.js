$(document).ready(function(){
    $('.language .head').click(function() {
    $(this).closest('.language').find('ul').stop().slideToggle();
    });
    });
let linkBtn = document.querySelectorAll('.lang-dropdown-item-link');
    let langHead = document.querySelector('.lang-head');
    linkBtn.forEach((event)=>{
        event.addEventListener('click',()=>{
        linkBtn.forEach((e)=>{
            e.classList.remove('lang-active')
        })
        event.classList.add('lang-active');
        langHead.innerText = event.innerText;
        $('.language').find('ul').stop().slideToggle();
        })
})
// Burger
let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.nav__mobile');
burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})