use('ecommerce'

)
// db.products.find()

// db.products.find({category: "Electronics"})


// db.products.find({price:{$gt:1000}})
// db.products.find({price: {$gte: 1000,$lte: 50000}})

//logical operators 

// db.products.find({ $or: [{ category: "ELectronics"} , { stock:{ $lt:50}}]})


//projection

// db.products.find({}, {name: 1, price:1, _id: 0})


//Sorting and Limiting


// this is for pagination to add the page lider at the end of page 'the column with the slider'

// db.products.find().sort({price:-1}).limit(2)


