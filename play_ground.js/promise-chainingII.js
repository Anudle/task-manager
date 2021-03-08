require('../src/db/mongoose')
const Task = require('../src/models/task')

//6042a0b1a48c70deecf59052

Task.findByIdAndDelete('604681ca11f9256faa93f39d').then((task) => {
  console.log(task)
  return Task.countDocuments({completed: false })
}).then(result => {
  console.log(result)
}).catch(e => {
  console.log(e)
})

