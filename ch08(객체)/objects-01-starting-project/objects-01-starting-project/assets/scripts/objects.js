const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function () {
        alert('Hi there!');
    },
    1.5: 'hello'
};

// person.age = 31;
delete person.age;
// person.age = null;
// person.age = undefined;
person.isAdmin = true;

console.log(person['first name']);
console.log(person[1.5]);
console.log(person);
