/**
 * Created by apellitero on 16/05/17.
 */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then( (result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then ((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then ((result) => {
  //   console.log(result);
  // });

  // deleteMany
  db.collection('Users').deleteMany({
    name: 'Xandre'
  }).then( (result) => {
    console.log(result);
  });

  // deleteOne
  db.collection('Users').findOneAndDelete({_id: new ObjectID("591b42868e01c11eb6b45a68")}).then ((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});