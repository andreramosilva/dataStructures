let hash = (string, max) => {
  let hash = 0;
  for (var i = 0; i < string.lenght; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

let HashTable = function () {
  let storage = [];

  const storegeLimit = 4;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    var index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      //rest of the code from here.
    }
  };
};
