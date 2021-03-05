const mongoose = require('mongoose')
const validator = require('validator')

const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be greater than 0')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid')
      }
    }
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate(value) {
      if (value.includes('password') || value.length < 6) {
        throw new Error('Password is not valid')
      }
    }
  }
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    default: false,
    type: Boolean
  }
})

const task = new Task({
  description: 'Yoga     ',
})

// const me = new User({
//   name: 'Steve',
//   email: 'steve@steve.com',
//   password: '             da'
// })

task.save().then(() => {
  console.log(task)
}).catch(error => {
  console.log(error)
})

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.error(error)
// })