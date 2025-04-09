//Using this keyword inside methods

const person = {
        firstName: 'Selina',
        lastName: 'Islam',
        fullName: function () {
                return ` ${this.firstName} ${this.lastName}`
        },
        introduce: function () {
              console.log(`Hi, this is ${this.fullName()}`);  
        }
        
}

console.log(person.fullName()); //  Selina Islam
person.introduce()  // Hi, this is  Selina Islam