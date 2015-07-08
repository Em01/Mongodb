//you can hold on to a cursor with the following
cur =
//print nothing
cur = db.people.find(); null;
//cur is a variable holding on to a cursor object
//cursor has variety of methods
cur.hasNext()
//returns true as long as there is another document to visit
cur.next()
//next doc to be visited on this cursor

while (cur.hasNext()) printjson(cur.next());

//if you have not stepped through the documents you can impose limits-return only that many documents for the cursor
cur.limit(5); null;
cur.sort( { name : -1 } ); null;
//null stops the cursor being returned

cur.sort( { name : -1 } ).limit(3); null;
>null
while (cur.hasNext()) printjson(cur.next());

//sort and limit modify the data sent to the database-cant apply to the cursor when begun retrieving docs

cur.sort({ name : -1 } ).limit(3).skip(2); null;
//not processed in the client
