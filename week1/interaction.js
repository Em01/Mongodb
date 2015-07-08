Mongo
use test
db.things.save( { a : 1 , b : 2 , c : 3 } )
db.things.find()

//subdocs
db.things.save( { name : Bet, address : { street : "elm drive" } } )
db.things.find().pretty()
