require('../src/db/mongoose')
const User = require('../src/models/user')

//6042a0b1a48c70deecf59052

User.findByIdAndUpdate('6042a0b1a48c70deecf59052', {age: 1}).then((user) => {
  console.log(user)
  return User.countDocuments({age: 1 })
}).then(result => {
  console.log(result)
}).catch(e => {
  console.log(e)
})

