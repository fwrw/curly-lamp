const express = require('express')
const app = express()
app.use(express.json())
const tasks = [
    {
        id: 1,
        title: 'Learn PHP',
        status: 'running',
        priority: '3',
        description: 'Learn PHP and Laravel'
    }
]

app.get('/tasks', (req, res) => {
    res.send('<h1>tasks list</h1>')
})

app.post('/tasks', (req, res) => {
    // tasks.push(req)
    console.log(req.body)
    const newTask = {
        id: req.body.id,
        title: req.body.title,
        status: req.body.status,
        priority: req.body.priority,
        description: req.body.description
    }

    tasks.push(newTask)
    res.send('added new task')
})

app.listen(3000)