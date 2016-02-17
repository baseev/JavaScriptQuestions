function outer() {
    var a = 10;// private variable  
    function inner() {
      console.log(++a);
    }
    return inner;
}


var f = outer();
f(); //closure gets access to private variable of outer -- a
f(); //closure gets access to private variable of outer -- a
f(); //closure gets access to private variable of outer -- a