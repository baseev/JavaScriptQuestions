//First way may give too much recursion error, improved versions are fib2 and fib3
function fib1(n) {
  if(n<=1) {
    return n;
  }
  return fib1(n-1) + fib1(n-2);
}
console.log(fib1(10));


//Third way to avoid too much recursion, used dynamic programming
var fib = [0,1];
function fib2(n) {
  if(fib[n]){
    return fib[n];
  }
  if(n<=1) {
    return n;
  }
  fib[n] = fib2(n-1) + fib2(n-2);
  return fib[n];
}
console.log(fib2(10));


//Third using for loop and dynamic programming
function fib3(n) {
  var f = [0,1], i=0;
  for(i=2; i<=n; i++) {
     f[i] = f[i-1] + f[i-2]; 
  }
  return f[n];
}

console.log(fib3(15));


