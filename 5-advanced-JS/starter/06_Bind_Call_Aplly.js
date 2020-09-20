/*                                        06_Bind_Call_Aplly.js                                                        */
/*
So we know that functions are a special kind of object, right, and such as the array objects for example, functions also get a couple of special methods which they inherit from the function constructor object, right? So in this lecture we will talk about the powerful call, apply and bind methods, and in a nutshell, these methods allow us to call a function and set the this variable manually.
*/

var john = {
  name: 'John',
  age:  26,
  job: 'teacher',
  presentation: function(style,timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', ladies and gentelmen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' year old.' );
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};


/*
 suppose that we want to use the presentation method for the Emily object, which does not have this presentation method
*/
////// CALL Method :

/*
The first argument of the call method is always to set the this variable
*/
john.presentation('formal','morning');

john.presentation.call(emily, 'friendly', 'afternoon'); 
// in this case all the "this" method that belongs to john object will now be emily's this.


///// Apply Method : accepts the arguments as an array

/*so that's only two arguments, first this variable, and then an array where all the other arguments go. */

//john.presentation.apply(emily,['friendly', 'afternoon']);
/*Now this is not gonna work because our method does not expect to receive an array as the input.  the presentation wants two normal arguments here, it doesn't expect to receive an array, so this is not gonna work. we will use it later on. */

////// Bind Method : 
/*
  * allows us to set the this variable explicitly.
  * bind doesn't immediately call the function, but instead it generates a copy of the function so that we can store it   somewhere.
*/

  //we're gonna use the bind method to create a function with preset arguments.
  //this is the first argument of the function, of the presentation function.
  var johnFriendly = john.presentation.bind(john,'friendly'); 

  johnFriendly('morning'); // the above var wont work without this argument 
  johnFriendly('night');

  /*
  bind allows us to preset some arguments here, and this, what we just did here, actually has a name, and it's called carrying.
  */

  // Carrying : 
  /* carrying is just a technique in which we create a function based on another function, but with some preset parameters.
  */

 var emilyFormal = john.presentation.bind(emily,'formal'); 
 emilyFormal('afternoon');


 /// Example from real world : 
 
 /*
  this was the function that we created here where we then passed a callback function, which was to calculateAge and calculate if someone was of full age. So imagine this like a machine which accepts a function, and then applies that function to all of the elements of an array, right? So back then we had this FullAge function here, but actually the FullAge varies from country to country, so it's not always 18 years like we have here. For example, in Japan, you have to be 20 to be of full age, and in other countries it's actually something like 16 or 17. So what we can do is to pass in a second argument for the age limit.
 */

 var years = [1990, 1965, 1937, 2005, 1998];

   function arrayCalc(arr, fn) {
     var arrRes = []; 
     for (var i = 0; i < arr.length; 
     i++) {

       arrRes.push(fn(arr[i])); //fn function is always called with only.
     } 
     return arrRes;
    }


    function calculateAge(el) { // el - as element
      return 2016 - el;
  }

  var ages = arrayCalc(years, calculateAge); 
  console.log(ages);

  function isFullAge(limit, el) {
    return el >= limit;
  }
    var ages = arrayCalc(years,calculateAge);

    var fullJapan = arrayCalc(ages, isFullAge.bind(this,20)); // the first thing always has to be the this keyword, till now the this keyword was john or jane but now we dont have them so it will be just "this".
     console.log(ages);
     console.log(fullJapan);
     
/*Now the problem with our FullAge function is that it accepts two arguments, but our arrayCalc function here can only use it with one argument.

So what can we do here? 
I would say that the best solution is to pass in our isFullAge function, but with the limit already preset.

we use the bind method because bind allows us to create a copy of a function with a preset argument
*/




