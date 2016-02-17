function doSomething() {
    return Promise.resolve("doSomething");
}

function doSomethingElse() {
    return Promise.resolve("doSomethingElse");
}

doSomething().then(function () {
  return doSomethingElse();
}).then(function(val){ console.log("1 ::: "+val) });


doSomething().then(function () {
  doSomethingElse();
}).then(function(val){ console.log("2 ::: "+val) });



doSomething().then(doSomethingElse()).then(function(val){ console.log("3 ::: "+val) });

doSomething().then(doSomethingElse).then(function(val){ console.log("4 ::: "+val) });


Promise.all([doSomething(), doSomethingElse()]).then(function(val){ console.log("5 ::: "+val)})

Promise.all([doSomethingElse(), doSomething()]).then(function(val){ console.log("5 ::: "+val)})