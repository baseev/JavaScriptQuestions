function outer() {
    return inner;
	function inner() {
      console.log("inner function");
    }
}

var f = outer();
f(); //prints 'inner function' as functions/methods and properties/variables will be hoisted
