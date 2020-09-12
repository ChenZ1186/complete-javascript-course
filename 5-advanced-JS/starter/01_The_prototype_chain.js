/*
inside the console type john, this will open for us the Person object.
click on the arrow which point to the object, and we will see all the properties. we can also see the prototype

type Person.prototype

type john.__proto__ === Person.prototype
and we got true. and thats mean that the prototype of john is the prototype property of the person function constructor.

this is the prototype property of the person function constructor:
<prototype>: {…}
calculateAge: function calculateAge()​​
constructor: function Person(name, yearOfBirth, job)
lastName: "Smith"

this is the prototype property of the object funtion constructor:
<prototype>: {…}
__defineGetter__: function __defineGetter__()
__defineSetter__: function __defineSetter__()
__lookupGetter__: function __lookupGetter__()
__lookupSetter__: function __lookupSetter__()
__proto__: 
constructor: function Object()
hasOwnProperty: function hasOwnProperty()
isPrototypeOf: function isPrototypeOf()
propertyIsEnumerable: function propertyIsEnumerable()
toLocaleString: function toLocaleString()
toString: function toString()
valueOf: function valueOf()
<get __proto__()>: function __proto__()
<set __proto__()>: __proto__()

and that's because the person function constructor is in fact an instance of the object functoin constructor, and that is how we can see the whole prototypt chain.  

lets look at the prototype of john, we can see that there is also a prototype there (its the second __proto__:Object).
this is the prototype property of the object constructor. all of the objects are actually instances of the object-object. inside that prototype we have a bunch of methods that are associated to the prototype property of the object function constructor.

we can use the exact same methods that are in the property:
hasOwnPrototype() - this method asking if an object has a property or not.
type john.hasOwnPrototype('job') > we will get true cause job is the property of john's object. 

type john.hasOwnPrototype('lastName') > we will get false and that becuase lastName is not a property of john, as it the property of the prototype of the Person constructor, its a property that we inherited from the prototype.

type john instanceof Person > we will get true, because we created it through the person function constructor.

consol.info(john) - we will be able to look inside the object
*/