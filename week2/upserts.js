db.people.update( { name : "George" } , { $set : { age : 40 } } , { upsert : true } )

db.foo.update( { username : 'bar' }, { '$set' : { 'interests': [ 'cat' , 'dog' ] } } , { upsert : true } );