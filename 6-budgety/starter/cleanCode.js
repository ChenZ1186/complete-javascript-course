
  //// module 1: handles our budget data: we call it budget controller.
  // BUDGET CONTROLLER
var budgetController = (function () {
  /*for a function constructor we usually use the capital letter here in the beginning so we can distinguish them from the other functions. */
  // FUNCTION CONSTRUCTOR - EXPENSSES (lecture 81)
  var Expense = function (id, description, value, percentage) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };


  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome !== 0 ) {
    this.percentage = Math.round( (this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;                           //sum = sum + cur.value;
    });
    // implimenting the result of the forEach loop in the totals element
    data.totals[type] = sum;
  };

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

  // PUBLIC METHOD : (lecture 82) 
  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      ID = 0;
      // ID = last ID + 1 > meaning that we defind the new ID by the lenght of the array (remember array's index start from zero)
      // selecting item in a specific array allItems[exp][3] element number 4 cause index start from zero
      // CREATE NEW ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      // CREATING NEW ITEM BASED ON 'INC' OR 'EXP' TYPE
      if (type === 'exp' ) {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      } 
      // NEW ITEM > ADD IT TO DATA STRUCTOR > push it into our data structure
      data.allItems[type].push(newItem); // push adding new element at the end of the array
      // Return new element 
      return newItem;
    },

    deleteItem: function(type, id) { // this function going to be called by the budgetController method
     var ids, index;
      // loop over all of the elements in an incomes or an expenses array
      ids =  data.allItems[type].map(function (current) {
        return current.id;
      }); // map have a function that also have the 3 arguments current element, current index and entire array, but the difference between forEach and map is that map actually returns a brand new array! 
      
      // FINED INDEX : 
      index = ids.indexOf(id);

      // DELETE ITEM
      if (index !== -1) {
        // USE SPLICE TO REMOVE ELEMENTS
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
      // calculate total incomes and expenses
      calculateTotal('exp');
      calculateTotal('inc');
      // calculate the budget: income - expenses 
      data.budget = data.totals.inc - data.totals.exp;
      // calculate the precentage of income that we spent
      if (data.totals.inc !== 0) {
      data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1; 
      }
    },

    calculatePercentages: function () {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc); // this will calculate the percentage for each and every expense that we have
      });

    },

    getPrecentages: function() {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      });
      return allPerc;
    },

    getBudget: function() { // creating a method only for returning something from our data structure or from our module so that you get used to this whole philosophy of having functions that only retrieve data, or functions that only set data.
      // budget returns not only to the budget itself but also to the total incomes and expenses and the percentage as well. So we wanna return these four values. And what's the best way to return four or even more values at the same time? Exactly. We're gonna use an object.
      return {
        budget: data.budget,
        totalInc: data.totals.inc, // this is stored also in the data structure in the totals,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },

    // we cannot get into the data stracture from the outside so we will create a test to the consol
    testing: function () {   // (lecture 82)
      console.log(data);
    }
  }
})(); 

//// MODULE 2: take care of our user interface: we call it UIController.
// UI CONTROLLER
var UIController = (function() {
  /// private variable to store all the string from index file (.add__type / .add__value / etc..) in case we will change them
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    // containers for the insert adjacent method, using 
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container', 
    expensesPercLabel: '.item__percentage'
  };

   var formatNumber = function(num, type) {
    var numSplit, int, dec, type
    num = Math.abs(num); // y doing this calculation here, I'm basically overriding the num argument.
    num = num.toFixed(2); // decimal 2 point after the dot
    // comma seperating the thouthands
    numSplit = num.split('.');
    int = numSplit[0]; 
    if (int.length > 3) {
      int.substring(0,int.length - 3) + ',' + int.substring(int.length - 3,int.length);
    }
    
    dec = numSplit[1];

    return (type === 'exp' ?  '-' :  '+') + ' ' + int +'.' + dec;
  };
  return {
     getinput: function() {
       return {
         
         // we select somethind and then doing something
          type: document.querySelector(DOMstrings.inputType).value, // will be either income or expensses simbol
          description: document.querySelector(DOMstrings.inputDescription).value,
          // value's outputs are strings and we need it as numbers so lets use the parseFloat()
          value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
     },

      // ADD A NEW PUBLIC METHOD : 
      addListItem: function (obj, type) {
        var html, newHtml, element;
        // Create HTML string with place holder text
        /* when finishing with the html and if else statment we need to is to replace the actual data that is in here with some PLACEHOLDERS and that's because what we then receive our object here. 
        precentage id precentage - this format the place holder method will find the values
        + 2,100.00 > %value%
        salary > %description%  */
        if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
        } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
        }
        // Replace the placeholder text with some actual data 
        // since the html is a string we can actualy active all the srtring methods on it
        newHtml = html.replace('%id%', obj.id);
        // the next replace will be on the newHtml otherwise the id will stay in the replace
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', formatNumber( obj.value, type));
        
        // Insert the HTML into the DOM - we're going to use the insert adjacent HTML method 
        // and we will need to look at the reference page of the element "https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement"
        // SELECT IT : 
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); 
        // newHtml, because that's the one that already has all our value, description and ID. 

      },

      deleteListItem: function (selectorID) {
        var el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);
      },

      clearFields: function () {
        var fields, fieldsArr;
        // QUERYSELECTORALL : 
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function(current, index, array) { 
        current.value = "";
      });

      // set the focus on the first element of the array, the first input box in the browser
      fieldsArr[0].focus(); // 0 to choose the inputDescription
      },

      displayBudget: function(obj) { // what do we need here in order to be able to actually print the budget? Of course we need to update where all of this data is stored.
        var type;
        // we need to know the class names of the elements on our user interface that we want.
        obj.budget > 0 ? type = 'inc' : type = 'exp';
        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type); // in this case we don't want to change the html but only the text content.
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc'); 
        document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp'); 
        
        if (obj.percentage > 0) {
          document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'; 
          
        } else {
          document.querySelector(DOMstrings.percentageLabel).textContent = '0%'; 

        }
      /*
        obj. comes from this elements 
        budget: data.budget,
        totalInc: data.totals.inc, 
        totalExp: data.totals.exp,
        percentage: data.percentage
      */
      },

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
            current.textContent = '-';
          }
        });
      },

      getDOMstrings: function() {
      return DOMstrings;
      }
   } ;
})();

//// MODULE 3: concting between the two other modules casue they're not conunicate to each other.
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

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

  };

  var updateBudgets = function () {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    // 2. Return the budget 
    var budget = budgetCtrl.getBudget();
    /* we need a method which returns the budget to us so that we can store it here in a variable and then pass it on to the user interface controller. */

    // 3. Display the budget on the UI  // testing > console.log(budget);
    UICtrl.displayBudget(budget);
  };

  var updatePercentage = function () {
    var percentages;
    // 1. Calculate the percenatage
    budgetCtrl.calculatePercentages();
    // 2. Read percenatage from the budget controller
    percentages = budgetCtrl.getPrecentages();
    // 3. Update the UI with the new percenatage -  console.log(percentages); // testing
    UICtrl.displayPercentages(percentages);
  }
 
  // dont repeat urself principle
  var ctrlAddItem = function () {
    var input, newItem;
  // 1. get the filed input data - to return all the 3 elements type, description , value
  input = UICtrl.getinput(); // this one we want always to happened cause without it there wont be values.
  // console.log(input); this only print the object on the consol so we call see that stuff is working correctly
  if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
  
  // 2. add the item to the budget controller
  // this addItem method returns an object, so we have to save it
  newItem = budgetCtrl.addItem(input.type, input.description, input.value); // (lecture 82)
    
  // 3. add a new item to the UI (UI - user interface) -- after insert adjacent method we can upload it to the interface
      UICtrl.addListItem(newItem, input.type);

  // 4. Clear the fields
  UICtrl.clearFields();

  // 5. Calculate and update budget
    updateBudgets();
  ////// console.log('works') //testing that the function worlks  //

  // 6. Calculate and update percenatage
  updatePercentage();
  }
};

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) { // (itemID) without any operator like !== or === this will work basically because this isn't going to be coerced or converted to true if this exists, and if it doesn't, then it will be coerced to false.
      
      // split inc-1
      splitID = itemID.split('-'); // split create an array of the 2 parts or more deppends how many dashes ("-") we have 
      type = splitID[0]; // 0 cause we want the 1st item in the id
      ID = parseInt(splitID[1]);
      // 1. delete the item from the data stracture
      budgetCtrl.deleteItem(type, ID);
      // 2. Delete the item from the UI
        UICtrl.deleteListItem(itemID);
      // 3. Update and show the new budget
      updateBudgets();
      // 4. Calculate and update percenatage
      updatePrecentage();
    }
  };

  return {
    init: function() {
      console.log('Application has started.') // testing 
      //call our setup event listeners function
      setupEventListeners();
      // cleaning the screan from false values that we set in the beggining when building the HTML exp: + 2,345.64
      // and setting everything to zero
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0, 
        totalExp: 0,
        percentage: -1
      });
    }
  }

})(budgetController, UIController); // print in consol : controller.anotherPublic() output > 28 , undifined

/* our event listeners are only going to be setup as soon as we call the init function, so we need to do that and we do that outside of the controllers.
this will be the ONLY line of code that's going to be placed on the outside. */

controller.init(); // without this line of code nothing is ever going to happen