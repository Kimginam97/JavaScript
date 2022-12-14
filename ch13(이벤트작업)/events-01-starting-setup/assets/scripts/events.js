const button = document.querySelector('button');

const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
};

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click',buttonClickHandler);
// },2000)

// buttons.forEach(btn => {
//     btn.addEventListener('click', buttonClickHandler);
// })

// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault(); // 페이지 새로고침 중단
    console.log(event);
})

const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('CLICKED DIV');
    console.log(event);
    console.log(this);
})

button.addEventListener('click', event => {
    event.stopPropagation(); //상위요소 클릭리스너 실행x
    // event.stopImmediatePropagation(); // 동일요소 클릭리스너 실행 x
    console.log('CLICKED BUTTON');
    console.log(event);
})

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });

list.addEventListener('click', function(event) {
    console.log(event.currentTarget);
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    button.click();
    console.log(this);
});