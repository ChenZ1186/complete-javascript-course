/*
inside the console type john, this will open for us the Person object.
click on the arrow which point to the object, and we will see all the properties. we can also see the prototype

type Person.prototype

type john.__proto__ === Person.prototype
and we got true. and thats mean that the prototype of john is the prototype property of the person function constructor.

type john.hasOwnPrototype('job') > we will get true cause job is the property of john's object. 

type john.hasOwnPrototype('lastName') > we will get false and that becuase lastName is not a property of john, as it the property of the prototype of the Person constructor, its a property that we inherited from the prototype.

type john instanceof Person > we will get true, because we created it through the person function constructor.
*/