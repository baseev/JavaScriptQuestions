var name="Sapna Baseev";

var obj = {
  name: "Ishaan Baseev",
  print: function() {
                console.log(this.name);
             },
  myobj : {
      name: "baseev kumar",
      print: function() {
                console.log(this.name);
             }            
      }
}

obj.myobj.print(); //baseev kumar
obj.print(); //Ishaan Baseev

var m =obj.myobj.print;
m.call(this); //Sapna Baseev