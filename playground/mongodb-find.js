const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) console.log('Unable to connect to MongoDB server');
  
  console.log('Connected to MongoDB server');
  
  db.collection('Todos').find({ completed: false }).toArray()
  .then((documents) => {
    console.log(JSON.stringify(documents, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });
});