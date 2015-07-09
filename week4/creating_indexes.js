db.students.createIndex({student_id:1} )
//student id ascending
db.students.find({student_id:5});

db.students.createIndex({student_id:1, class_id:-1})
//ascending and descending with compound index
