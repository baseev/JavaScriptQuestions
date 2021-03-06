var person = {  
  name: "Baseev Kumar",
  hello: function(one, two) {
    console.log(this.name + " says hello " + one+" "+two);
  }
}


person.hello.call(person, "world", "two"); // parameters are passed individually and calls the function on context of person
person.hello.apply(person, ["world", "two"]); // parameters are passed as array and calls the function on context of person

var func = person.hello.bind(person); //returns the hello function on context of person
func("world");
