require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f81e90efd5edc1f28b00549').then((task) => {
// console.log(task)
// return Task.countDocuments({ completed: false})
// }).then((result) => {
//    console.log(result) 
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
const task = await Task.findByIdAndDelete(id)
const count = await Task.countDocuments({completed: false})
return count
}

deleteTaskAndCount('5f81e757c0f1a312ec539ca2').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})