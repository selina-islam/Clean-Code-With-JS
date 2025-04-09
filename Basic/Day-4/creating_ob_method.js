// creating objects with  properties and methods

const student = {
        name: 'Selina',
        age: 20,
        sub: ['math', 'physics', 'chemistry', 'english', 'bangla'], // array property
        greet: function () {
        console.log(`Hello, this is ${this.name}!;Nice to meet you.`)
}
}

student.greet() // Hello, this is Selina!;Nice to meet you.