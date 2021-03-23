
var moment = require("moment");
var math = require("mathjs");

console.log("hello from js");
var datetime = moment().format('dddd');
console.log(datetime);
console.log(math.evaluate('1.2 * (2 + 4.5)'));

var addNumbers = (x, y) => {
  return x + y;
}
console.log(addNumbers(2, 5));
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`)