## Return values from functions

Many functions, by default, return the value of `undefined`.

An example is the `console.log()` function.

If I run:
```js
console.log('Hello');
```
... here's the output in the console:

```js
Hello
undefined
```
Because the `console.log()` function is built so as to not have the explicitly set return value, it gets the default return value of `undefined`.

I'll now code my own implementation of `console.log()`, which doesn't return the value of `undefined`:

```js
function consoleLog(val) {
    console.log(val)
    return val
}
```
I'm using the `console.log()` function inside my custom `consoleLog` function declaration. And I'm specifying it to return the value of its argument.

Now when I run my custom `consoleLog()` function:
```js
consoleLog('Hello')
```
I get the following output:

```js
Hello
'Hello'
```
So, the value is output in the console, but it's also returned.

Why is this useful?

It's useful because I can use return values from one function inside another function.

Here's an example.

I'll first code a function that returns a double of a number that it received:
```js
function doubleIt(num) {
    return num * 2
}
```
Now I'll code another function that builds an object with a specific value:

```js
function objectMaker(val) {
    return {
        prop: val
    }
}
```
I can call the `objectMaker()` function with any value I like, such as:
```js
objectMaker(20);
```
The returned value will be an object with a single prop key set to 20:
```js
{prop:20}
```
Now consider this code:

```js
doubleIt(10).toString()
```
The above code returns the number `20` as a string, that is: `"20"`.

I can even combine my custom function calls as follows:
```js
objectMaker( doubleIt(100) );
```
This will now return the following value:

```js
{prop: 200}
```
What does all of this mean?

It means that by JavaScript allowing me to use the `return` keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.

Being able to return custom values is one of the foundations that makes functional programming possible.

## The functional programming paradigm

#### Learning Objectives
- Be able to explain that there are several programming paradigms
- Be able to explain the basic difference between the two predominant programming paradigms: functional programming and object-oriented programming
- Understand, at a very high level, how the functional programming paradigm works

"There are actually several styles of coding, also known as **paradigms**. A common style is called **functional programming**, or FP for short.

In functional programming, we use a lot of functions and variables.

```js
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
```
When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.
```js
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
```
In functional programming, functions return new values and then use those values somewhere else in the code.

```js
function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
```
Another style is **object-oriented programming (OOP)**. In this style, we group data and functionality as properties and methods inside objects.

For example, if I have a `virtualPet` object, I can give it a `sleepy` property and a `nap()` method:

```js
var virtualPet = {
    sleepy: true,
    nap: function() {}
}
```
In OOP, methods **update properties** stored in the object instead of generating new return values.

For example, if I check the `sleepy` property on the `virtualPet` object, I can confirm that it's set to `true`.

However, once I've ran the `nap()` method on the `virtualPet` object, will the `sleepy` property's value change?

```js
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false
```
OOP helps us model real-life objects. It works best when the grouping of properties and data in an object makes logical sense - meaning, the properties and methods "belong together".

Note that the goal here is not to discuss OOP in depth; instead, I just want to show you the simplest explanation of what it is and how it works, in order to make the single most important distinction between FP and OOP.

To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

There are many more concepts and ideas in functional programming.

Here are some of the most important ones:

- First-class functions

- Higher-order function

- Pure functions and side-effects

There are many other concepts and priciples in functional programming, but for now, let's stick to these three.

#### First-class functions
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

- pass to other functions

- save in a variable

- return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.

For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.

To explain how this works, consider the following program.

```js
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())
```
I start the program with the `addTwoNums()` function whose definition I've already used earlier in various variations. The reason why this function is a recurring example is because it's so simple that it helps explain concepts that otherwise might be a bit harder to grasp.

Next, I code a function named `randomNum()` which returns a random number between 0 and 10.

I then code another function named `specificNum()` which returns a specific number, the number 42.

Next, I save a variable named `useRandom`, and I set it to the boolean value of `true`. I declare another variable, named `getNumber`.

This is where things get interesting.

On the next several lines, I have an if else statement. The if condition is executed when the value of `useRandom` is set to `true`. If that's the case, the entire `randomNum()` function's declaration is saved into the `getNumber` variable. Otherwise, I'm saving the entire `specificNum()` function's declaration into the `getNumber` variable.

In other words, based on the `useRandom` being set to `true` or `false`, the getNumber variable will be assigned either the `randomNum()` function declaration or the `specificNum()` function declaration.

With all this code set, I can then invoke the `addTwoNums()` function, passing it the invocation of the `getNumber()` variables as its first and second arguments.

**This works because functions in JavaScript are truly first-class citizens, which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.**

Note: most of the code inside the `randomNum()` function declaration comes from a previous lesson, namely the lesson that discussed the Math object in JavaScript.

This brings me to the second foundational concept of functional programming, which is the concept of higher-order functions.

#### Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments

- It returns functions when invoked


There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the `addTwoNums()` function so that it is a higher-order function:

```js
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
```
You can think of the above function declaration of `addTwoNums` as describing how it will deal with the `getNumber1` and `getNumber2` inputs: once it receives them as arguments, it will then attempt invoking them and concatenating the values returned from those invocations.

For example:

```js
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```
#### Pure functions and side-effects
Another concept of functional programming are pure functions.

A pure function returns the exact same result as long as it's given the same values.

An example of a pure function is the `addTwoNums()` function from the previous section:

```js
function addTwoNums(a, b) {
    console.log(a + b)
}
```
This function will always return the same output, based on the input. For example, as long as we give it a specific value, say, a `5`, and a `6`:  

```js
addTwoNums(5,6); // 11
```
... the output will always be the same.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 

- changing variable values outside of the function itself, or even relying on outside variables 

- calling a Browser API (even the console itself!) 

- calling Math.random() - since the value cannot be reliably repeated

The topic of pure and impure functions can get somewhat complex.

## Object Oriented Programming principles

#### The Benefits of OOP
There are many benefits to using the object-oriented programming (OOP) paradigm.

OOP helps developers to mimic the relationship between objects in the real world. In a way, it helps you to reason about relationships between things in your software, just like you would in the real world. Thus, OOP is an effective approach to come up with solutions in the code you write. OOP also:

- Allows you to write modular code,

- Makes your code more flexible and

- Makes your code reusable.

The Principles of OOP
The four fundamental OOP principles are inheritance, encapsulation, abstraction and polymorphism. You'll learn about each of these principles in turn. The thing to remember about Objects is that they exist in a hierarchal structure. Meaning that the original base or super class for everything is the Object class, all objects derive from this class. This allows us to utilize the Object.create() method. to create or instansiate objects of our classes.

```js
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)
```
A more common method of creating obbjects from classes is to use the `new`  keyword. When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance.

```js
class Animal { /* ...class code here... */ }

var myDog = new Animal()

console.log (Animal)
```
This concept is explored within the next section on inheritance

#### OOP Principles: Inheritance
Inheritance is one of the foundations of object-oriented programming.

In essence, it's a very simple concept. It works like this: 

- There is a base class of a "thing".

- There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")

- There might be some other sub-sub-classes of "things" that inherit from those classes in point 2.

Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a super-class, if there are classes inheriting from that sub-class.

All of this might sound a bit "computer-sciency", so here's a more practical example:

- There is a base class of "Animal".

- There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

- Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the `extends` keyword, as in `class B extends A`.

Here's an example of an inheritance hierarchy in JavaScript:
```js
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }
```
#### OOP Principles: Encapsulation

In the simplest terms, encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

For example, when I run the following code:
```js
"abc".toUpperCase();
```
I don't really need to worry or even waste time thinking about how the `toUpperCase()` method works. All I want is to use it, since I know it's available to me. Even if the underlying syntax - that is, the implementation of the `toUpperCase()` method changes - as long as it doesn't break my code, I don't have to worry about what it does in the background, or even how it does it.

#### OOP Principles: Abstraction
Abstraction is all about writing code in a way that will make it more generalized.

The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.

It helps to think of it in the following terms: 

- An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 

- Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally.

While both the encapsulation and abstraction are important concepts in OOP, it requires more experience with programming in general to really delve into this topic.

For now, it's enough to be aware of their existence in OOP.

#### OOP Principles: Polymorphism
Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".
- So, to understand what polymorphism is about, let's consider some real-life objects.

- A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.

The above concepts can be coded in JavaScript as follows:
```js
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
```
So, I can access the `bell()` method on the `bicycle` object, using the following syntax:  
```js
bicycle.bell(); // "Get away, please"
```
I can also access the `bell()` method on the `door` object, using this syntax:  

```js
door.bell(); // "Come here, please"
```
At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on what object it is used for.

Now, to make this code truly polymorphic, I will add another function declaration:
```js
function ringTheBell(thing) {
    console.log(thing.bell())
}
```
Now I have declared a `ringTheBell()` function. It accepts a `thing` parameter - which I expect to be an object, namely, either the `bicycle` object or the `door` object.

So now, if I call the `ringTheBell()` function and pass it the `bicycle` as its single argument, here's the output:

```js
ringTheBell(bicycle); // Ring, ring! Watch out, please!
```
However, if I invoke the `ringTheBell()` function and pass it the `door` object, I'll get the following output: 
```js
ringTheBell(door); // "Ring, ring! Come here, please!"
```
You've now seen an example of the exact same function producing different results, **based on the context** in which it is used.

Here's another example,the concatenation operator, used by calling the built-in `concat()` method.

If I use the `concat()` method on two strings, it behaves exactly the same as if I used the `+` operator. 

```js
"abc".concat("def"); // 'abcdef'
```
I can also use the `concat()` method on two arrays. Here's the result: 
```js
["abc"].concat(["def"]); // ['abc', 'def']
```
Consider using the `+` operator on two arrays with one member each:  
```js
["abc"] + ["def"]; // ["abcdef"]
```
This means that the `concat()` method is exhibiting polymorphic behavior since it behaves differently based on the context - in this case, based on what data types I give it.

To reiterate, polymorphism is useful because it allows developers to build objects that can have the exact same functionality, namely, functions with the exact same name, which behave exactly the same. However, at the same time, you can override some parts of the shared functionality or even the complete functionality, in some other parts of the OOP structure.

Here's an example of polymorphism using classes in JavaScript:
```js
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
```
The `Penguin` and `Eagle` sub-classes both inherit from the `Bird` super-class. The `Eagle` sub-class inherits the `useWings()` method from the `Bird` class, but extends it with an additional console log. The `Penguin` sub-class doesn't inherit the `useWings()` class - instead, it has its own implementation, although the `Penguin` class itself does extend the `Bird` class.  

## Constructors

JavaScript has a number of built-in object types, such as:

`Math`, `Date`, `Object`, `Function`, `Boolean`, `Symbol`, `Array`, `Map`, `Set`, `Promise`, `JSON`, etc.

These objects are sometimes referred to as "native objects".

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

To use a constructor function, I must prepend it with the operator `new`.

For example, to create a new instance of the `Date` object, I can run: `new Date()`. What I get back is the current datetime, such as:

`Thu Feb 03 2022 11:24:08 GMT+0100 (Central European Standard Time)`

However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in `Math` object.

Running `new Math()` throws an `Uncaught TypeError`, informing us that `Math is not a constructo`r.

Thus, I can conclude that some built-in objects do have constructors, when they serve a particular purpose: to allow us to instantiate a specific instance of a given object's constructor. The built-in `Date` object is perfectly suited for having a constructor because each new date object instance I build should have unique data by definition, since it's going to be a different timestamp - it's going to be built at a different moment in time.

Other built-in objects that don't have constructors, such as the `Math` object, don't need a constructor. They're just static objects whose properties and methods can be accessed directly, from the built-in object itself. In other words, there is no point in building an instance of the built-in `Math` object to be able to use its functionality.

For example, if I want to use the `pow` method of the `Math` object to calculate exponential values, there's no need to build an instance of the `Math` object to do so. For example, to get the number 2 to the power of 5, I'd run:

`Math.pow(2,5); // --> 32`

There's no need to build an instance of the `Math` object since there would be nothing that needs to be stored in that specific object's instance.

Besides constructor functions for the built-in objects, I can also define custom constructor functions.

Here's an example:
```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
```
Now I can make as many icecreams as I want:

```js
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
```
I've just built two instance objects of `Icecream` type.

The most common use case of `new` is to use it with one of the built-in object types.

Note that using constructor functions on all built-in objects is sometimes not the best approach.

This is especially true for object constructors of primitive types, namely: `String`, `Number`, and `Boolean`.

For example, using the built-in `String` constructor, I can build new strings:
```js
let apple = new String("apple");
apple; // --> String {'apple'}
```
The `apple` variable is an object of type `String`.

Let's see how the `apple` object differs from the following `pear` variable:
```js
let pear = "pear";
pear; // --> "pear"
```
The `pear` variable is a string literal, that is, a primitive Javascript value.

The `pear` variable, being a primitive value, will always be more performant than the `apple` variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values are identical.

In other words, if you compare `new String('plum') === new String('plum')`, you'll get back `false`, while `"plum" === "plum"` returns true. You're getting the `false` when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the memory location where objects are saved.

Besides not using constructors to build object versions of primitives, you are better off not using constructors when constructing plain, regular objects.

Instead of `new Object`, you should stick to the object literal syntax: `{}`.

A RegExp object is another built-in object in JavaScript. It's used to **pattern-match strings** using what's known as "Regular Expressions". Regular Expressions exist in many languages, not just JavaScript.

In JavaScript, you can built an instance of the RegExp constructor using `new RegExp`. 

Alternatively, you can use a pattern literal instead of RegExp. Here's an example of using `/d/` as a pattern literal, passed-in as an argument to the `match` method on a string.

```js
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]
```
Instead of using `Array`, `Function`, and `RegExp` constructors, you should use their array literal, function literal, and pattern literal varieties: `[]`, `() {}`, and `/()/`.

However, when building objects of other built-in types, we can use the constructor.

Here are a few examples:

```js
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
```
The above list is inconclusive, but it's just there to give us an idea of some constructor functions we can surely use.

## Creating classes

By the end of this reading, you should be able to explain, with examples, the concept of extending classes using basic inheritance to alter behaviors within child classes.

By now, you should know that inheritance in JavaScript is based around the prototype object.

All objects that are built from the prototype share the same functionality.

When you need to code more complex OOP relationships, you can use the `class` keyword and its easy-to-understand and easy-to-reason-about syntax.

Imagine that you need to code a `Train` class.

Once you've coded this class, you'll be able to use the keyword `new` to instantiate objects of the `Train` class.

For now though, you first need to define the `Train` class, using the following syntax:

```js
class Train {}
```
So, you use the `class` keyword, then specify the name of your class, with the first letter capitalized, and then you add an opening and a closing curly brace.

In between the curly braces, the first piece of code that you need to define is the **constructor**:
```js
class Train {
    constructor() {

    }
}
```
The `constructor` will be used to build properties on the future object instance of the `Train` class.

For now, let's say that there are only two properties that each object instance of the `Train` class should have at the time it gets instantiated: `color` and `lightsOn`.
```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}
```
Notice the syntax of the constructor. The constructor is a special function in my `Train` class.

First of all, notice that there is no `function` keyword. Also, notice that the keyword `constructor` is used to define this function. You give your `constructor` function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are `color` and `lightsOn`.  

Next, inside the `constructor` function's body, you assigned the passed-in color parameter's value to `this.color`, and the passed-in `lightsOn` parameter's value to `this.lightsOn`.

What does this `this` keyword here represent?

**It's the future object instance of the `Train` class**.

Essentially, this is all the code that you need to write to achieve two things: 

- This code allows me to**build new instances of the `Train` class**. 

- Each object instance of the `Train` class that I build will have its own custom properties of `color` and `lightsOn`.

Now, to actually build a new instance of the `Train` class, I need to use the following syntax:
```js
new Train()
```
Inside the parentheses, you need to pass values such as `"red"` and `false`, for example, meaning that the `color` property is set to `"red"` and the `lightsOn` property is set to `false`.

And, to be able to interact with the new object built this way, you need to assign it to a variable.

Putting it all together, here's your first train:
```js
var myFirstTrain = new Train('red', false);
```
Just like any other variable, you can now, for example, console log the `myFirstTrain` object:

```js
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
```
You can continue building instances of the `Train`class. Even if you give them exactly the same properties, they are still separate objects.
```js
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
```
However, this is not all that classes can offer.

You can also add methods to classes, and these methods will then be shared by all future instance objects of my `Train` class.

For example:

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
```
Now, there are four methods on your `Train` class: 
`toggleLights()`, `lightsStatus()`,  `getSelf()` and `getPrototype()`.

- The `toggleLights` method uses the logical not operator, `!`. This operator will change the value stored in the `lightsOn` property of the future instance object of the `Train` class; hence the `!this.lightsOn`. And the `=` operator to its left means that it will get assigned to `this.lightsOn`, meaning that it will become the new value of the `lightsOn` property on that given instance object.

- The `lightsStatus()` method on the `Train` class just reports the current status of the `lightsOn` variable of a given object instance.

- The `getSelf()` method prints out the properties on the object instance it is called on.

- The `getPrototype()` console logs the prototype of the object instance of the `Train` class. The prototype holds all the properties shared by all the object instances of the `Train` class. To get the prototype, you'll be using JavaScript's built-in `Object.getPrototypeOf()` method, and passing it `this` object - meaning, the object instance inside of which this method is invoked.

Now you can build a brand new train using this updated `Train` class:

```js
var train4 = new Train('red', false);
```
And now, you can run each of its methods, one after the other, to confirm their behavior:

```js
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
```
The result of calling `toggleLights()` is the change of true to false and vice-versa, for the `lightsOn` property.

The result of calling `lightsStatus()` is the console logging of the value of the `lightsOn` property.

The result of calling `getSelf()` is the console logging the entire object instance in which the `getSelf()` method is called. In this case, the returned object is the `train4` object. Notice that this object gets returned only with the properties ("data") that was build using the `constructor()` function of the `Train` class. That's because all the methods on the `Train` class do not "live" on any of the instance objects of the `Train` class - instead, they live on the prototype, as will be confirmed in the next paragraph.

Finally, the result of calling the `getPrototype()` method is the console logging of all the properties on the `prototype`. When the `class` syntax is used in JavaScript, this results in **only shared methods being stored on the prototype**, while the `constructor()` function sets up the mechanism for saving instance-specific values ("data") at the time of object instantiation.

Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.

However, this is not the whole story.

It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

In the code that follows, you will observe another class being coded, which is named `HighSpeedTrain` and inherits from the `Train` class.

This makes the `Train` class a base class, or the super-class of the `HighSpeedTrain` class. Put differently, the `HighSpeedTrain` class becomes the sub-class of the `Train` class, because it inherits from it.

To inherit from one class to a new sub-class, JavaScript provides the `extends` keyword, which works as follows:
```js
class HighSpeedTrain extends Train {
}
```
As in the example above, the sub-class syntax is consistent with how the base class is defined in JavaScript. The only addition here is the `extends` keyword, and the name of the class from which the sub-class inherits.

Now you can describe how the `HighSpeedTrain` works. Again, you can start by defining its constructor function:

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}
```
Notice the slight difference in syntax in the constructor of the `HighSpeedTrain` class, namely the use of the `super` keyword.

In JavaScript classes, `super` is used to specify what property gets inherited from the super-class in the sub-class.

In this case, I choose to inherit both the properties from the `Train` super-class in the `HighSpeedTrain` sub-class.

These properties are `color` and `lightsOn`.

Next, you add the additional properties of the HighSpeedTrain class inside its constructor, namely, the passengers and highSpeedOn properties.

Next, inside the constructor body, you use the `super` keyword and pass in the inherited `color` and `lightsOn` properties that come from the `Train` class. On subsequent lines you assign `passengers` to `this.passengers`, and `highSpeedOn` to `this.highSpeedOn`.

Notice that in addition to the inherited properties, you also **automatically inherit** all the methods that exist on the `Train` prototype, namely, the `toggleLights()`, `lightsStatus()`, `getSelf()`, and `getPrototype()` methods.

Now let's add another method that will be specific to the `HighSpeedTrain` class: the `toggleHighSpeed()` method.

```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
}
```
Additionally, imagine you realized that you don't like how the `toggleLights()` method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the `HighSpeedTrain` class. 
```js
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}
```
So, how did you override the behavior of the original `toggleLights()` method?

Well in the super-class, the `toggleLights()` method was defined as follows:
```js
toggleLights() {
    this.lightsOn = !this.lightsOn;
}
```
You realized that the `HighSpeedTrain` method should reuse the existing behavior of the original `toggleLights()` method, and so you used the `super.toggleLights()` syntax to inherit the entire super-class' method.

Next, you also inherit the behavior of the super-class' `lightsStatus()` method - because you realize that you want to have the updated status of the `lightsOn` property logged to the console, whenever you invoke the `toggleLights()` method in the sub-class.

Finally, you also add the third line in the re-implemented `toggleLights()` method, namely:

```js
console.log('Lights are 100% operational.');
```
You've added this third line to show that I can combine the "borrowed" method code from the super-class with your own custom code in the sub-class.

Now you're ready to build some train objects.

```js
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
```

You've built the `train5` object of the `Train` class, and set its `color` to `"blue"` and its `lightsOn` to `false`.

Next, you've built the `highSpeed1` object to the `HighSpeedTrain` class, setting `passengers` to `200`, `highSpeedOn` to `false`, `color` to`"green"`, and lightsOn to false.

Now you can test the behavior of `train5`, by calling, for example, the `toggleLights()` method, then the `lightsStatus()` method:
```js
train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
```
Here's the entire completed code for this lesson:

```js
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
```
Notice how the `toggleLights()` method behaves differently on the `HighSpeedTrain` class than it does on the `Train` class.

Additionally, it helps to visualize what is happening by getting the prototype of both the `train5` and the `highSpeed1` trains:

```js
train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
```
The returned values in this case might initially seem a bit tricky to comprehend, but actually, it is quite simple: 

1. The prototype object of the `train5` object was created when you defined the class `Train`. You can access the prototype using `Train.prototype` syntax and get the prototype object back. 

2.The prototype object of the `highSpeed1` object is this object: `{constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}`. In turn this object has its own prototype, which can be found using the following syntax: `HighSpeedTrain.prototype.__proto__`. Running this code returns: `{constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}`.

Prototypes seem easy to grasp at a certain level, but it's easy to get lost in the complexity. This is one of the reasons why class syntax in JavaScript improves your developer experience, by making it easier to reason about the relationships between classes. However, as you improve your skills, you should always strive to understand your tools better, and this includes prototypes. After all, JavaScript is just a tool, and you've now "peeked behind the curtain".

In this reading, you've learned the very essence of how OOP with classes works in JavaScript. However, this is not all. 

In the lesson on designing an object-oriented program, you'll learn some more useful concepts. These mostly have to do with coding your classes so that it's even easier to create object instances of those classes in JavaScript.

#### Using class instance as another class' constructor's property

Consider the following example:
```js
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //
```
In this example, there are three classes defined: `StationaryBike`, `Treadmill`, and `Gym`.

The `StationaryBike` class is coded so that its future object instance will have the `position` and `gears` properties. The `position` property describes where the stationary bike will be placed inside the gym, and the gears propery gives the number of `gears` that that stationary bike should have.

The `Treadmill` class also has a position, and another property, named `modes` (as in "exercise modes").

The `Gym` class has three parameters in its constructor function: `openHrs`, `stationaryBikePos`, `treadmillPos`.

This code allows me to instantiate a new instance object of the `Gym` class, and then when I inspect it, I get the following information:

- the `openHrs` property is equal to `"7-22"` (that is, 7am to 10pm)

- the `stationaryBike` property is an object of the `StationaryBike` type, containing two properties: `position` and `gears`

- the `treadmill` property is an object of the `Treadmill` type, containing two properties: `position` and `modes`

## Default Parameters

A useful a ES6 feature allows me to set a default parameter inside a function definition  First, .

What that means is, I'll use an ES6 feature which allows me to set a default parameter inside a function definition, which goes hand in hand with the defensive coding approach, while requiring almost no effort to implement.

For example, consider a function declaration without default parameters set:
```js
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
```
Obviously, the `noDefaultParams` function should return whatever number it receives, squared.

However, what if I call it like this:
```js
noDefaultParams(); // Result: NaN
```
JavaScript, due to its dynamic nature, doesn't throw an error, but it does return a non-sensical output.

Consider now, the following improvement, using default parameters:

```js
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
```
Default params allow me to build a function that will run with default argument values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.

This now allows me to code my classes in a way that will promote easier object instantiation.

Consider the following class definition:
```js
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
```
Now I'll instantiate an object of the `NoDefaultParams` class, and run the `calculate()` method on it. Obviously, the `bool1` should be set to `true` on invocation to make this work, but I'll set it to false on purpose, to highlight the point I'm making.

```js
var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'
```
This example might highlight the reason sometimes weird error messages appear when some software is used - perhaps the developers just didn't have enough time to build it better.

However, now that you know about default parameters, this example can be improved as follows:
```js
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
```
This approach improves the developer experience of my code, because I no longer have to worry about feeding the `WithDefaultParameters` class with all the arguments. For quick tests, this is great, because I no longer need to worry about passing the proper arguments.

Additionally, this approach really shines when building inheritance hierarchies using classes, as it makes it possible to provide only the custom properties in the sub-class, while still accepting all the default parameters from the super-class constructor.

In conclusion, in this reading I've covered the following: 

- How to approach designing an object-oriented program in JavaScript 

- The role of the `extends` and `super` keywords 

- The importance of using default parameters.

## Designing an OO Program
n this reading, I will show you how to create classes in JavaScript, using all the concepts you've learned so far.

Specifically, I'm preparing to build the following inheritance hierarchy:

                Animal
               /       \
            Cat          Bird
          /    \          \
    HouseCat   Tiger      Parrot

There are two keywords that are essential for OOP with classes in JavaScript.

These keywords are `extends` and `super`.

The `extends` keyword allows me to inherit from an existing class.

Based on the above hierarchy, I can code the `Animal` class like this:

```js
class Animal {
    // ... class code here ...
}
```
Then I can code, for example, the Cat sub-class, like this:

```js
class Cat extends Animal {
    // ... class code here ...
}
```
This is how the `extends` keyword is used to setup inheritance relationships.

The `super` keyword allows me to "borrow" functionality from a super-class, in a sub-class. The exact dynamics of how this works will be covered later on in this lesson.

Now I can start thinking about how to implement my OOP class hierarchy.

Before I even begin, I need to think about things like: * What should go into the base class of `Animal`? In other words, what will all the sub-classes inherit from the base class? * What are the specific properties and methods that separate each class from others? * Generally, how will my classes relate to one another?

Once I've thought it through, I can build my classes.

So, my plan is as follows: 

1. The `Animal` class' constructor will have two properties: `color` and `energy `

2. The `Animal` class' prototype will have three methods: `isActive()`, `sleep()`, and `getColor()`. 

3. The `isActive()` method, whenever ran, will lower the value of energy until it hits `0`. The `isActive()` method will also report the updated value of `energy`. If `energy` is at zero, the animal object will immediately go to sleep, by invoking the `sleep()` method based on the said condition. 

4. The `getColor()` method will just console log the value in the `color` property. 

5. The `Cat` class will inherit from `Animal`, with the additional `sound`, `canJumpHigh`, and `canClimbTrees` properties specific to the `Cat` class. It will also have its own `makeSound()` method. 

6. The `Bird` class will also inherit from `Animal`, but is own specific properties will be quite different from `Cat`. Namely, the `Bird` class will have the `sound` and the `canFly` properties, and the `makeSound` method too. 

7. The `HouseCat` class will extend the `Cat` class, and it will have its own `houseCatSound` as its special property. Additionally, it will override the `makeSound()` method from the `Cat` class, but it will do so in an interesting way. If the `makeSound()` method, on invocation, receives a single `option` argument - set to `true`, then it will run `super.makeSound()` - in other words, run the code from the parent class (`Cat`) with the addition of running the `console.log(this.houseCatSound)`. Effectively, this means that the `makeSound()` method on the `HouseCat` class' instance object will have two separate behaviors, based on whether we pass it `true` or `false`. 

8. The `Tiger` class will also inherit from `Cat`, and it will come with its own `tigerSound` property, while the rest of the behavior will be pretty much the same as in the `HouseCat` class. 

9. Finally, the `Parrot` class will extend the `Bird` class, with its own `canTalk` property, and its own `makeSound()` method, working with two conditionals: one that checks if the value of `true` was passed to `makeSound` during invocation, and another that checks the value stored inside `this.canTalk` property.  

Now that I have fully explained how all the code in my class hierarchy should work I might start implementing it.
```js
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}
var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!
```
## For of loops and objects

In this reading, you'll learn how the for of loop works conceptually.

To begin, it's important to know that a for of loop cannot work on an object directly, since **an object is not iterable**. For example:
```js
const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
```
Running the above code snippet will throw the following error:  

```
Uncaught TypeError: car is not iterable
```
Contrary to objects, arrays are iterable. For example:  

```js
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
```
This time, the output is as follows:  

```
red
orange
yellow
```
Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.

But how?

Before you can properly answer this question, you first need to review three built-in methods: `Object.keys()`, `Object.values()`, and `Object.entries()`.

#### Built-in methods
**The `Object.keys()` method**
The `Object.keys()` method receives an object as its parameter. Remember, this object is **the object you want to loop over**. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the `Object.keys()` method.

Here's an example of running the `Object.keys()` method on a brand new `car2` object:
```js
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
```
So, when I run `Object.keys()` and pass it my `car2` object, **the returned value is an array of strings**, where each string is a property key of the properties contained in my `car2` object.

**The `Object.values()` method**
Another useful method is `Object.values()`:

```js
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']
```
#### The `Object.entries()` method
Finally, there's another useful method, `Object.entries()`, which returns an array listing both the keys and the values.  
```js
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
```
What gets returned from the invocation of the `Object.entries()` method is the following:  
```js
[ ['speed', 400], ['color', 'magenta'] ]
```
This time, the values that get returned are 2-member arrays nested inside an array. In other words, you get an array of arrays, where each array item has two members, the first being a property's key, and the second being a property's value.

Effectively, it's as if you was listing all of a given object's properties, a bit like this:
```
[
    [propertyKey, propertyVal],
    [propertyKey, propertyVal],
    ...etc
]
```
To summarise, you learned that you can loop over arrays using the `for of` loop.  You also learned that you can extract object's keys, values, or both, using the `Object.keys()`, `Object.values()` and `Object.entries()` syntax.

#### Examples
You now have all the ingredients that you need to **loop over any object's own property keys and values**.

Here's a very simple example of doing just that:
```
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
```
The trickiest part to understand in this syntax is probably the `clothingItem[key]`.

Luckily, this is not too hard to comprehend, especially since you've already covered the concept previously when you were learning **how to access an object's member using the brackets notation**. 

Recall that you also learned how you can dynamically access a property name.

To revisit this concept and show a practical demo of how that works, let's code a function declaration that randomly assigns either the string `speed` or the string `color` to a variable name, and then build an object that has only two keys: a `speed` key and a `color` key.

After this setup, you will be able to dynamically access either one of those properties on a brand new `drone` object, using the brackets notation.

Here's the example's code:

```js
function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
```
This example might feel a bit convoluted, but its purpose is to demo the fact that you're getting either one or the other value from an object's key, based on the string that got assigned to the `dynamicKey` variable, and accessed without issues, using the brackets notation.

Feel free to run the `testBracketsDynamicAccess()` function a few times, and you'll notice that sometimes the value that gets output is `15`, and sometimes it's `orange`, although I'm always accessing the `drone[dynamicKey]` key. Since the value of the `dynamicKey` is populated on the `Math.random()` invocation, sometimes that expression evaluates to `drone["speed"]`, and other times that expression evaluates to `drone["color"]`.


