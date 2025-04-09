// what is an object?

// store collections of related data or functionality; properties(key-value pairs) and methods (functions inside object)

// object representing a car

const car = {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2021,
        start: function () {
console.log('The car has started!')
        },
stop: function () {
        console.log('The car has stopped!')
}
};
console.log(car)
/*
{
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021,
  start: [Function: start],
  stop: [Function: stop]
}
  */

console.log(car.start()); // The car has started!
console.log(car.stop()); // The car has stopped!
car.start() // The car has started!