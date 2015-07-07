db.scores.find( { score : { $gt :  95 } } )
db.scores.find( { score : { $gt : 95 } , type : "essay" } )
db.scores.find( { score : { $gt : 95 , $lte : 100 } , type : "essay" } )	


db.people.find( { name : { $lt : "D" } } )
db.people.find( { name : { $lt : "D" , $gt : "B" } } )