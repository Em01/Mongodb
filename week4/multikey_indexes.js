db.foo.insert({a:1, b:2});

db.foo.find()

db.foo.createIndex({a:1, b:1});

db.foo.explain().find({a:1});

//with array.

db.foo.insert({a:3, b:[3,5,7]});


// Suppose we have a collection foo that has an index created as follows:
db.foo.createIndex( { a:1, b:1 } )

// Which of the following inserts are valid to this collection?
db.foo.insert( { a : "grapes", b : [ 8, 9, 10 ] } )
db.foo.insert( { a : ["apples", "oranges" ], b : "grapes" } ) 
db.foo.insert( { a : "grapes", b : "oranges" } ) 


