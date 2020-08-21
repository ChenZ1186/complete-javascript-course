/*
if / else statments
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
  /* till here nothing happens cause married is false
  and we didnt defined the false statment married*/
} else {
    console.log(firstName + ' will hopefully will be marrie soon :)');
}

/* case when we have boolen var we wont need to define true or false
  inside the if_else statment.
*/

var isMarried = true;
if (civilStatus) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully will be marrie soon :)');
}


var JohnMass, JohnHeight, MarkMass, MarkHeight, JohnBMI, MarkBMI
JohnMass = 65;
JohnHeight = 175;

MarkMass = 80;
MarkHeight = 187;

JohnBMI = JohnMass / (JohnHeight * JohnHeight);
MarkBMI = MarkMass / (MarkHeight * MarkHeight);

if (MarkBMI > JohnBMI) {
    console.log('mark\'s BMI higher than John\'s.');
} else {
  console.log('John\'s BMI higher than Mark\'s.');
}


/**********
 boolean logic
*/

var firstName = 'John';
var age = 33;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  // Between 13 and 20 === age >= 13
      // AND age < 20 note! if we want to write and > &&
      // if we want to write or then > ||
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
     console.log(firstName + ' is a man.');
    }

/*
 * The Ternary Operator and switch Statments
so far we learnd about elseif decisions, but there are more ways
of doing so.
*/

/*
The Ternary Operator - also called as the conditional operator.
is an operator that basically allows us to write if_else statment all
in one line.
*/

var firstName = 'John';
var age = 16;
// now lets use the ternary operator in order to log to the console
// if john drinks a beer or if he drinks juice depending on his age.

age >= 18 ?  console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// ?  question mark same as if
// : colon operator mark as else
// another example

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
// same example but now with elseif statments
/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

/*********
    The Switch Statment
*/
// Its like a huge ifelse statment where we have multiple
// else if clauses.

var job = 'teacher';
switch (job) {  /* in side the parentheses we put what we want to task, what we want to evaluate */
    case 'teacher': // be ware that this part ends with colon (:)!!
    case 'instructor': // more options to run this case
      console.log(firstName + ' tacher kids how to code.');
      break;
    case 'driver':
      console.log(firstName + ' drives an uber in Lisbon.');
      break;
    case 'designer':
      console.log(firstName + ' designs beautiful websites.');
      break;
    default:
      console.log(firstName + ' does somthing else.');
}
/* what we did here is to comapare  the job to each of these different cases, so if the job is teacher so do the first case and if the job is driver so do the driver case and so on. */
/*
we also need to add a break statment in order to stop the switch from continue to the next case.
*/ /*
if non of the cases happens we can add default
*/ /*
we can also have multiple case clauses for the same piece of code that we want to execute. it means that we can have more then one option to apply the case for example teacher and also instructor
*/

/*
lets make another exersices with the example of the age range with switch.
*/
/*
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  // Between 13 and 20 === age >= 13
      // AND age < 20 note! if we want to write and > &&
      // if we want to write or then > ||
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
     console.log(firstName + ' is a man.');
    }
  */

  age = 131
  switch (true) {  /* switch(true) its a trick to simply make the switch work as else if statment with ranges*/
    case age < 13:
    console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
    case age >= 30 && age < 130:
    console.log(firstName + ' is a man.');
    break;
    default:
        console.log(firstName + ' is dead');
  }

/******************************************
    Truthy and falsy values
*/

/* In JavaScript a falsy value is a value that is considered false
   when evaluated in an if/else statment condition, and the values that are falsy in JavaScript are:
   undifined, null, zero, empty strings ('').
   they are not exactly false but they will turn out to be false when evaluated in an if/else condition.

   Truthy values - are all the values that are considered true when evaluated in an if/else statment condition. its actually all the values that are not falsy.
*/

var height;  // height's datatype is undifined and undifined = falsy

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

/* this is very handy way of testing if a Variable has actually been defined or not.*/

// lets defined the height value now.

var height = 23;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}


/* lets set it now to zero and see whats happens. The thing here is that the variable is actually defined now. so we have a value now so the variable is NOT undifined but if we will reload the page, it will active the second console which says that the valu has not been defined
that is a situation that we want to avoid.
so we also have to say that if the value set to zero well then the variable is also defined - remember that we can use the "or" operator. */

var height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

/* The difference Between "===" & "=="
   "===" - this is the one for strict equality comparisons
   "==" -  this one does type coercion which means that the data types of both variables do not have to match
*/

if (height == '23') {  // here the datatype is string
    console.log('The == operator does type coercion');
}
 /* the result is that the console has been activated
    what this means is that JavaScript when we use "==" operator in the (height == '23') its converts the string of 23 to a number and then says that is the same as 23 the number.*/

// challenge 2 need to be competed here.

/*****************
  Functions
*/

/* Functions are like contaners that holds some lines of code and we can pass arguments  into them and they can then return us our results*/
// function + [name for the function](arguments)
function calculateAge(birthYear) {
  return 2018 - birthYear;   // in this case we want to return the age
}

// lets use this function
// name of the function (arguments = value).
// and we also have to store it in a var
var JohnAge = calculateAge(1990);
var MikeAge = calculateAge(1948);
var JaneAge = calculateAge(1969);
  console.log(JohnAge);

/* lets now add some more complexity to it and lets create a new function
  which will calculate the years until retirement. base on our birth year we will be able to calculate how many years we have left until we retire */

  function yearsUntilRetirement(year,firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
      console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
      console.log(firstName + ' is already been retired');
    }
  }

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike'); /* in this case Mike already is retired so  we have to make an if/else statment here */
yearsUntilRetirement(1969, 'Jane');

/* keep in mind that we can pass in arguments into functions then we can return results from a function using the return keyword and we can then save these results into a variables "var JohnAge = calculateAge(1990);"
also functions can call other functions "var age = calculateAge(year);" and they do not need to return somthing.*/

/*****************************
    Function Statments and Expresstions
*/

/*  till now we declared functions using functions statments, but there actually another way of writing functions in JavaScript and that by using functions expressions. in other words we gonna write functions in a slightly different way*/
/* when we write a function expressions we start by writing the function keyword without the name and then we put the arguments list, and then we assign this function to a variable, so we decalre a variable and this one Im going to call "whatDoYouDo", so its basically a function where we paste in the job and then the function tells us what that person does. */
var whatDoYouDo = function(job, firstName) {
    switch (job) {
      case 'teacher':
          return firstName + ' teaches kids how to code';
          // and now we will actually not have to include the break
      case 'driver':
          return firstName + ' drives a cab in Lisbon.';
      case 'designer':
          return firstName + ' designs beautiful websites';
      default:
          return firstName + ' does somthing else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));
/* note - when we hit the return keyword then we return whatever we define after it but what also happens is that the function immediately finishes.
so the return keywords does not only return the value but it also immediately finishes the function.*/

/* Statments Vs. expressions
    expressions - are pieces of code that always produce a value, and it doesn't matter how long they are as long as the code results in a single value, and then it is an expression. 2 + 3 > this is JavaScript expression. and the same is when we call this function "console.log(whatDoYouDo('teacher', 'John'));". to recap, anything that we do that produces a result is an expression. in other words, when ever JavaScript expect a value we always have to write an expression.

    statments - they do just perform actions, so they do things but they do not produce immediate resutls, so these are things like FL statments, loop and function declaration. they dont produce any immediate value and because of that they are called statments.
*/

/*************************************
    Arrays
*/

/* Arrays are fundamental concept in JavaScript that we're gonna use throughout your entire JavaScript Live.

    till now, we had different variables for different persons, but now imagine how handy it would be to bundle them all into one single variable and in JavaScript we have Arrays for that. they are like collections of variables, thay can even have different datatypes.
*/
  // when we index, the 1st element is 0 then 1 , 2 ... n
  var names = ['John', 'Mark', 'Jane'];
  var years = new Array(1990, 1969, 1948);

  // how to access elements in Array
  console.log(names[0]); //index 0 is the 1st elemnt in the Array which is John

  // if we want to now the length of the Array we can use this pattern
  console.log(names.length); // this will show how many elemnts in the Array.

  // we can also use the syntax to mutate the date in the Array
  names[1] /*[1] = Mark*/ = 'Ben'; // now index 1 will be Ben.
  console.log(names[1]);

  // we can also add data to the Array, by adding a position that not in the Array
  /*names[5] = 'Mary';
  console.log(names);  // without a specific number of index we will get all the Array's values. we can also see that the Array specify that we have 2 empty slots cause we jumped from index 2 to index 5 0,1,2,..,5
  */

  // if we want to add value to the end of the Array we can use the .length
  names[names.length] = 'Mary';
  console.log(names);

  // it can also be different data types

  /*let's say we want to have all the information about John all in one variable.
  */

  var john = ['John', 'Smith', 1990, 'tearcher', false];

  /* now we have different data types all in one data structure which is this Array. these are the very basics of Arrays.
  let's make it even better, becuase there are a couple of functions that we can basically apply to Array, and these functions are called methods that are specific to Array. */

  // we can do this:
  /* the push function or the push method what it will do is it will add an element
  at the end of the Array. so let's say that john's favorite color is blue, so if we pass in blue inside the parentheses, it will then add that element to the end of the Array*/

  /*there are a couple of methods that are most use. there are tons of different methods for Arrays. */
  john.push('blue'); // it will add element to the end of the Array.
  john.unshift('Mr.'); // it will add element to the beginning of the Array.
  john.pop(); // it removes the element from the end
  john.shift(); // it will remove the first elemnt
  console.log(john);

  /* [Array's var].indexOf() - it will return the position of the argument that we pass inside of the Array. lets say that we want to know the position of the 1990
  note - if the element is not in the Array it will return minus onr (-1)*/
  console.log(john.indexOf(1990));
  console.log(john.indexOf(23)); /* will bring -1 cause we dont have this element. the most usfull thing of this method is that we can test if the element is actually exists in the Array.*/

  // lets test if designer is an elemnt in the Array with if_else statment:

  var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
  console.log(isDesigner);


  /**********************************
  Objects and properties
  */

  /* imaginge that you wanted to access an element of the Array, not by its index but by a specific name, so basically naming each of the values. */

  /* in objects we define key value pairs, which means that each value has a name which is called the key. so in simple words we can use objects to group together different variables that belong together and that have no particular order. in objects the order is not care. */

  var john = {
      firstName: 'John',  //John is the value and firstName is the property
      lastName: 'smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'], /* Array inside the object
      we can also add objects inside of an object */
      job: 'teacher',
      isMarried: false
  };
  console.log(john);

  /* access to the properties. all we need to do is to use the dot notation
  there are to ways to access the property 1) .notation 2) brackets */
  console.log(john.firstName);  //.firstName this how we access to the property
  console.log(john['lastName']); /* we have to write the key name inside the brackets and its have to be with quotes (string)
  we can also create a var like x that will holle the element 'birthYear'
  and we will put the var inside the brackets instead one of the element as string.*/

  var x = 'birthYear'; // thats the third elemet birthYear = 1990
  console.log(john[x]);

  // mutate objects - which means to change the elements
  john.gob = 'designer';
  john['isMarried'] = true;
  console.log(john);

  /* 2 different ways to initializing a new Array and the same with Objects
  var jane = new object();
  jane.name = 'Jane';
  jane.birthYear = 1969;
  jane['lastName'] = 'Smith';
  console.log(jane);*/

  /*                        Objects and methods                 */

  /* so far we learnd the objects can hold different types of data including Arrais and other objects but we can also attach functions to objects and this functions are called methods*/

  var john = {
      firstName: 'John',
      lastName: 'smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false,
      calcAge: function(birthYear) {
        return 2018 - birthYear;
      }
  };
  console.log(john.calcAge(1990));

  // methods basics
  /* instead of passing in the birthYear inside the methods we can use built-in functions called this.*/

  var john = {
      firstName: 'John',
      lastName: 'smith',
      birthYear: 1992,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false,
      calcAge: function(/*birthYear*/) {
        return 2018 - this.birthYear; // this = var john
      }
  };
  console.log(john.calcAge());

  // what if we want to store the result in to john object?

   john.age = john.calcAge();

  // if we can access in a current object like this, that means that we can also set it. so instead of returning the number here : return 2018 - this.birthYear; we can do this:

  var john = {
      firstName: 'John',
      lastName: 'smith',
      birthYear: 1992,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false,
      calcAge: function(/*birthYear*/) {
        return this.age = 2018 - this.birthYear; // this = var john
      }
  };

  john.calcAge();
  console.log(john);

/*                        Loops and Iteration                           */
  // there are few kinds of Loops in JavaScript
  // suppose we need to print the numbers from 0 - 9.

  /*                            ForLoop                        */

  /* ForLoop has 3 parts. #1 it has initial values of the counter. #2 the condition that is evaluated before each loop iteration. #3 counter update after each iteration. */
  for (/*#1*/var i = 0;/*#2*/ i <  10;/*#3*/ i++ /*i+=2*/ ) {
      console.log(i);
  }

  /* #1 - this is the initial value and it also assign to var
     #2 - the structure of the loop
     #3 - counter update for each iteration i++ mean to increas by 1
          increas by 1 i++ it the same as i = i + 1. if we want to increas every time by 2 we can write i += 2 which is the same as i = i + 2.*/
  // complax example. we will start with john Array.
  /* lets say that we have an app where we need to display these five values a
     and we need to load it to the user interface */
  var john = ['John', 'Smith', 1990, 'tearcher', false];

  for (var i = 0; i < john.length; i++) {
      console.log(john[i]);
  }

  /*                          while loop                               */

  // while only have the 2nd condition.
  // if we want to while to make the same as the forloop we need some settings
  var i = 0;
  while (i < john.length) {
      console.log(john[i]);
      i++;
  }

  /*                   continue and break steps                       */

    // break will be to get out of the Loop
    // continue will contiue the loop by skiping values.
    // lets say we want to lock only elemet which are strings
    var john = ['John', 'Smith', 1990, 'tearcher', false];

    for (var i = 0; i < john.length; i++) {
        if (typeof john[i] !== 'string') {
            continue;                           // continue
        }
        console.log(john[i]);
    }


    for (var i = 0; i < john.length; i++) {
        if (typeof john[i] !== 'string') {
            break;                           // break
        }
        console.log(john[i]);
    }

    /* the counter will stop at the moment we'll hit an elemet which is not string and stop the loop */

    // Looping backwards
    for (var i = john.length - 1; i >= 0; i--) {
        console.log(john[i]);
    }

    /*                      JavaScript versions                   *

    /* wich version should and can we use?
       ES5
       * Fully supported in all browsers
       * Ready to be used today.

       ES6/ES2015
       ES7/ES2016     well supported in all modern browsers
       ES8/ES2017     no support in older browsers
                      can use most features in production with transpiling and polyfilling (converting to ES5)

       ES9/ES2018     Future versions, together called ESNext
       ES10/ES2019    some features supported in modern browsers
                      can already use some features in production with transpiling and polyfilling.

      in the first part of the course we will use ES5 and then move to ES6+,
      ES7 ES8 2nd part.

      JavaScript codes(executed) have to be host in some environment and that is most typically a browser (google chrome, firefox , etc..) this is where JavaScript runs. there can also be other hosts such as the NoJS web server or even some applications that accept JavaScript code input.
      ** we will be focusing in the browser in this course. */

      /*             Executing Context and the execution Stack            */
      /*
      in what order the code run? for that we need to understand the Executing Context. all JavaScript code need to be run in an environment, and those environment are called Execution context.
      the default is global Execution Context which is for variables and functions that are not inside of any function. we can also think about execution context as an object which in case of the browser its the window object.

    var name = 'John'; => global function

    function first() {
          var a = 'Hello!';     => all this function is also global execution
          second();                 Context
          var x = a + name;
    }

    function second() {
      var b = 'Hi!';              => all this function is also global execution
    third();                       Context
    var = z = b + name;
    }

    function third() {
        var c = 'Hey!';
        var z = c + name;
    }

    first(); here we called the very first function. a new function gets its new execution context. whats happens is that this new context is put on top of the current context. forming so called execution Stack.
    whats happens now is that the "a" var (in the first function) will now get stored in the execution context for this function and not any more in the global context.
    now we call the second function, and once again a new execution context will be created and put on top of the execution stack and it will continue like that till the third function which there we dont have any nest function inside, so it will done its work, its doesnt contiue to any other function, in other words its not trigger another function. so whats happens now its when the third function done its get off the execution context (the function returns).
    so whats happens to his execution context? its just gets removed from the top of the stack. same happens to the second function and the first function. */

    /*                      The variable objects                        */

    /*
    * the argument objects created, containing all the arguments that were passed into the function.

    * Code is scanned for function declarations for each function, a property   is created in the Variable Object, pointing to the function.

    * Code is scanned for variable declarations: for each variable, a property is created in the Variable Object, and set to undifined.

    the last 2 stars are called hoisting */

    /*                Hoisting in Practice  - in path complete-JavaScript-course/3-how-JS-works/starter/script.js */

    /*            Scoping and the scope Chain  */

    /*
    The creation of the scoping chain. what does it mean?
    * scoping answer the question "where can we access a certain variables?"

    * Each new function create scope: the space/environment, in which the variables it defines are accessible.
    In JavaScript the only way that we have to create a new scope is to write a new function and this is somthing important in JavaScript.

    * Lexical scoping: a function that is lexically within another function gets access to the scope of the outer function.

    -----------------------------------------
    |  var a = 'Hello!';          Global scope
    |  first();                      VO global
    |                             can see only a
    |  function first() {
    |     -------------------------------------
    |     | var b = 'Hi';           first() scope
    |     | second();               [VO1] + [VOglobal]
    |     |                         can see only a + b
    |     | function second() {
    |     |     -----------------------------
    |     |     | var c = 'Hey!';         scond() scope   |
    |     |     | console.log(a + b + c); [VO2] + [VO1] +
    |     | }   |                         [VOglobal]
    |     |     |                         can see a + b + c
    |     |     -----------------------------
    | }     ----------------------------------
    ----------------------------------------------
    what is happening is that JavaScript searching for variable a in the most inner scope and when it not finding it, js goes upper and searching in the first scope and again its not finding it so it goes more up to the global scope and there it finds the 'a' variable.
    Note! - IT CANNOT WORK BACKWARDS, for example global scope will never ever will have access to the variables b + c unless we return the values from the functions. so localy variables are not visiable to their parent scopes

    in this example, in the second scope we have access to the variable object of the second function of the first function and to global variable object what will happened in practice?
    find the practice in path complete-JavaScript-course/3-how-JS-works/starter/script.js*/

    /*                        this keyword                 */

    /* "this" variable is a variable that each and every execution context gets and its stored in the execution context object.

    where does it points?

    Regular function call: the this keyword points at the global object (the window object, in the browser).

    Method call: the this variable points to the object that is calling the method.

    the this keyword is not assigned a value until a function where it is defined is actually called.

    practice at path complete-JavaScript-course/3-how-JS-works/starter/script.js
