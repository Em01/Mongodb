db.people.update( { name : "Jones" } , { $unset : { profession : 1} } )


Write an update query that will remove the "interests" field in the following document in the users collection.
{ 
    "_id" : "jimmy" , 
    "favorite_color" : "blue" , 
    "interests" : [ "debating" , "politics" ] 
}


db.users.update({_id :'jimmy' }, {$unset: {interests:1}})