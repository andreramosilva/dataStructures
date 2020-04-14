//LIFO last in first out
//examples going  back in the browser

//functions: push, pop, peek , length

var letters = [];

var word = "racecar";

var rword = "";

//put letters of word in a stack

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a paladrome");
} else {
  console.log(word + " is not a paladrome");
}

//----------------------------------------------------------------

var stack = function () {
  this.count = 0;
  this.storage = {};

  //adds a value into the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
