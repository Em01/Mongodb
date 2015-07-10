db.students.createIndex({student_id:1} )
//student id ascending
db.students.find({student_id:5});

db.students.createIndex({student_id:1, class_id:-1})
//ascending and descending with compound index


// Please provide the mongo shell command to add an index to a collection named students, having the index key be class, student_name.

// Neither will go in the "-1" direction..

db.students.createIndex({class:1, student_name:-1})