var nameVar = 'Kendrick';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Bob';
console.log('nameConst', nameConst);

function getPetName() {
  petName = 'Hal';
  return petName;
}


//Block scoping

var fullName = 'Andrew Mead';

let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
