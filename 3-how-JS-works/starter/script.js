///////////////////////////////////////
// Lecture: Hoisting
/*
                function declaration

function calculateAge(year) {
    console.log(2016 - year);
}
*/
/*this is how we've been doing it up until this point, we first declare the function and then call the function  */

// calculateAge(1990);

/* we can do it also in another way lets comment the calculation above (calculateAge(1990);) and the function and we will bring it to here, and we will write the calculation before it's function
calculateAge(1965); // like this
function calculateAge(year) {
    console.log(2016 - year);
}
*//* we will see that it still works! this is hoisting. in the creation phase of the execution context, which in this case it's the global execution context. the function declaration calculateAge is stored in the variable object and even before the code is executed. this is why when we then enter the execution phase the calculateAge function is already availble for us to use it. so we can first use it and only later in our code declare it.

                function Expresstions
* declare a variable

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);

now lets erase the calculation (retirement(1990);) and bring it above the function.
retirement(1990);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

/* this time it didnt work, and this is what we expected. the reason for that is because this function:
retirement(1990);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

is not a function declaration, but a function expression and hoisting with functions only works for function declarations.

Now remember that Hoisting also happens with variables, but in a different way.

                    variables

var age = 23;
console.log(age);

/*what will happened if we will use this variable before we actually decalre it in our code

console.log(age);
var age = 23;
*/
/* whats happened is that we got an undifined var. and thats exactly how hoisting works with variables.

if we were attemped to erase the var we would get an error because JavaScript is searching to declare that var.

lets take it one step further by creating a function
var age = 23;
function foo() {
    var age = 65;
    console.log(age); // why this consol print 65
}

foo();
console.log(age); /* what will happened?? and this consol print 23 ??

this is because that the age variable (var age = 23; above the function) is already stored in the global execution context object. so in the variable object of the global execution context object the foo() function gets its own execution object. those to age variables are completely different variables */


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
};
*/

//results Hello!Hi!Hey
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c +  d);
}
*/
/* Execution Stack:
   Global Execution Context > Execution Context first() > Execution Context second() > Execution Context third()

   Scope Chain:
   scope third() > scope second() > scope first() > global scope

   Since the third function is not in the scope of the second function, IT CANNOT ACCESS VARIABLES B AND C defined in the second and first functions IT CAN ONLY ACCESS THE Global VARIABLE A, cause the function is written in the global scope.so , its execution contexts that store the scope chain of each function in the variable object, but they don't have an effect on the scope chain itself. */

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(c); // in this case we will have an error cause c is not defined and that becuase variable c is in a different scope.
} */

/* who called the third function ?
the second function is the function that defined the c variable and then called the third function but still the third function cannot access variable c which is trying to print here, becuase the execution stack is different from the scope chain. to answer the question, who can access the c variable (the order in which the functions were called doesn't matter) all that matters is that the third function is in a different scope than second function and that is why it cannot access variable c

so which variable can the third function actually access?
answer - variable a and d
*/
/* first option to fix the problem:
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}
*/
//second way of fixing the problem bring function third into the scope
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()

        function third() {
            var d = 'John';
            console.log(c + b);
        }
    }
}

*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this); // The ‘content’ attribute of Window objects is deprecated.  Please use ‘window.top’ instead.
/*
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); // "this" variable is once again the window object. this is a regular function code and not a method, as we learned in a regular function code, the "this" keyword always points to the window object, because the object that this function is attached to is the global object, so it has to be the "this" variable here as well.
}


// lets move on to an object (our John object)

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
          console.log(this); // here we can also log the "this" keyword, but first of all, we have to perform the method code.
          console.log(2016 - this.yearOfBirth);

          function innerFunction() {
                console.log(this);
          }
          innerFunction();
    }// this is a method
}

    john.calculateAge();

    /* the first "this" keyword is the john object as ecpected.
    the second "this" keyword in the inner function here is now back to being the window and this is a bit counter-intuitive. so the second "this" function is not john object cause it's simply the rule, and the rule is that when a regular function code happens then the default object is the window object (at atleast whats happened in the browser), so once again this is not a method, because the method is called calculateAge so its method of the john object but this function here:
    function innerFunction() {
          console.log(this);
    }
    innerFunction();

    although it's written inside of a method its still a regular function. so when we called it, the second "this" keyword is no longer john object, but instead points to the window object.

    lets now complicate things:
    we said that the "this" variable is only assigned a value as soon as an object calls a method

    lets create another object called Mike */

    /*
    var mike = {
        name: "Mike",
        yearOfBirth: 1984,
    };
    */
    /* lets say that we want to calculate the age of Mike, so one thing that we could do is to copy this calculate method we built before for john and paste in Mike object.

    we can also do somethind that called "Method borrowing".
    we are going to borrow john's method to use it on Mike*/
    
    var john = {
        name: "John",
        yearOfBirth: 1990,
        calculateAge: function() {
              console.log(this); // here we can also log the "this" keyword, but first of all, we have to perform the method code.
              console.log(2016 - this.yearOfBirth);

              function innerFunction() {
                    console.log(this);
              }
              innerFunction();
        }// this is a method
    }
    //john.calculateAge();
    //mike.calculateAge = john.calculateAge;
    // in this way we are treat the function here like as a variable
    // lets use the function. after borrowing we want to call it

    //mike.calculateAge();
    /* this time we wont use the inner function
     from the john.calculateAge(); comes from john object and the 26 age of John, but when we now call the calculateAge method for mike which we had borrowed  then the object becomes the Mike object and now we have mike's age here, and this approves that the "this" variable is only assigned a value when the object calls the method. the "this" keyword only become somthing as soon as the method gets called  */

    var bob = {
        name: "Bob",
        yearOfBirth: 1982,
        calculateAge: function() {
            console.log(this); // writting this is the same as writing bob it will show us the elements of the object
            console.log(2016 - this.yearOfBirth);
        }
    }
    bob.calculateAge();
