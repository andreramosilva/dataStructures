//set is  basicly and array that can't have duplicates

function mySet() {
  // the var collection will hold the set
  var collection = [];

  //this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  //this method will return all the values in the set
  this.values = function () {
    return collection;
  };
  //this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //this method will remove an element from the set

  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  //this method will return the size of the set
  this.size = function () {
    return collection.length;
  };

  //this method will return the union of two sets

  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  //this method will return the intersection of the two sets as a new set

  this.intersection = function (otherSet) {
    var intersection = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this method will return the difference of the two sets as new set

  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // this method will tes if the set is a subset of a diferent set

  this.subset = function (otherSet) {
    var firstSet = this.values();
    //return (firstSet = this.values());
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();

setA.add("a");

setB.add("a");
setB.add("a");
setB.add("a");
setB.add("a");
setB.add("a");
setB.add("c");

console.log(setA.subset(setB));
