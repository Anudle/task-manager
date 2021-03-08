const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', (req, res) => {
  const user = new User(req.body)
  user.save().then(() => {
    res.statu(201).send(user)
  }).catch(e => {
    res.status(400).send()
    console.log(e)
  })
})

app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch(e => {
    res.status(500).send()
  })
})

app.get('/users/:id', (req, res) => {
  const _id = req.params.id
  User.findById(_id).then((user) => {
    if (!user) {
      return res.status(404).send()
    }
    res.status(201).send(user)
  }).catch(e => {
   res.status(500).send()
  })
})

app.post('/task', (req, res) => {
  const task = new Task(req.body)
  task.save().then(() => {
    res.status(201).send(task)
  }).catch(e => {
    res.status(400).send()
    console.log(e)
  })
})

app.get('/task/:id', (req, res) => {
  const _id = req.params.id
  Task.findById(_id).then(task => {
    if (!task) {
      return res.status(404).send()
    } 
    res.status(201).send(task)
  }).catch(e => {
    res.status(500).send(e)
  })
})

app.get('/task', (req, res) => {
  Task.find({}).then(tasks => {
    res.send(tasks)
  }).catch(e => {
    res.status(500).send()
  })
})

app.listen(port, () =>{
  console.log('listening in ', port)
})