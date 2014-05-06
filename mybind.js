"use strict"

// i is a global variable
function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun();
  }
}

var cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};

Function.prototype.myBind = function myBind (obj) {
  var toBind = this;
  return function () {
    toBind.apply(obj);
  };
}

console.log(cat.age);
times(10, cat.ageOneYear.myBind(cat));
console.log(cat.age);