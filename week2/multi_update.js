//multi true must be supplied as an argument if you want to update more than pne doc

db.people.update( { } , { $set : { title : "Dr" } } , { multi : true } )

//pausing-yielding