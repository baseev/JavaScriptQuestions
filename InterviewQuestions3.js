var Shape = createShape();

function createShape() {
	var defaultData = {'color1': 'red', 'color2': 'blue'};
	
	var Shape = function(color) {
		this.data = defaultData;
		this.size = size;
	}
	
	Shape.prototype.print = function() {
		console.log("color : "+this.data.color1+", size : "+this.data.color2+", size x :"+this.size.x+", size y :"+this.size.y);
	}
	
	Shape.setData(data) {
		defaultData = data;
	}
	
	Shape.prototype.getSize = function() {
		return this.size;
	}
	
	return shape;	
}

var size = {'x': 10, 'y':20};

var s1 = Shape(size);
s1.print();

var myData = {'color1': 'green', 'color2': 'yellow'};
Shape.setData(myData);

s1.print();

var s2 = Shape(s1.getSize());
s1.print();

s2.size.x=100;
s1.print();



