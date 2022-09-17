// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// hiddenElements.forEach((el) => observer.observe(el));
let clicked = sessionStorage.getItem('clicked');
const get_pathname = window.location.pathname;
const hiddenElements = document.querySelectorAll('.hidden');

if (clicked == "true" && get_pathname == "/tasks/mine/") {
    hiddenElements.forEach((el) => el.classList.remove('hidden'));
    hiddenElements.forEach((el) => el.classList.remove('stagger'));
} else {
    window.onload = function () {
        hiddenElements.forEach((el) => el.classList.add('show'));
        sessionStorage.setItem('clicked', 'false');
    };
}
