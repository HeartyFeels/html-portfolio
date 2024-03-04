function double(num) {
  return num*2;
}

function triple(num) {
  return num * 3;
}

const square = num => num * num;

const increment = num => num + 1;

// Function to map each element of the array with the provided callback function
function mapThis(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i])); // Pass array element to callback function
  }
  return result;
}

// Function to update each element of the array with the provided callback function
function updateEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
      array[i] = callback(array[i]); // Pass array element to callback function
  }
}


const numbers = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const nums = [2, -30, 50, 20, -12, -9, 7];
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

// Filter people aged 25 and under and extract name and email properties
const youngPeople = people
  .filter(person => person.age <= 25)
  .map(({ firstName, lastName, email }) => ({ name: `${firstName} ${lastName}`, email }));

// Calculate sum of positive numbers using reduce
const positiveSum = nums.reduce((acc, num) => num > 0 ? acc + num : acc, 0)

console.log(mapThis(numbers, double)); 
console.log(mapThis([1,2,3], double)); 
console.log(mapThis([5,10,5], triple)); 
console.log(mapThis([1,2], square));   

myarray = [2,3,4];
updateEach(myarray, increment);
console.log(myarray); 
updateEach(myarray, square);
console.log(myarray); 

updateEach(numbers,triple);
console.log(numbers); 

console.log(youngPeople);

console.log(positiveSum);
