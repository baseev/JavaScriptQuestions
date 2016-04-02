//closures
for(var i=0; i<3; i++) {
    setTimeout(function() {
        console.log('counter value is ' +i);
    }, 1000);
}


//one way of printing properly.
function printCounter(i) {
    setTimeout(function() {
        console.log('counter value is ' +i);
    }, 1000);
}

for(var i=0; i<3; i++) {
	printCounter(i);
}

//second way of printing properly.
for(var i=0; i<3; i++) {
	(function(j) {
		setTimeout(function() {
			console.log('counter value is ' +j);
		}, 1000);
   })(i);
}