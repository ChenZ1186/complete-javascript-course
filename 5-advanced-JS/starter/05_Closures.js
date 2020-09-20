/*                                05_Closures.js                                        */

/*
we want to write a small function that returns a function which calculates how many years we have until retirement.
*/

function retirement(retirementAge) {
  var a = ' years left until retirement.';  
  return function (yearOfBirth) {
      var age = 2016 - yearOfBirth;
      console.log((retirementAge - age) + a);
    }
}




/*
 this returns a function, so we can store the result of calling this function in a variable, and then this variable will be a function as well.
*/
var retirementUS = retirement(66);

retirementUS(1990);

//retirement(66)(1990);

////////// Closures Summary
/*
An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

/////////   recup with snapshots on notebook app 

And now, the summary makes even more sense to you, right? So an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned. So let's now see how this function that we created can be useful for us. So we can create three different functions for countries with different retirement ages, and use these functions over and over again. So this is similar with something that we did before, right? So we have a more generic function up here, the retirement function, which we can then use to create more-specific functions. And this is only one of the many application cases of closures.
*/

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);
retirementGermany(1990);
retirementIceland(1990);

/*
/////// my solution ! and its working!!! nananana
function interviewQuestion(job) {
  if (job === 'designer') {
    var q = ' can you explain what UX design is?';
    return function(name) {
      console.log(name + q);
    } 
  } else if (job === 'teacher') {
    var q2 = 'What subject do you teach, ';
    return function (name) {
      console.log(q2 + name + '?');
    }
  } else {
    return function (name) {
      console.log('What do you do, '+ name + '?');
    }
  }
}

 var janeinterview = interviewQuestion('designer');
 janeinterview('Jane');

 var markinterview = interviewQuestion('teacher');
 markinterview('Mark');
 var johninterview = interviewQuestion('singer');
 johninterview('John');
*/
 // teacher solution - cleaner and more efficiant  -_-

 function interviewQuestion(job) {
   return function(name) {
     if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
     } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
     }  else {
      console.log('Hellow '+ name + ', what do you do?');
     }
   }
 }

 interviewQuestion('teacher')('John');