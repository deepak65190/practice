/*const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };
  console.log(mouse[bird["size"]])*/


 /* function bark() {
    console.log('Woof!');
  }
  
  bark.animal = 'dog';*/

  /*function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  
  //console.log(lydia);
  console.log(sarah);*/

  /*function getPersonInfo(one, two, three) {
   // console.log(one);
     console.log(two);
    // console.log(three);
  }
  
  const person = 'Lydia';
  const age = 21;
  
  getPersonInfo`${person} is ${age} years old`;*/


//  let a= [...'Lydia'];
//  console.log(a)
/*function greeting() {
  throw 'Hello world!';
}

function sayHi() {
  try {
    const data = greeting();
    console.log('It worked!', data);
  } catch (e) {
    console.log('Oh no an error:', e);
  }
}

sayHi();*/
/*function Car() {
  this.make = 'Lamborghini';
this.ram="ram"
}

const myCar = new Car();
console.log(myCar);*/
/*(()=>{
let x=(y=10) 
console.log(typeof x)
})()*/

/*class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog('Mara');

pet.bark();

delete Dog.bark;

pet.bark();*/

// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);
// let a=10
// function ab(x){
// console.log(x*2)
// }

// ab(a)
// ab(a)
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
