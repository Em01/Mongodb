//inside array
db.accounts.find( {favourites : { $all : [ "pretzels", "coke" ] } } )
//opperand on the right has to be a subset


//$in returns the docs that have either of the fields in the query

db.accounts.find( { name : { $in : [ "Howard" , "John" ] } } )