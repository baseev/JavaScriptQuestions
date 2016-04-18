function doSomething() {
    return Promise.resolve("doSomething");
}

function doSomethingElse() {
    return Promise.resolve("doSomethingElse");
}

doSomething().then(function () {
  return doSomethingElse();
}).then(function(val){ console.log("1 ::: "+val) }); //1 :: doSomethingElse


doSomething().then(function () {
  doSomethingElse();
}).then(function(val){ console.log("2 ::: "+val) }); //2 :: undefined



doSomething().then(doSomethingElse()).then(function(val){ console.log("3 ::: "+val) }); //3 :: doSomething

doSomething().then(doSomethingElse).then(function(val){ console.log("4 ::: "+val) }); //4 :: doSomethingElse


Promise.all([doSomething(), doSomethingElse()]).then(function(val){ console.log("5 ::: "+val)}) //5 :: doSomething,doSomethingElse

Promise.all([doSomethingElse(), doSomething()]).then(function(val){ console.log("5 ::: "+val)}) //6 :: doSomethingElse,doSomething