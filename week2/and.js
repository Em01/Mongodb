db.people.find( { $and : [ { name : { $gt : "C" } }, { name : { $regex : "a" } } ] } )
//name sorts after the letter C and contains the letter a in it.
db.people.find( { name : { $gt : "C" , $regex : "a" } } ) 
//the above has exactly the same effect 
db.scores.find( { score : { $gt: 50 }, score : { $lt : 60 } } )
//Find all documents wth a score less than 60