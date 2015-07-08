//update and set a specific field

db.people.update( { name : "Alice" } , { $set : { age : 30 } } )

//$inc incremenets-adds my specified amount

db.people.update( { name : "Alice" } , { $inc : { age : 1 } } )
