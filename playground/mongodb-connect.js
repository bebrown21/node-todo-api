const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) console.log('Unable to connect to MongoDB server');
  
  console.log('Connected to MongoDB server');
  
  db.collection('Todos').insertOne({
    text: 'do something',
    completed: false
  }, (error, result) => {
    if (error) console.log('Unable to insert todo');
    
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  
  db.close();
});