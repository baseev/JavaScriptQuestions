/**
The closure is very helpful in asynchronous programming as the data may come in the later time 
and the callback as closure will remember the context in which closure has created.
*/

function f1(callback) {
      callback(100);
}

function f2() {
  var amount =200;
  function calculate(days) {
    var a =days * amount;
    console.log(a);
  }
  return calculate;
}


f1(f2());