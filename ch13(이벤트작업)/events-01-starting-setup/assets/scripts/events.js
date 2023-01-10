const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    event.target.disabled = true;
    console.log(event);
};

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click',buttonClickHandler);
// },2000)

buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler);
})

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault(); // 페이지 새로고침 중단
    console.log(event);
})