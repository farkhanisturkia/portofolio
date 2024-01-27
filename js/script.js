// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};

// click anywhere to remove sidebar
const hamburger = document.querySelector('#hamburger-menu');
const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');
const list4 = document.querySelector('.list4');
const list5 = document.querySelector('.list5');
document.addEventListener('click', function(e){
    if (list1.contains(e.target) || list2.contains(e.target) || list3.contains(e.target) || list4.contains(e.target) || list5.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});