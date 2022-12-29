//toggle menu when click on bars

const bars = document.querySelector('.nav-bar .bars');
const closeMenu = document.querySelector('.menu .close');
const menu = document.querySelector('.menu');

function toggleActive (clickedItem, toggledItem) {
    clickedItem.addEventListener('click', () => {
        toggledItem.classList.toggle('active');
    });
}

toggleActive (bars, menu);
toggleActive (closeMenu, menu);

//active link in menu

const linkList = document.querySelectorAll('.menu-content ul li a');

function clearActive (list) {
    list.forEach(ele => {
        ele.classList.remove('active');
    });
}

linkList.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        clearActive (linkList);
        e.target.classList.add('active');
    });
});

//smooth scroll by clicking on link

linkList.forEach(link => {
    link.addEventListener('click', (e) => {
        scroll ({
            top: document.querySelector(e.target.dataset.section).offsetTop,
            behavior: 'smooth',
        });
    });
});

//highlight on section's link during scrolling

window.onscroll = function () {
    linkList.forEach(link => {
        let section = document.querySelector(`${link.dataset.section}`);
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            clearActive (linkList);
            link.classList.add('active');
        }
    });
}


