require('../src/db/mongoose')
const Task = require('../src/models/task')
const User = require('../src/models/user')

//6042a0b1a48c70deecf59052

// Task.findByIdAndDelete('604681ca11f9256faa93f39d').then((task) => {
//   console.log(task)
//   return Task.countDocuments({completed: false })
// }).then(result => {
//   console.log(result)
// }).catch(e => {
//   console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//   console.log()
//   const user = await User.findByIdAndUpdate(id, { age })
//   const count = await User.countDocuments({ age })
//   return count
// }

// updateAgeAndCount('604681ca11f9256faa93f39d', 0).then(count => {
//   console.log(count)
// }).catch(e => {
//   console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count 
}

deleteTaskAndCount('6049422bca159d614a3db1a4').then(count => {
  console.log(count)
}).catch(e => {
  console.log(e)
})