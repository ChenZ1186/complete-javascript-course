/*                                             The Budget App Project                                                   */

////////////// Implementing the Module Pattern

/*
  in this lecture, you're going to learn what the module pattern is in JavaScript and how to implement it and you will learn more about private and public data, exposing methods, encapsulation, and separation of concerns, and how all data is related to the module pattern. So this is going to be a really important lecture.


  we create modules because we want to keep pieces of code that are related to one another together inside of separate, independent, and organized units. And in each of these modules, we'll have variables and functions that are private, which means that they are only accessible inside of the module. We want it so that no other code can override our data. So our data or code is going to be safe and this is really important. And beside private variables and methods, we're also gonna have public methods, which means that we expose them to the public so that other functions or modules can access and use them. And this is called data encapsulation.
 */

  //// starting with the module that handles our budget data: we call it budget controller.
  /*This variable is going to be an immediately-invoked function expression that will return an object. IIFE
    immediately-invoked function expression, or IIFE, is simply an anonymous function wrapped in parenthesis.
  */

  var budgetController = (function () {
    var x = 23; /* temporery variable */
    var add = function(a) {/* we want our function to add 2 numbers  */
      return x + a 
    } /*So this is just a variable and a function to show you how the module pattern works. */
    return { // empty object
      publicTest: function (b) { // add a method
        console.log(add(b)) // And it will simply be a function that uses our other function add so that we can use it in 
                            // the outside scope.
      }
    }
  })()/*< invoke */;   // testing the code on consol budgetController.publicTest(5) = 28 

  /*we already know that an IIFE allows us to have data privacy because it creates a new scope that is not visible from the outside scope. So our variable and our function, they are safe in here. They cannot be accessed from the outside. Now, the secret of the module pattern is that it returns an object containing all of the functions that we want to be public. So the functions that we want to give the outside scope access to.
  */
  var budgetController = (function () { /* <when the JavaScript run time hits this line here it gets executed and this anonymous function is declared and immediately called or invoked because of this "()" operarot*/
  var x = 23;                     // these variables here and functions are declared
  var add = function(a) { 
    return x + a 
  } 
  return { 
    publicTest: function (b) {  // and we return an object right here.
      return(add(b)); /*this object is what gets assigned to the budget variable after this function returns. */
    }
  }
})();  

  // recup
  /*So the IIFE, the immediately-invoked function expression, returns immediately and so it's effectively gone. But the publicTest function that we return here will always have access to the x variable and the add function because a closure was created here. That's why we say that the publicTest method is public because it was returned and now we can use it. But the x and add variables are private because they are in the closure and therefore only the publicTest method can access them. So again, all of this works because of closures to these functions and this x variable are in the closure. Even after this IIFE here has returned. */

  /* create another module with just the one that's gonna take care of our user interface. And let's call that one the UIcontroller. */

  var UIController = (function() {
    // some code
  })();

  /*
Now the two modules that we created and by now are completely independent modules. So there will not be any interaction between these two ever. Because I want them to be as stand alone, as independent as possible. So for example imagine that if you ever wanted to create a more complex budget app but a completely different User Interface, you can take the budget controller module and then expand it and not think about the User Interface at all. Because the User Interface is separated from the data, they don't communicate at all. And that is called separation of concerns. And separation of concerns basically means that each part of the application should only be interested in doing one thing independently.

Now we need some way to have these two connected, right? For example, we need a way to read data from the User Interface and then add that data as a new expanse in the budgetController. And that's why we create a third module which is the app controller

*/

var controller = (function (budgetCtrl, UICtrl) { 
  // modules can also receive arguments because, remember, they are just function expressions.
  /* so we can pass arguments into them. And that's what we're gonna do with this module. We'll pass the other two modules as arguments to the controller so that this controller knows about the other two and can connect them. */
  /* could of course simply have used the original controllers name inside of the add controller. Or I could have even not passed anything into the module and simply have used the other controls in here in our function because of course we have access to them because they are in the outer scope. */

  budgetController.publicTest(); /* THIS IS A BAD PRACTICE
  // passing the 2 modules as arguments
  that is not a good practice because this would make the controller a little bit less independent. Because imagine that we would change the name of the module then we would have to do this all over our code. We would have to change the name everywhere in here */

  var z = budgetCtrl.publicTest(5); // we dont have access from the outside so we simply print the var to the consol
                                    // this way we dont need to change modules' names (using the 3rd moudoles arg' first)
  return {
    anotherPublic: function() {
      console.log(z); // no access to the outside. printing the var to the consol (object without arguments)
                      // this is the only way that from the outside we can have access to z.
       // this is just to show us how it works
    }
  }
  /*So we need to return an object once again and I'm going to create another public method. So I'm just going to call it anotherPublic. So these names don't really matter because all of this is just to show you how these modules work, and how they interact with one another. So this is not gonna receive any argument */
})(budgetController, UIController); // budgetController will be asigned to the budgetCtrl same for UIController with UICtrl

// print in consol : controller.anotherPublic() output > 28 , undifined


////////////  SETTING UP THE FIRST EVENT LISTENERS

/*
  in this lecture, we're gonna set up our first event listener to handle our input button. So, the new things that you're gonna learn in this lecture is how to set up event listeners specifically for keypress events, and you will also learn what the event object is and how to use it.
*/


  //// module 1: handles our budget data: we call it budget controller.
  // BUDGET CONTROLLER
  var budgetController = (function () {

  })(); 
  
  //// module 2: take care of our user interface: we call it UIController.
  // UI CONTROLLER
  var UIController = (function() {
    // some code
  })();
  
  //// module 3: concting between the two other modules casue they're not conunicate to each other.
  // GLOBAL APP CONTROLLER
  var controller = (function (budgetCtrl, UICtrl) {
  /*
    gonna set up the event listener for the input button right here in our controller, because this is the central place where I want to decide, so where I want to control what happens upon each event, and then delegate these tasks to the other controllers.
    So, we first select an element, and then attach it the event listener.
  */

 document.querySelector('.add__btn').addEventListener('click',function () {
  // console.log('button was clicked'); // testing
 /*
  // 1. get the filed input data
  // 2. add the item to the budget controller
  // 3. add a new item to the UI (UI - user interface)
  // 4. Calculate the budget
  // 5. Display the budget

   ** we want all those senarious to happend when hits the button, when someone hits the return key,and the enter key. We also want to get the input data, we want to add the item to the user interface, and to the controller, and all of that. So it should be the exact same thing. So, not only the click event, but also a keypress event.

  //// keypress event 
  We're not going to select anything. We will just add this event listener to the global document. document, and then, addEventListener. And that's because this keypress event doesn't happen on any specific element, but it happens on the global web page,
  
  there are actually more than one type of event that handles when someone presses a key. So let's look at the event reference https://developer.mozilla.org/en-US/docs/Web/Events
  */
 });

 document.addEventListener('keypress', function (event) {
    // the function is what will decide what key will be the keypress event. this function now will have an argument inside the prentethyess (event)
    /*after saving the file we will go to the browser and press any key and we will get in the consol an object of that particular key, inside the object there is an element called "KeyCode" and for each key in the keyboard there is a different "KeyCode" and that is how we can defind wich key on the keyboard will apply somthing on the UI.
    
    we can find a any keycode on "Keycodes - javascript Kyboard"*/
});
  })(budgetController, UIController); // print in consol : controller.anotherPublic() output > 28 , undifined



  document.querySelector('.add__btn').addEventListener('click',function () {
    // console.log('button was clicked'); // testing
   
   // this section has been remove since we want a clean code with less code so we create a function ctrlAddItem instead of repeating our seleves over and over again 
   
   
   });

   document.querySelector('.add__btn').addEventListener('click',ctrlAddItem); // ctrlAddItem() dont need "()" 
   /*we're not going to call it here, so we don't need this call operator "()" , because this is a callback, and so, the addEventListener method will call it for us */

   ///////////  Reading Input Data 

   /*
   we are going to read the income or expense data out of the user interface or input fields so that we can use it in our app later. So it only makes sense that in this lecture you're going to learn how to read data from different HTML input types.
   */
   //// starting position : 

   var controller = (function (budgetCtrl, UICtrl) {
  
    // dont repeat urself principle
    var ctrlAddItem = function () {
    // 1. get the filed input data
    // 2. add the item to the budget controller
    // 3. add a new item to the UI (UI - user interface)
    // 4. Calculate the budget
    // 5. Display the budget
     console.log('works') //testing that the function worlks
    }
    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
  
     document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) { // which is for old browser that dont have keyCode
       // console.log('Enter was pressed.'); // test
       ctrlAddItem(); // if press "enter" it will call the "ctrlAddItem" function above
      }
     });
   
  
  })(budgetController, UIController); // print in consol : controller.anotherPublic() output > 28 , undifined
   /*
    so here we are in the app controller and the logic in this project will always be that in the controller is the place where we tell the other modules what to do. So we write methods in the UI controller and in the budget controller to get some data for us or to calculate something and then in here in the controller we call these methods. So in this particular case that I want to get the input from the user interface I'm going to write the method in the user interface controller and then call it here in the controller so that I can get this data and then use it further.
    */

   var UIController = (function() {
    /*
    So here in the UI controller we're going to write a method or a function. Now, this is a function that we want to use in the other controller, right? So it cannot be a private function, right? So instead it's going to be a public function or a public method. So it will have to be in the object that this function here, this IIFE will return.
    */

    /*
     this code here will execute immediately and then the object that we return will be assigned to this UI controller here and all the variables and the functions that we define in the function will stay in the closure even after this function returns. The object that's going to be returned from this will have access to these private methods or functions and variables.
     */
  })();

  // UI CONTROLLER
var UIController = (function() {
  
  return {
    getinput: function() {
      // we select somethind and then doing something
      var type = document.querySelector('.add__type').value; // will be either income or expensses simbol
      var description = document.querySelector('.add__description').value;
      var value = document.querySelector('.add__value').value;

      // how do we return three values at the same time?
      /*The best solution for this is to simply return an object containing these three as properties. So instead of having three separate variables we should simply return an object with three properties */
    }
  } 
})();


//// module 2: take care of our user interface: we call it UIController.
// UI CONTROLLER
var UIController = (function() {
  /// private variable to store all the string from index file (.add__type / .add__value / etc..) in case we will change them
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value'
  };

  return {
     getinput: function() {
       return {
         // we select somethind and then doing something
          type: document.querySelector(DOMstrings.inputType).value, // will be either income or expensses simbol
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
      };
     },
     getDOMstrings: function() {
      return DOMstrings;
    }
      /*
      Now the DOMstrings object is in a different controller, right? So we don't really have access to it from here. So is the solution just to copy this object here into our controller? No, of course not, and you already know that by now, right? So the best solution is of course to pass this object from one controller from one module to the other. So what I'm going to do is something similar to the get input method here and this one will simply be called get the DOMstrings. And all we need in this function in this method here is to return or private DOMstrings into the public. So basically we are now exposing the DOMstrings object into the public.
      */
   } ;
})();

//// module 3: concting between the two other modules casue they're not conunicate to each other.
// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();
  /*So now inside of this DOM variable we also have the DOMstrings that we have up here in this controller because once again we exposed them to the public by using this method here. 
  
  so now we can add the other strings to that DOMstrings object*/ 
  // dont repeat urself principle
  var ctrlAddItem = function () {
  // 1. get the filed input data - to return all the 3 elements type, description , value
  var input = UICtrl.getinput();
  console.log(input);
  // 2. add the item to the budget controller
  
  // 3. add a new item to the UI (UI - user interface)
  
  // 4. Calculate the budget
  
  // 5. Display the budget
  // console.log('works') //testing that the function worlks
  }
  document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

   document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) { // which is for old browser that dont have keyCode
     // console.log('Enter was pressed.'); // test
     ctrlAddItem(); // if press "enter" it will call the "ctrlAddItem" function above
    }
   });
   

})(budgetController, UIController); // print in consol : controller.anotherPublic() output > 28 , undifined

////// Creating an Initialization Function (lecture 80)
/*
let's now create an init function such as we did with our pig game project before. So in this lecture you're gonna learn how and why we should create an initialization function in our current architecture.
 
so this is our controller and it little bit massy and we want to clean it and orgenize it better. 
in order to do that we need functions, and here is were initialize function come in handy.
*/

var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMstrings();
  /*So now inside of this DOM variable we also have the DOMstrings that we have up here in this controller because once again we exposed them to the public by using this method here. 
  
  so now we can add the other strings to that DOMstrings object*/ 
  // dont repeat urself principle
  var ctrlAddItem = function () {
  // 1. get the filed input data - to return all the 3 elements type, description , value
  var input = UICtrl.getinput();
  console.log(input);
  // 2. add the item to the budget controller
  
  // 3. add a new item to the UI (UI - user interface)
  
  // 4. Calculate the budget
  
  // 5. Display the budget
  // console.log('works') //testing that the function worlks
  }
  document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

   document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) { // which is for old browser that dont have keyCode
     // console.log('Enter was pressed.'); // test
     ctrlAddItem(); // if press "enter" it will call the "ctrlAddItem" function above
    }
   });


   // SO THIS IS THE NEW SETUP :  

   // GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  // event listener function : (lecture 80)

  /*
  so now we have a function that sets up all our event listeners and we have a function that gets called when we want to add a new item. And these are both private functions, right? they're not exposed to the public. Now, if we want these event listeners here to be added or to be setup then these lines of code here, of course, need to run, right? Which means that this function, the setup event listener function has to be called somehow. And up until this point this wasn't the problem because all of this was here in this IIFE, so in this Immediately-Invoked Function Expression meaning that we didn't have to think about if this code is executed or not because it's automatically executed, right? But now we need to call this function and the best and most common way to do this is to create a public initialization function, which we're going to call init.
  */
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function (event) {
     if (event.keyCode === 13 || event.which === 13) { 
 
      ctrlAddItem(); 
     }
    });
  } 
  var ctrlAddItem = function () {

  var input = UICtrl.getinput();
  console.log(input);

  }

})(budgetController, UIController); 

////////////  Creating Income and Expense Function Constructors (lecture 81)

/*
in this lecture you'll learn how to choose fine tune constructors that meet our application needs and how to setup appropriate data structure for our budget controller.
*/

//// starting point

  // BUDGET CONTROLLER
  var budgetController = (function () {
      /*for a function constructor we usually use the capital letter here in the beginning so we can distinguish them from the other functions. */
   // FUNCTION CONSTRUCTOR - EXPENSSES
   var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  /* we choose to create objects here through the expense function constructor because there will be lots of expenses and therefore this is the best way to do this. */
  })(); 

  // taking the function constructor outside for testing 
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  /* TYPE IN THE CONSOL > "var exp = new Expense(1, 'testing' , 100)"   : 
  
  new keyword creates a new empty object and then calls the expense function and points to this keyword of that function to the new object that was created. So when we're done set properties on the disk keyword we automatically set them on the new object
  */

 //// DATA STRUCTURE
/* 
 data structure of this budget controller itself and remember the budget controller keeps track of all the incomes and expenses and also of the budget itself and later also the percentages. imagine that the user would input 10 incomes so we would create 10 income objects right? So where would you store all of these 10 incomes I think that the best solution is to store these into an array,
 */

 //////// Adding a New Item to Our Budget Controller (lecture 82) :

 /*
 in this lecture we will learn how to use the user input data to create a new item in our budget controller data structure. And by doing that, we will learn how to avoid conflicts in our data structure, and also how and why to pass data from one module to another.
 */

 // starting point : 

   // BUDGET CONTROLLER
var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // DATA STRUCTURE : (lecture 81)
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    total: {
      exp: 0,
      inc: 0
    }
  };

  // PUBLIC METHOD : (lecture 82) 
  return {
    addItem: function(type, des, val) {
      /*if someone calls this method, what do they have to tell us in order that we can create a new item? First, we would have to know the type, so if it's an income or an expense. So, type, and we also need the description, right? And, of course, the value of the income or of the expense. And, I'm using different names here so that we have less confusion. So, in this method, they have their own names.
       */
      var newItem;
      // ADDING NEW EXPENSE
      newItem = new Expense(ID, des, val);
      /*what exactly are we going to receive here in this type argument? For that, let's take a look at the controller again, okay. So the input that we're going to receive is this input variable "var input = UICtrl.getinput();" , which will come from the UI controller, */
    }
  }
})(); 


  // BUDGET CONTROLLER
  var budgetController = (function () {
    /*for a function constructor we usually use the capital letter here in the beginning so we can distinguish them from the other functions. */
    // FUNCTION CONSTRUCTOR - EXPENSSES (lecture 81)
    var Expense = function (id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
  
    var Income = function (id, description, value) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
  
    // DATA STRUCTURE : (lecture 81)
    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      total: {
        exp: 0,
        inc: 0
      }
    };
  
    // PUBLIC METHOD : (lecture 82) 
    return {
      addItem: function(type, des, val) {
        var newItem, ID;
  
        ID = 0;
        /*
        ID is a unique number that we want to assign to each new item that we put either in the expense or in the income arrays for the allItems, right? So, how can we determine, how can we specify this ID for each new item? The first thing that comes in mind would be to simply use the length of the already-existing array, and then add one, right? So imagine that we had an array with five elements. So let's say, one, two, three, four, five. Then it would sound logical to say, okay, the next one should have an ID of six, right? So the next ID equals six. So this is just a comment, just to show it to you. So this would be the simple solution. Now, there is a big problem with this, and that's because, later on, we're going to delete items from this. And so, imagine that instead of this nicely sorted array here, we would have IDs like this. So, for example, one, two, four, six, and eight, something like this. If we would now go ahead and say that the next ID should be six, then the problem would be that we would have two elements with ID of six. So this is not ideal at all, right? Because each ID should only exist once. So, in this case, what should the next ID be? It should be nine, right? So next ID should be nine, because that's the number that comes after the last one.
        */

       ID = data.allItems[type][data.allItems[type].length - 1]
       /*
       So imagine that the type would inc. So, in this case, this would be data.allItems[inc]. So, this one here. So you want to now select the last item. So we need this here, the brackets with the number in it so that we can select the last element. And the number is, as I explained before, the length of the array minus one. And so, we need to type all of this again, and then retrieve the length, and then, minus one. Okay, so now we have the very last item, but we only want the ID, right? So, retrieve the ID like this, okay. So this is basically the last ID. So, if the arr array would be this one, then our last ID would now be eight. And, remember, the ID that we want is nine, so, last ID plus one. So this is the last ID plus one. And here we have the ID for a new item.
       */
        // ADDING NEW EXPENSE AND NEW INCOME
        if (type === 'exp' ) {
          newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
          newItem = new Income(ID, des, val);
        } 
        // NEW ITEM > ADD IT TO DATA STRUCTOR
        data.allItems[type].push(newItem); // push adding new element at the end of the array
        return newItem;
        /*
        And now, all we need to do is to return that newItem as well. Because, then, the other module, or the other function, that's going to call this one, can have direct access to the item that we just create
        */
      }
    }
  })(); 

  // GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  // event listener function : (lecture 80)
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function (event) {
     if (event.keyCode === 13 || event.which === 13) { // which is for old browser that dont have keyCode
      // console.log('Enter was pressed.'); // test
      ctrlAddItem(); // if press "enter" it will call the "ctrlAddItem" function above
     }
    });
  };

 
  // dont repeat urself principle
  var ctrlAddItem = function () {
    var input, newItem;
  // 1. get the filed input data - to return all the 3 elements type, description , value
  input = UICtrl.getinput();
  // console.log(input); this only print the object on the consol so we call see that stuff is working correctly
  // 2. add the item to the budget controller
  // this addItem method returns an object, so we have to save it
  newItem = budgetCtrl.addItem(input.type, input.description, input.value); // lecture 82 
    
  // 3. add a new item to the UI (UI - user interface)
  // 4. Calculate the budget
  
  // 5. Display the budget
  // console.log('works') //testing that the function worlks
  }

  return {
    init: function() {
      console.log('Application has started.') // testing
      //call our setup event listeners function
      setupEventListeners();
    }
  }

})(budgetController, UIController);


/////////////  Adding a New Item to the UI (lecture 83)

  // SUBJECTS:

/*  
  * A technique for adding big chunks of HTML into the DOM
  * How to replace parts of strings
  * How to do DOM manipulation using the insertAdjacentHTML method
*/

// starting position : 

  // UI CONTROLLER
var UIController = (function() {
  /// private variable to store all the string from index file (.add__type / .add__value / etc..) in case we will change them
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
     getinput: function() {
       return {
         
  
          type: document.querySelector(DOMstrings.inputType).value, 
          description: document.querySelector(DOMstrings.inputDescription).value,
          value: document.querySelector(DOMstrings.inputValue).value
      };
     },

      // ADD A NEW PUBLIC METHOD : 
      addListItem: function (obj, type) { // type = exp or inc
        /*this object (obj) is the exact same object that we created using a function constructor and then passed to our app controller in the last lecture. */
      },

      // ADD A NEW PUBLIC METHOD : 
      addListItem: function (obj, type) {
        var html, newHtml;
        // Create HTML string with place holder text

        // when finishing with the html and if else statment we need to is to replace the actual data that is in here with some placeholder and that's because what we then receive our object here
        if (type === 'inc') {
        html = '<div class="item clearfix" id="income-0"> <div class="item__description">Salary</div> <div class="right clearfix"> <div class="item__value">+ 2,100.00</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
        } else if (type === 'exp') {
        html = '<div class="item clearfix" id="expense-0"> <div class="item__description">Apartment rent</div> <div class="right clearfix"> <div class="item__value">- 900.00</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
        }

        // VALUES THAT NEEDED TO BE REPLACES : id > %id% , salary > %description% , +2,100.00 > %value%
        if (type === 'inc') {
          html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
          } else if (type === 'exp') {
          html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
          }
          // after changing the vlaues in the HTML we gonna use the replace method 
        // Replace the placeholder text with some actual data
                  // since the html is a string we can actualy active all the srtring methods on it
        newHtml = html.replace('%id%', obj.id); // WHY obj.id because :
        /* 
         the ID property is the one that holds of course the ID and we can see that here :
       "var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        };"
        So these are our function constructors and they are called ID, description and value. So these are the three that we will have here in our add list method and that we can use to replace our placeholder strings.
        */
        // Insert the HTML into the DOM
        /*
        and now we will not replace the placeholder in HTML again because it's the new HTML variable now where we have made this replacement here. So if we would now do HTML replace again, then this ID placeholder here would still be there. Okay so we actually need to do it
        */


      },
      getDOMstrings: function() {
        return DOMstrings;
      }
   } ;
})();


// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function (event) {
     if (event.keyCode === 13 || event.which === 13) { 

      ctrlAddItem(); 
     }
    });
  };

  var ctrlAddItem = function () {
    var input, newItem;
  // 1. get the filed input data - to return all the 3 elements type, description , value
  input = UICtrl.getinput();

  // 2. add the item to the budget controller

  newItem = budgetCtrl.addItem(input.type, input.description, input.value); 
    // (lecture 83)
    /*is the function that is called when someone hits the input button or hits the enter key. Then we first read the input out of the fields (" input = UICtrl.getinput();") , store it into the input variable, then using this input variable, and then item method we create a new item ("newItem = budgetCtrl.addItem(input.type, input.description, input.value); ") and we return it and store it in this variable ("newItem = budgetCtrl.addItem(input.type, . . ."). So in here in the new item variable we now have the new object and that's the object that we're going to pass to or add list item method. */
    
  // 3. add a new item to the UI (UI - user interface) -- after insert adjacent method we can upload it to the interface
      UICtrl.addListItem(newItem, input.type);
    /*So the object created through one of our function constructors. So the new item and then the type. So we're going to use input not type right because that's where our type is stored. So whether it's an income or an expense */

  // 4. Calculate the budget
  
  // 5. Display the budget
  // console.log('works') //testing that the function worlks
  }

  return {
    init: function() {
      console.log('Application has started.') 

      setupEventListeners();
    }
  }

})(budgetController, UIController); 


////////// Clearing Our Input Fields (lecture 84) : 

/*
  Subjects : 
  * How to clear HTML fields
  * How to use querySelectorAll
  * How to convert a list to an array
  * A better way to loop over an array then for loops: foreach
*/


///// cleaning the inputs from the input boxs : 
/*
the problem is that the querySelectorAll method does return something strange. It doesn't return a nice array which we can then use and loop over, but instead it returns something similar, but still different, and that's a list. So, again, a list is a bit similar to an array, but it doesn't have all of these nice methods that we have for arrays. So the solution to that is to convert the list to an array. And there's actually a nice little trick that we can use for that. And the trick is to use the array method called "slice". And what slice does is to return a copy of the array that it's called on. So usually we call this method on an array and it then returns another array. But we can kind of trick this method and pass a list into it, and then it will still return an array.

but there's only one small problem with that, because we cannot do it like this.

  fiwlds.slice() - will not work 
because again, it's not an array, and so we cannot call array methods here on the list. Instead, what we have to do is to call the slice methods using the call method, and then passing the fields variable into it so that it becomes the "this" variable, and then it's gonna work just fine. So where do you think it is stored? And the solution is, that it's in the array prototype. So we can write something like this. This array is the function constructor for all arrays, right? And we know that all the methods that the arrays inherit from the array function constructors are in the array's prototype property, right? And therefore, we know the slice method must also be there.
*/

clearFields: function () {
  var field;
  // QUERYSELECTORALL : 
fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

fieldsArr = Array.prototype.slice.call(fields);
/*This means that we can now loop over this array and clear all the fields that were selected, which were only two in this case, but if it would be more, then all of the fields could be cleared at once. Now we could do it the old-school four loop that we have been doing all the time up until this point, right? But let's make it more exciting. And so I will show you a new method that we can use on arrays which is the forEach method. */

fieldsArr.forEach(function() {

});

/*All we have to do is to pass a callback function into this method, and then this callback function is applied to each of the elements in the array. So let's put an anonymous function in here. Okay. Just like this. Now, this callback function here, this anonymous function, this case here, can receive up to three arguments. And this is really like the callback function that we saw before on the event listener. Remember that? In that case, we did automatically have access to the event object, and we could name that object as we wanted, right? So here, it's actually pretty similar. Here, we have access to three things. We have access to the current value, this means the value of the array that is currently being processed, let's say, then we also have the index number, so the number going from zero to the length of the array minus one, and then also, the entire array. So we have access to the entire array here, as well. And again, we can name this as we want. */
},

/////////// Updating the Budget: Controller (lecture 85 + 86) :

/*
  Subjects : 
  * How to convert fields to numbers
  * How to prevent false inputs.
  * How and why to create simple, reusable functions with only one purpose
  * How to sum all elements of an array using the forEach method
*/


var calculateTotal = function (type) {
  /*create a sum variable which will store the sum, And set it to zero, because that's the initial value. */
  var sum = 0;
  data.allItems[type].forEach(function(cur) {
    /*
    * data = where all our data is stored
    * allItem = for conecting to the type 
    * type = exp or inc
     
    forEach = this accepts a callback function. So function. And then this function here has access to a couple of parameters. So we can access the current value, the current index and also the complete array. In this case, we only need the current element,
    */
    sum = sum + cur.value;
  })
  // implimenting the result of the forEach loop in the totals element 
  data.totals[type] = sum;


  /////// Updating the Budget: UI Controller lecture 87 : 

  /* subjects: 
    * Practice DOM manipulation by updating the budget and total values 
  */


  /////// Setting up the Delete Event Listener Using Event Delegation (lecture 90)

  /*
    * How to use event delegation in practice
    * How to use IDs in HTML to connect the UI with the data model
    * How to use the parentNode property for DOM traversing
  */

 document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

 var ctrlDeleteItem = function(event) {
    /*
    we need to pass something into this function, which is the event, and I'm sure that you remember what the event object is, so let's check out the other event handler. So in this event handler here, we also used the event object, so remember that the callback function of the addEventListener method has always accessto this event object, and we can call it whatever we want. We just call it event so that we always know what it is. And so it works, see in this anonymous function that we wrote here in this case, but it also works if we pass another function in it, so in this case ctrlDeleteItem, and then we can also say that we want access to the event object simply by putting this parameter in here. And the reason why we need this event here is because we wanna know what the target element is, so remember, that's what we talked about before. So in event delegation, an event bubbles up, and then we can know where it came from, so where it was first fired, by looking at the target property of the event.
    */
};

document.addEventListener('keypress', function (event) {
  if (event.keyCode === 13 || event.which === 13) { 
   ctrlAddItem(); 
  }
 });

/*

 we are not interested just in this element here:
 <i class="ion-ios-close-outline"></i>
 which is the target one, but we're actually interested in this element here, so in this parent element. :
 <div class="item clearfix" id="income-0"></div>


 So we need to move up in the DOM from here:
  <i class="ion-ios-close-outline"></i>
 and that is something called DOM traversing. So we're gonna traverse the DOM.

   var ctrlDeleteItem = function(event) {
    console.log(event.target.parentNode); 
  };

                          <div class="item clearfix" id="income-0">
                            <div class="item__description">Salary</div>
                            <div class="right clearfix">
                                <div class="item__value">+ 2,100.00</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn">
                                        <i class="ion-ios-close-outline"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
  when using the parentNode we're not getting the  <i class="ion-ios-close-outline">
  we actually getting the :  <button class="item__delete--btn">
  Now we don't wanna just move up to the button, but in fact we wanna move up all the way to the income, so we don't need one parent node ("<button class="item__delete--btn">") , but we need two ("<div class="item__delete">") , three ("<div class="item__description">Salary</div>") and four ("<div class="item clearfix" id="income-0">") . So if you wanna move all the way up here, we need to use the parent node property 4 times.
 */

var ctrlDeleteItem = function(event) {
  console.log(event.target.parentNode.parentNode.parentNode.parentNode);
};

/*now we are at the top div element <div id="income-0" class="item clearfix">  we're actually
interested in, and in fact, what we're interested in is the >> id << here, because again, this is the unique identifier let's say, of this item. So we can simply use the id property here
*/

var ctrlDeleteItem = function(event) {
  console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
};
// it becames this : 
var ctrlDeleteItem = function(event) {
  itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
};

// part of the html in the clean code file
id="inc-%id%"
/*So right now this ID here encodes both the item type and the item ID, right? So this will be extremely useful because later we can then use this data to tell the budget controller which item it should delete when we hit the button, and also which item should be deleted from the user interface. 

Now the format of the ID, as we saw in the consol, is something like inc-1.
so we now need a way to split this up, and thankfully there is a very handy method in JavaScript that all strings have access to, and that's called "split."Now you may be wondering why I said that all the strings have access to this method, because we always said that a string is a primitive, and not an object, right? Now the thing is that as soon as we call one of these methods on a string, then JavaScript automatically puts a wrapper around the string and converts it from a primitive to an object, and then this object has access to a lot of string methods, and the same thing actually happens to numbers. So numbers also have methods because JavaScript simply transforms them from a primitive to an object, so that we can use methods on them. So we will now use the "split" method.*/

var ctrlDeleteItem = function(event) {
  var itemID, splitID, type, ID;
  itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

  if (itemID) { // (itemID) without any operator like !== or === this will work basically because this isn't going to be coerced or converted to true if this exists, and if it doesn't, then it will be coerced to false.
    
    // split inc-1
    splitID = itemID.split('-'); // split create an array of the 2 parts or more deppends how many dashes ("-") we have 
    type = splitID[0]; // 0 cause we want the 1st item in the id
    ID = splitID[1];
    // 1. delete the item from the data stracture
    // 2. Delete the item from the UI
    // 3. Update and show the new budget
  }
};

///////// Deleting an Item from Our Budget Controller (lecture 91)

  /*
  Subjects: 
  * Yet another method to loop over an array: map
  * How to remove elements from an array using the splice method
  */

 deleteItem: function() { // this function going to be called by the budgetController method
      
 },

 /*
 what kind of information do we need to have in order to be able to delete an item from the data structure? So what parameters, what arguments, does the app controller have to pass into this method? So let's look at our data structure.
 */
/*
what kind of information do we need to have in order to be able to delete an item from the data structure? So what parameters, what arguments, does the app controller have to pass into this method? So let's look at our data structure.

  // DATA STRUCTURE : (lecture 81)
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1 // -1 means does not exist when there is no incomes or expenses
  };

  So here it is, and we know that in these arrays we will have all of our expense objects and all of our income objects, okay? And both expense and income objects, they are both identified by their unique ID, right? So, what we need in order to delete one of the items from these arrays is we first need to know if we're talkin' about an expense or an income, and then we also need the unique ID. So this is what the controller will have to pass into this function.
*/

deleteItem: function(type, id) { // this function going to be called by the budgetController method
  // id = 6
  // data.allItems[type][id] - not gonna work
  // ids = [1 2 4 6 8] - all the other ids have been deleted
  // index = 3 for id = 6
  // loop over all of the elements in an incomes or an expenses array
 var ids =  data.allItems[typa].map(function (current) {
    return current.id;
  }) // map have a function that also have the 3 arguments current element, current index and entire array, but the difference between forEach and map is that map actually returns a brand new array! 
  
},

index = ids.indexOf(id);
 // And now, all we need to do is to find that index.

/*
 And now, all we need to do is to actually delete this item from the array. And remember that this index here (" index = ids.indexOf(id);") can be -1 in case that this item here is not found in the array in which we're searching. So we only want to remove something if the index actually exists, right?

*/

// DELETE ITEM
if (index !== -1) {
  // USE SPLICE TO REMOVE ELEMENTS
  /*the first argument is to position number at which we want to start deleting. And this is of course the index. And then the second argument is the number of elements that we want to delete. */
  data.allItems.splice(index, 1);

  // And now is the time where we can finally use this type and this ID that we created in the last lecture.

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) { // (itemID) without any operator like !== or === this will work basically because this isn't going to be coerced or converted to true if this exists, and if it doesn't, then it will be coerced to false.
      
      // split inc-1
      splitID = itemID.split('-'); // split create an array of the 2 parts or more deppends how many dashes ("-") we have 
      type = splitID[0]; // 0 cause we want the 1st item in the id
      ID = splitID[1];
      // 1. delete the item from the data stracture
      budgetCtrl.deleteItem(type, id);
      // 2. Delete the item from the UI
      // 3. Update and show the new budget
    }
  };

  // at this point we had a bug and the reason for that is because we ask the index to seak in the ID for a number but actually the ID var that we are using have been manipulated before that with a string method the SPLIT method and since we use it our ID  is a string and not a number so we need to convert it to numbers and we will do it like this : 

  ID = parseInt( splitID[1]);


  ///////// Deleting an Item from the UI (lecture 91) : 

  /*
      Subjects:
      * More DOM manipulations: 
        * How to remove an element from the DOM
  */

  /*
  what do we need to know in order to be able to remove an element from the DOM? That's right, we need a class name or an ID name so that we can first select it and then remove it. And in this case, of course we're going to use an ID, 
  */
 deleteListItem: function (selectorID, ) {
        
},

/*


  the second argument that we want is the entire ID here ("itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;") . 

So the one that we write from the DOM in the first place:  
  var ctrlDeleteItem = function(event) {
    ...
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    ... 

 /////   So we don't want just the type or that ID,
      type = splitID[0]; 
      ID = parseInt(splitID[1]);

    }
but we want the entire ID that we write which is this : 
("itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;")
*/

/*
removing something from the DOM is actually pretty simple, because for that, we have to remove child method. Okay, and since it's the remove child method, we first need to know the parent, right? So basically we have to move up in the DOM so that we can then remove the child. So this is a bit strange, but in JavaScript we cannot simply delete an element, we can only delete a child. So remove a child.
*/
deleteListItem: function (selectorID) {
  var el = document.getElementById(selectorID);
  el.parentNode.removeChild(el);
},

var ctrlDeleteItem = function(event) {
 // ... 
    // 2. Delete the item from the UI
    UICtrl.deleteListItem(itemID);
    // 3. Update and show the new budget
  }
};


/////////   Updating the Percentages: Controller (lecture 94) : 

/*
  * Reinforcing the concepts and techniques we have learnd so far
*/

/*
   the question that we should ask is when will these income percentages actually be updated, and the answer is that these percentages are calculated and updated each time that we add or delete an item, because remember these percentages are the percentage of the income that each expense represents.So when we add a new income or when we delete an income from the list then all of these expense percentages will be updated, they will all change, and also when we add a new expense the percentage must be calculated and of course updated and displayed. So again when we add and when we delete an item, and this means that we should probably create a new separate function for this so that we can then call that function here in our control at item function or control delete item function.
*/

//////// Updating the Percentages: Budget Controller (lecture 95)

/*
  Subjects: 
  * How to make our budget controller interact with the Expense prototype
*/

calculatePrecentages: function () {
  /* 
  a=20
  b=10
  c=40
  income = 100
  a = 20/100 = 20%
  b = 10/100 = 10%
  c = 40/100 = 40%

  So this is just so that we know how to calculate each of these percentages. So this means that we're always gonna need this total income here. Now, we said that we need to do this for each object individually, and so this sounds like there should be a method on each of these expense objects that calculates this percentage/
  */
      
},

/*we need to calculate the expense percentage for each of the expense objects that are stored in the expenses array. */

/*So let's go to our expense function constructor here. So in here, and we want to add a method. So how do we do that? And I'm absolutely sure that you remember this. So we're not just going to add the method right here into the function constructor, right? But instead, we're going to add it to its prototype because like this, all of the objects that are created through this expense prototype will then inherit this method, because of the prototype chain, right? Because it's in their prototype, so the prototype property of expense. */
  // BUDGET CONTROLLER
  var budgetController = (function () {
    /*for a function constructor we usually use the capital letter here in the beginning so we can distinguish them from the other functions. */
    // FUNCTION CONSTRUCTOR - EXPENSSES (lecture 81)
    var Expense = function (id, description, value, percentage) {
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
      //  in the beginning, before it's defined, I'm gonna set it to -1, So when something is not defined, we use -1.
    };
  
    Expense.prototype.calculatePrecentages = function(totalIncome) {
      /*So now we can calculate our actual percentage, but first, where are we gonna store this percentage? We should actually create a new property here in the expense object */
      if (totalIncome !== 0 ) {
        this.percentage = Math.round( (this.value / totalIncome) * 100);
        } else {
          this.percentage = -1;
        }
    };

    Expense.prototype.getPrecentage = function () {
      return this.percentage;
    } 

    var Income = function (id, description, value, ) {
      this.id = id;
      this.description = description;
      this.value = value;
    };
/*
    and now, we can call the method that we just wrote for each of the elements in the array in our data structure, right? So for all of the expense objects that are stored here in this data structure, okay? And do you remember the new method that we learned to loop over arrays? Yes, it was the forEach method. So we first need an array, so we're gonna retrieve it

from our data structure : 
  // DATA STRUCTURE : (lecture 81)
  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1 // -1 means does not exist when there is no incomes or expenses
  };
  So data.allItems, and in this case, we only want the expense array.
  we can call the forEach method because this is an array. And now, our callback function. So this specifies exactly what we want to happen for each of the elements. So we have access to the current variable here, right? I'm just gonna call it cur in this case. And what I want to happen to each of the elements is to simply call the calcPercentage method. So I write current and then calcPercentage, which is the method that we coded before. And that's it. So this is gonna calculate the percentage*/

calculatePrecentages: function () {
  data.allItems.exp.forEach(function(cur) {
    current.calcPrecentages(); // this will calculate the percentage for each and every expense that we have
  });


  getPrecentages: function() {
    
  },
  /*
   this one will actually be a bit similar because we once again need to loop over all of our expenses, and that's because we want to call the getPercentage method on each of our objects. The difference to the loop that we wrote here in our other method is that this time, we don't wanna just loop over the array and do something. No, we also want to return something. So we want to store it somewhere. And remember, that's what the map method is for. So instead of forEach, we're gonna use map.
  */

 getPrecentages: function() {
  var allPerc = data.allItems.exp.map(function (cur) {
    return cur.getPrecentage();
  });
  return allPerc; // which is, of course, an array with all of the percentages.


  ////////// Updating the Percentages: UI Controller (lecture 96) : 

  /*
      Subject: 
      * How to create our own forEach function but for nodeList instead of array
  */

 displayPercentages: function() {

},

/*
so these are the percentages that we will display, but where are we going to actually display them?So, let's take a look at the HTML,and they are, of course, not in the incomes,but in the expensesand this is called item__percentage, so we need to startby selecting all of the elementswhich have the item__percentage class.
*/

/*
    <div class="item clearfix" id="expense-0">
        <div class="item__description">Apartment rent</div>
        <div class="right clearfix">
            <div class="item__value">- 900.00</div>
            <div class="item__percentage">21%</div>     < "item__percentage"
            <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
        </div>
    </div>
*/

// UI CONTROLLER
var UIController = (function() {
  /// private variable to store all the string from index file (.add__type / .add__value / etc..) in case we will change them
  var DOMstrings = {
    ...
    container: '.container', 
    expensesPercLabel: '.item__percentage'
  };
  /*
and now this time we don't know how many expense item will be on the list, so we cannot use querySelector, because that only selects the first one, so we need to, again, use querySelectorAll.
*/

displayPercentages: function(percentages) {
  var fields;
  fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
},

/*
  and this, again, returns a list. And actually, it's called a node list. Not just list, but nodeList and that is because in a DOMtree, where all of the html elements of our page are stored, each element is called a node and that's also why the property that we used before for moving up in the DOM was called parentNode. So we need to now loop over all of these elements in our selection, so all of these nodes and then change the text content property for all of them, such as we did before. Now, we already know that the nodeList does not have the forEach method, right? So we could again use the hack that we used before. So, where we used the slice method of the array prototype to convert the node list into an array, but as I said that's more of a hack, so like a work around and we can actually do better. So instead, let's create our own forEach function, but for node lists, instead of arrays and with this, actually, we can use some of the knowledge that we gained before about callback functions and passing functions around like variables.
*/

displayPercentages: function(percentages) {
  var fields, nodeListForEach;
  fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

  nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  nodeListForEach(fields, function(current, index) {
    if (percentages[index] > 0) {
      current.textContent = percentages[index] + '%';
    } else {
      current.textContent = '';
    }
  });
},

var updatePercentage = function () {
  var percentages;
  // 1. Calculate the percenatage
  budgetCtrl.calculatePercentages();
  // 2. Read percenatage from the budget controller
  percentages = budgetCtrl.getPrecentages();
  // 3. Update the UI with the new percenatage -  console.log(percentages); // testing
  UICtrl.displayPercentages(percentages); < < < 
}


/////////  Formatting Our Budget Numbers: String Manipulation (lecture 97)

/*
  Subjects : 
  * How to use different String methods to manipulate strings
*/