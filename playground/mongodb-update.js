const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) console.log('Unable to connect to MongoDB server');
  
  console.log('Connected to MongoDB server');
  
  db.collection('Users'). findOneAndUpdate({
    _id: new ObjectID('5a946997b0d432e34f9ac85a')
  }, {
    $set: {
      name: "Bob"
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});