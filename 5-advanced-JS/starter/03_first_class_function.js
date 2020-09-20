/*                                      First Class Functions: Passing Functions as Arguments                       */

/* with functions we can do the same thing that we can do with objects. 

  fact: 
  * a function is an instance of the Object type
  * a function behaves like any other object
  * we can store functions in a variable
  * we can pass a function as an argument to another function
  * we can return a function from a function
   
  and because of that we says that in javascript we have first class functions
*/

/////////////// example of how a function accept other functions as arguments

/* lets think that we have a couple of arrays filled with values and that we wanted to do some calculation with them, and we gonna use a birth year array*/

var years = [1990, 1965, 1937, 2005, 1998];

/* Remember we want to do some calculations with these values, or based on these values.
   Now, we could do a huge function which does all of these calculations that we want to perform at the same time, it then resolves all the result arrays at the same time,
   but that would not be really good practice because instead, we can write a function that will receive an array and return a new result array, and do the calculations based on a function that we pass into the calculation function.*/

   /* arr - is the array, which will be, for example, the years array,
   fn -  pass a function which does the actual calculations. */
   function arrayCalc(arr, fn) {
     var arrRes = []; //loop over the array by creating empty array
     for (var i = 0; i < arr.length; // looping on array always will be with "forloop"
     i++) {
       /* down here, inside of the loop, we will then use the function that we can pass into this function. We will push something into our result array here, */
       arrRes.push(fn(arr[i]));
     } 
     return arrRes;
    }
    /*
    we use the push function, or the push method, to be correct, which, as you remember, inserts an element at the end of an array. So the big question here is, "What are we actually going to push into the array?" The answer is that it will be the result of calling or fn function,

    /////////push method:
    The push() method adds new items to the end of an array, and returns the new length. Note: The new item(s) will be added at the end of the array. Note: This method changes the length of the array. Tip: To add items at the beginning of an array, use the unshift() method.
    */

    ///////////// fn function - simple function (callback function - function that pass into function)
    /*
    We will write a couple of simple functions that do only one single task, and these functions will actually be called "callback" functions, because they are functions that we pass into functions that will then call them later. In this case, our callback function, fn, will be called here when we want to push a new element into our array. 
    */

    function calculateAge(el) { // el - as element
        return 2016 - el;
    }

    /////////// recup: 
    /*
    Again, we have our empty array here, and then we start looping through the array that we input, which is, for example, this array here with all of these birth years. When we're done, hit this line in code here, what's going to happen is that our callback function, fn, will be called with the i element of the input array. Imagine in the first loop i is zero. So with this arr[i], we're going to retrieve the first value of the years array, so 1990, and then we'll push this 1990 into the fn function, which will be calculateAge, right? Then this function does it's work and it returns 2016 minus 1990 in this case, and then the result will simply get pushed into the array, and after this is completed five times, then the result will be returned.
    */
    // lets call that funtion:
    var ages = arrayCalc(years, calculateAge); //we are not using parentheses cause we dont want to call the function here, we want to call this funtion later.
    console.log(ages);

    ////////// results: Array(5) [ 26, 51, 79, 11, 18 ]
    /*
    Our arrayCalc function looped through the years array five times, and five times the calculateAge function here was called and then pushed the result right into the array that we then returned.
    */

    /////// Let's now write a function which can determine if someone is of full age.

    function isFullAge(el) {
      return el >= 18;
    }
    var fullAges = arrayCalc(ages,isFullAge); // Array(5) [ true, true, true, false, true ]
    console.log(fullAges);

    /////// third funcntion example: maximum heart rate
    function maxHeartRate(el) {
    // this function is valid only for people between 18 - 81 years old = if statment 
   if (el >= 18 && el <= 81) {
      return 206.9 - Math.round((0.67 * el)); // el - is the age // we also want it to return an integer
      } else {
        return -1; // if we want to return string > String("not on right age")
      } 
    }
    // math.round is the syntax to round decimal number 
    
    var rates = arrayCalc(ages,maxHeartRate);
    console.log(rates); // Array(5) [ 189.9, 172.9, 153.9, -1, 194.9 ]

/*                                 First Class Functions: Functions Returning Functions                                */

/*
let's create a function that creates different interview questions for different jobs. And this is how we're gonna do it. For each job, we will return the function that builds a string using the person's name as an input. So basically, a function returning another function.


 it will accept a string which is a job.  And then in here, according to each of the different jobs, we will return a different function which will then log a question to the console.
*/
  function interviewQuestion(job) { // return a string
    if (job === 'designer') {
      return function(name) { // this function is an anonymous funtion because it doesn't have a name.
        console.log(name + ', can you please explain what UX design is?');
      }
    } else if (job === 'teacher') {
      return function (name) {
        console.log('What subject do you teach, ' + name + '?');
      }
    } else {
      return function(name) {
        console.log('Hellow '+ name + ', what do you do?');
      } 
    }
  }

  /////  remember this returns a function, so we have to store the result somewhere.

  var teacherQuestion = interviewQuestion('teacher');
  /*
  teacherQuestion variable is this function:
   } else if (job === 'teacher') {
  }
  */
 teacherQuestion('John');

 interviewQuestion('teacher')('Mark');

/* 
 return function (name) {
   console.log('What subject do you teach, ' + name + '?');
*/