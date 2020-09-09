// Function constructor

// john object - this is how we did the object so far
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

// function construction will be writted with capital letter.
// the parameters for the function constractore will be the variables that we want to set in our object (name, yearOfBirth,job). this objects here are instances of the person object
var Person = function (name, yearOfBirth, job) {
  // this is an object itself.
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  // this.calculateAge = function () {
  //   console.log(2016 - yearOfBirth);
  //} function moved to the prototype 
}

// inheritance combaining the function constructor with method
// we have to add all the methods and properties that we want to be inherited into the constructor's prototype property.
// non of the objects have the calculateAge method really attached to them, but still they are going to be able to use it, they will have access to it because it's in their prototype.  
Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};

//adding properties to the prototype
Person.prototype.lastName = 'Smith'; // consol.log for this property is at the bottom after the calculateAge

/*
 new is operator
 when we use the new operator, first a brand new empty object is created. after that the constracture function which in this case is Person its called with the arguments we spesified.
 calling a function creates a new execution context, that also have a "this" variable. we now that in a regular function call, the "this" variable points to the global object, but if we look at our function constructor then having the "this" variable pointing at the global object wouldn't be so useful, because like this, that we would simply set all this properties on the global object and that's of course not what we want. That's is why the new operator taes care of this. and it makes it so that the "this" variable of the function actually points to the empty object that was created at the beginning by the "new" operator.
what the "new" operator does is to point this variable not to the global object but to this new empty object. then after that when we set the name, yearOfBirth & job properties to "this", thats the same as setting them right on our new empty object. 
 finaly if the constructor function does not return anything and its clearly the case (this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;)
  then the result is simply the object that was created. 
  */
 
 // objects
 var john = new Person('John', 1990,'teacher');
 var jane = new Person('Jane', 1969,'designer');
 var mark = new Person('Mark', 1948, 'retired');
 
 //proving the prototype
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// attaching methods to the constructor function's prototype property is somthing that is something common to use. we can of course also add properties instead of methods, but that not really common.

// all of them become smith because of this > Person.prototype.lastName = 'Smith';
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
