db.people.find( { profession : { $exists :true } })

db.people.find( { name : { $type : 2 } } )
//type refers to the BSON

db.people.find( { name : { $regex : "a" } } )

db.people.find( { name : { $regex : "e$" } } )
//name ends with the letter e

db.people.find( { name : { $regex : "^A"} } )
//starts with the letter A


//Write a query that retrieves documents from a users collection where the name has a "q" in it, and the document has an email field.
db.users.find({ name : {$regex : "q" }, email : {$exists : true} } )