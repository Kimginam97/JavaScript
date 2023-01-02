// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5,2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from("Hi!");
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[2]);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding'); // 모든요소를 오른쪽
const poppedValue = hobbies.pop();
hobbies.shift(); // 모든요소를 왼쪽 첫번째는 삭제
console.log(hobbies);

hobbies[1] = 'Coding';
hobbies[5] = 'Reading';
console.log(hobbies);

