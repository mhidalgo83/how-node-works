//console.log(arguments);
//console.log(require("module").wrapper);

//module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(9, 5));

//exports
//const calc2 = require("./test-module-2");
//Destructured
const { add, multiply, divide } = require("./test-module-2");
console.log(add(9, 5));
console.log(divide(6, 3));

//Caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
