db.employees.find().pretty()

db.employees.getIndexes()

db.employees.createIndex({cell:1},{unique:true})
//if more than one employee with the cell number you will get dup key error

db.employees.createIndex({cell:1},{unique:true, sparse:true})
