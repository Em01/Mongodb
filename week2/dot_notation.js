//Allows you to reach inside of nested documents, look for a specific piece of information without knowledge of 
//surrounding context
db.users.find( { email : { work : "richard@10gen.com" } } );


//Suppose a simple e-commerce product catalog called catalog with documents that look like this:
// { product : "Super Duper-o-phonic", 
//   price : 100000000000,
//   reviews : [ { user : "fred", comment : "Great!" , rating : 5 },
//               { user : "tom" , comment : "I agree with Fred, somewhat!" , rating : 4 } ],
//   ... }

db.catalog.find( { "price":{"$gt" : 10000}, "reviews.rating":{ "$gte" : 5} } )