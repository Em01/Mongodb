db.students.createIndex({'scores.score':1});

db.students.getIndexes();

//to search for exam scores above 99

db.students.explain().find({'scores': {$elemMatch: {type:'exam', score:{'$gt':99.7}}}})
//element of the document of the array which is of type exam has a score greater than 99.8

// elemMatch document with an array field with at least one element

//add .count() to see how many

//do not use the following query-may not satisfy criteria in the same sub part

db.students.find({'$and':[{'scores.type':'exam'},{'scores.score':{'$gt':99.8}}]}).pretty();