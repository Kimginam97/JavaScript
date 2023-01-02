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

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding'); // 모든요소를 오른쪽
// const poppedValue = hobbies.pop();
// hobbies.shift(); // 모든요소를 왼쪽 첫번째는 삭제
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.splice(2); //새 복사본에 저장
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));
console.log(testResults.lastIndexOf(1.5));

console.log(testResults.includes(10.99));

const personalData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personalData.indexOf({ name: 'Manuel' })); //-1 반환

const manuel = personalData.find((person, idx, persons) => { 
    return person.name === 'Manuel';
});

manuel.name = 'Anna';

console.log(manuel, personalData);

const maxIndex = personalData.findIndex((person, idx, persons) => { 
    return person.name === 'Max';
});

console.log(maxIndex);