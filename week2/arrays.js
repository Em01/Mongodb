db.arrays.update( { _id : 0 } , { $set : { "a.2" : 5 } } )
//array field name and decimal representation of the index in the array
db.arrays.update( { _id : 0 } , { $push : { "a.2" : 5 } } ) //adds
db.arrays.update( { _id : 0 } , { $pop : { "a.2" : 5 } } ) // removes
db.arrays.update( { _id : 0 } , { $pop : { "a.2" : -1 } } ) //removes leftmost element
db.arrays.update( { _id : 0 } , { $pushAll : { a : [ 7 , 8 , 9] } } ) //array of elements added to field manipulating
db.arrays.update( { _id : 0 } , { $pull : { a : 5 } } ) //remove an element from an array no matter what its position
db.arrays.update( { _id : 0 } , { $pullAll : { a : [5, 4, 1 } } ) //removes a list
db.arrays.update( { _id : 0 } , { $addToSet : { a : 5 } } )//if the element already exists then it does nothing otherwise it updates