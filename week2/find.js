db.scores.find( { student: 19 });
db.scores.find( { student: 19 , type : "essay" })
db.scores.find( { student: 19 , type : "essay" } , { "score" : true , "_id" : false } )