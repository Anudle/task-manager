const mongodb = require('mongodb')
const { MongoClient, ObjectID } = mongodb;

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
const USERS = 'users'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database')
  }
  const db = client.db(databaseName)

  db.collection('task').deleteOne({
    _id: new ObjectID('603fcd047a6cce5f2fdc1e45')
  }).then(result => {
    console.log(result)
  }).catch(error => {
    console.log(error)
  })
})  


// db.collection(USERS).deleteMany({
//   age: 37
// }).then(result => {
//   console.log(result)
// }).catch(error => {
//   console.log(error)
// })

//UPDATE
// db.collection('task').updateMany({
//   completed: false
// }, {
//   $set: {
//     completed: true
//   }
// }).then(result => {
//   console.log(result)
// }).catch(error => {
//   console.log(error)
// })
// db.collection(USERS).updateOne({
//   _id: new ObjectID('603fcc23b532665ddc6b1b07')
// }, {
//   $inc: {
//     age: 1
//   }
// }).then((result) => {
//   console.log(result)
// }).catch(error => {
//   console.log(error)
// }) 


//READ
// db.collection('task').findOne({_id: ObjectID("603fcd047a6cce5f2fdc1e45")}, (error, response) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(response)
// })
// db.collection('task').find({completed: false}).toArray((error, response) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(response)
// })

// db.collection('users').findOne({_id: ObjectID("603fcc23b532665ddc6b1b07")}, (error, response) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(response)
// })

// db.collection('users').find({ age: 28}).count((error, response) => {
//   if (error) {
//     console.log(error)
//   }
//   console.log(response)
// })  



//CREATE
// db.collection('users').insertOne({
//   _id: id,
//   name: 'James Bond',
//   age: 37
// }, (error, result) => {
//   if (error) {
//     return console.log('unable to do thing')
//   }
// })
// db.collection('task').insertMany([
//   {
//     description: 'play fetch',
//     completed: false
//   },
//   {
//     description: 'Yoga',
//     completed: false
//   },
//   {
//     description: 'Leet code',
//     completed: true
//   }
// ], (error, result) => {
//   if (error) {
//     console.log('you messed up')
//   }
//   console.log(result.ops)
// })

