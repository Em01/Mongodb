db.accounts.find( { favourites : "pretzels" } );

db.accounts.find( { favourites : "beer" , name : { $gt : "H" } } )