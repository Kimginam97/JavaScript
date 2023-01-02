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

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.splice(2); //새 복사본에 저장
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));

// const personalData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personalData.indexOf({ name: 'Manuel' })); //-1 반환

// const manuel = personalData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personalData);

// const maxIndex = personalData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjustedPrices: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjustedPrices: price * (1 + tax)}
    return priceObj;
}); // 새로운 배열 생성

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    }else{
        return -1;
    }
});
// console.log(sortedPrices);
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, index, prices) => {
//     return price > 6;
// });

const filteredArray = prices.filter(price => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//     sum += price;
// })

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue + curValue;
// }, 0)

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);

const data = 'new york;10.99;2000';
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragements = ['Max', 'Schwarz'];
const name = nameFragements.join(' ');
console.log(name);