function outer() {
    console.log(a)//'undefined' as it is hoisted but no value assigned
	inner();
	function inner() {
      console.log(a);//'undefined'
    }
	var a=10;
	console.log(a) //prints '10'
	inner();//prints '10
}

outer();
