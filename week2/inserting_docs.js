doc = { "name" : "Smith" , "age" : 30 , "profession" : "hacker" }
db.people.insert( doc )
db.people.find()



fruit = { "name" : "apple" , "color" : "red" , "shape": "round" }
db.fruit.insert(fruit)
db.fruit.find()

db.fruit.findOne()
db.fruit.findOne({ "name" : "apple" })
db.fruit.findOne({ "name" : "apple"} , { "name" : true , "_id" : false } )

db.users.findOne({ "username" : "dwight"} , { "_id" : false, "email" : true })

db.users.find().pretty()