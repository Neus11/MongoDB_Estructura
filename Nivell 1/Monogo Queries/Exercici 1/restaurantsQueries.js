// Nivell 1, 17 queries:
//1.
db.restaurants.find().pretty()
//2.
db.restaurants.find({},{ restaurant_id: 1, cuisine: 1, name: 1, borough: 1})
//3.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, cuisine: 1, name: 1, borough: 1})
//4.
db.restaurants.find({},{ _id: 0, restaurant_id: 1, name: 1, borough: 1, address: {zipcode: 1}})
//5.
db.restaurants.find({"borough": "Bronx"})
//6.
db.restaurants.find({"borough": "Bronx"}).limit(5)
//7.
db.restaurants.find({"borough": "Bronx"}).pretty().skip(5).limit(5)
//8.
db.restaurants.find( {"grades.score": { $gt: 90 } } ).pretty()
//9.
db.restaurants.find( {"grades.score": { $gt: 80,  $lt: 100 } } ).pretty()
//10.
db.restaurants.find( {"address.coord.0": { $lt:  -95.754168 } })
//11.
db.restaurants.find( { $and: [ {"grades.score": { $gt: 70 } }, { "address.coord.0": { $lt:  -65.754168 } }, {"cuisine": { $ne: "American " } } ] }).pretty()
//12.
db.restaurants.find( {"grades.score": { $gt: 70 } ,  "address.coord.0": { $lt:  -65.754168 } , "cuisine": { $ne: "American " } }).pretty()
//13.
db.restaurants.find( { $and: [ {"grades.grade": { $eq: "A" } }, {"cuisine": { $ne: "American " } }, {"borough":{$ne: "Brooklyn"} } ] }).pretty()
//14.
db.restaurants.find( {"name": /^Wil/ },{ _id: 0, restaurant_id: 1, cuisine: 1, name: 1, borough: 1})
//15.
db.restaurants.find( {"name": /ces$/ },{ _id: 0, restaurant_id: 1, cuisine: 1, name: 1, borough: 1})
//16.
db.restaurants.find( {"name": /.*Reg.*/ },{ _id: 0, restaurant_id: 1, cuisine: 1, name: 1, borough: 1})
//17.
db.restaurants.find( {"borough": "Bronx", $or: [{"cuisine": "American "}, {"cuisine": "Chinese"}  ] } )
