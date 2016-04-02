function createShape() {
  defaultData = {'color': 'red'};  
  var Shape = function(size) {
    this.data = defaultData;
    this.size = size;
  }
  
  Shape.prototype.print = function() {
    console.log("this.data : "+this.data.color+", size : "+this.size.x+", "+this.size.y);
  }  
  
  Shape.setData = function(data) {
    defaultData = data;
  }
  
  return Shape;
}


var shape= createShape();
var s1 = new shape({"x": 10, "y":20});
s1.print();

shape.setData({'color': 'blue'});


var s2 = new shape({"x": 1, "y":2});


s1.size.x = 100;

s1.print();

s2.print();
