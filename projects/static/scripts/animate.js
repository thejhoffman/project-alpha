let clicked = sessionStorage.getItem('clicked');
const get_pathname = window.location.pathname;
const hiddenElements = document.querySelectorAll('.hidden');

if (clicked == "true" && get_pathname == "/tasks/mine/") {
    hiddenElements.forEach((el) => el.classList.remove('hidden'));
    hiddenElements.forEach((el) => el.classList.remove('stagger'));
} else {
    window.onload = function () {
        hiddenElements.forEach((el) => el.classList.add('show'));
        hiddenElements.forEach((el) => el.style.filter = "none");
        sessionStorage.setItem('clicked', 'false');
    };
}

const toggleRow = (element) => {
    element.getElementsByClassName('expanded-row-content')[0].classList.toggle('hide-row');
    console.log(event);
};
