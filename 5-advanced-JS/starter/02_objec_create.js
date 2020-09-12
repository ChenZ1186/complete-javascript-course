/*                          Object.Create                   */

/* this is another way to create objects that inherit form a prototype and thats the object.create method.

steps:
- first we define an object that will act as the prototype and then create a new object based on that prototype.*/

// write prototype as a simple object and call it personProto
// note that we are not using capital letter "P" at the beginning because is not a function constructor. what we want in the prototype is the calculate age method, so we know how inheritane work, now we're just doing it in a different way instead of using function constructor, we will do it the object.create way.

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth) /*there is no yearofbirth anywhere but we're going to take care of it later. */
  }
};

// lets create john object:

var john = Object.create(personProto); /*inside the object.create function we're simply pass it the object that we defined to be the prototype object which in that case is the personProto

we will go to the consol in the browser and we will type john we will see that's it empty, but we still have the prototype. */


//now we just need to fill the john object with our data.

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// this is not an ideal way to do things creating prototype for an empty object and then fill it with data. so object.create get a second parameter, so lets do it for another person:

var jane = Object.create(personProto,
{
  name: { value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});

/*                  Premetives vs. objects                   */
/*
var age = 27;
var obj = {
  name: 'John',
  city: 'Lisbon'
};

function change(a,b) {
  a = 30;
  b.city = 'San Francisco'
}

change(age, obj);

consol.log(age);
consol.log(obj.city);

results in the consol:
27
San Francisco

we can see that the age didn't changed and that because we can change "a" as much as we want it will never effect the variable on the outside because it is a primitive, but when we pass the object it's not really the object the we pass but the reference to the object. we do not pass object to a function, but only the reference that points to the object, so when we then change the object inside of the function it is still reflected outside of the function.

*/