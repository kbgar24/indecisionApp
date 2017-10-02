// const square = function(x) {
//   console.log('square', this);
//   return x * x;
// };
//
// const squareArrow = (x) => {
//   returnx * x;
// };
//
// const squareArrowShort = () =>
//
// console.log(square(8));
// console.log(squareArrow(8));
//
// const getFirstName = fullName => fullName.split(' ')[0];
//
// console.log()

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// console.log(add(55,1));

// const user = {
//   name: 'Me',
//   cities: ['Detroit', 'Royal Oak', 'Fort Bragg'],
//   printPlacesLived() {
//     this.cities.forEach((city) => {
//       console.log(this.name + ' has lived in ' + city)
//     })
//   }
// }
//
// user.printPlacesLived()

const multiplier = {
  numbers: [2,3,4],
  multiplyBy: 3,
  mutiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.mutiply());
