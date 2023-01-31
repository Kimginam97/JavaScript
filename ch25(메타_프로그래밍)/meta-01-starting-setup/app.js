const uid = Symbol();
console.log(uid);

const user = {
    // id: 'p1'
    [uid]: 'p1',
    name: 'Max',
    age: 30,
    [Symbol.toStringTag]: 'User Object'
};

user[uid] = 'p3';

user.id = 'p2';

console.log(user[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());

const company = {
    curEmployee: 0,
    employees: ['Max', 'Manu', 'Anna'],
    next() {
        if (this.curEmployee >= this.employees.length) {
            return { value: this.curEmployee, done: true };
        }
        const returnValue = {
            value: this.employees[this.curEmployee], done: false
        };
        this.curEmployee++;
        return returnValue;
    },
    getEmployee: function* employeeGenerator() {
        // let employee = company.next();

        // while (!employee.done) {
        //     yield employee.value;
        //     employee = company.next();
        // }
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];
        }
    }
};

// for (const employee of company) {
//     console.log(employee);
// }

console.log(company.getEmployee().next());