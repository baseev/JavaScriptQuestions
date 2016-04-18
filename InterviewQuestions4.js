var Shape = createShape();

function createShape() {
	var defaultData = {'color1': 'red', 'color2': 'blue'};
	
	var Shape = function(size) {
		this.data = defaultData;
		this.size = size;
	}
	
	Shape.prototype.print = function() {
		console.log("color1 : "+this.data.color1+", color2 : "+this.data.color2+", size x :"+this.size.x+", size y :"+this.size.y);
	}
	
	Shape.setData = function(data) {
		defaultData = data;
	}
	
	Shape.prototype.getSize = function() {
		return this.size;
	}
	
	return Shape;	
}


var size = {'x': 10, 'y':20};

var s1 = new Shape(size);
console.log("print s1 with default value");
s1.print(); //red, blue, 10, 20

var myData = {'color1': 'green', 'color2': 'yellow'};
Shape.setData(myData);
console.log("print s1 with myData");
s1.print();//red, blue, 10, 20


var size1 = s1.getSize();
size1.x = 200;

var s2 = new Shape(size1);
console.log("print s2 with default value");
s2.print();//green, yellow, 200, 20

//s2.size.x=100;
console.log("print s1 size.x=100");
s1.print();//red, blue, 200, 20


