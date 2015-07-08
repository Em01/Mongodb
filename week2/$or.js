db.people.find( { $or : [ { name : { $regex : "e$" } }, { age : { $exists : true } } ] } )
//prefix operator
//takes an array of queries
