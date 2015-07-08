db.people.remove( { name : "Alice"} )

db.people.remove( { } ) //all

db.people.drop() //faster than removing one by one docs-metadata can remain if not dropped

