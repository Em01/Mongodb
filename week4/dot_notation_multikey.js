db.students.createIndex({'scores.score':1});

db.students.getIndexes();

//to search for exam scores above 99

db.students.explain().find({'scores': {$elemMatch: {type:'exam', score:{'$gt':99.7}}}})
//element of the document of the array which is of type exam has a score greater than 99.8

// elemMatch document with an array field with at least one element

//add .count() to see how many

//do not use the following query-may not satisfy criteria in the same sub part

db.students.find({'$and':[{'scores.type':'exam'},{'scores.score':{'$gt':99.8}}]}).pretty();


// Suppose you have a collection called people in the database earth with documents of the following form:

{
	"_id" : ObjectId("551458821b87e1799edbebc4"),
	"name" : "Eliot Horowitz",
	"work_history" : [
		{
			"company" : "DoubleClick",
			"position" : "Software Engineer"
		},
		{
			"company" : "ShopWiki",
			"position" : "Founder & CTO"
		},
		{
			"company" : "MongoDB",
			"position" : "Founder & CTO"
		}
	]
}


db.people.createIndex({"work_history.company":-1});

