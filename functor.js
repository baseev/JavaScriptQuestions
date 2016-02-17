1 Function.prototype.new = function () {
2     function functor() { return constructor.apply(this, args); }
3     var args = Array.prototype.slice.call(arguments);
4     functor.prototype = this.prototype;
5     var constructor = this;
6     return new functor;
7 };


var author = Person.new.apply(Person, ["Aadit", "Shah"]);