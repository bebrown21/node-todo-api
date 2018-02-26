const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) console.log('Unable to connect to MongoDB server');
  
  console.log('Connected to MongoDB server');
  
  //deleteMany
  db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
    console.log(result);
  });
  
  //deleteOne
  db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
    console.log(result);
  });
  
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });
});