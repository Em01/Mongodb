db.foo.find().explain()


db.foo.explain().find()
db.foo.explain().update()
.remove()
.aggregate()
.help()
//cant run an insert on it
//pref for 3.0
//returns an explainable object

//you can calle xplain on a cursor

var cursor = db.example.find({a:99})
cursor.explain()
cursor.next() //doesnt iterate it for you


// Which of the following are valid ways to find out which index uses a particular query? Check all that apply.


curs = db.example.find( { a : 1, b : 2 } ); curs.explain()
db.example.find( { a : 1, b : 2 } ).explain()
var exp = db.example.explain(); exp.find( { a : 1, b : 2 } )
db.example.remove( { a : 1, b : 2 } ).explain()
db.example.explain().remove( { a : 1, b : 2 } )
db.example.explain().find( { a : 1, b : 2 } )

