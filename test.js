var test = require('tape');
var reuse = require('./index');

test("can reuse ids",function(t){
  var ids = reuse();
  
  var id1 = ids.get()

  t.equals(id1,1,'should be id 1');

  var id2 = ids.get()

  t.equals(id2,2,'should be id 2');

  var id3 = ids.get()


  t.equals(id3,3,'should be id 3');

  ids.release(id2)

  var id4 = ids.get();


  t.equals(id4,id2,'should have been assigned the id released');
  t.end();

})

