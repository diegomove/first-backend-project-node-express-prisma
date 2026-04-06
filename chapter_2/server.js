const express = require('express')
const app = express()
const PORT = 3000

let data = [
    "John"
]

//middleware to parse JSON bodies
app.use(express.json())

//Web endpoints

app.get('/', (req, res) => {
    console.log('Hello world', req.method)
    res.send(`
        <body style="background:pink; color:blue">
            <h1>Data:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Go to Dashboard</a>
        </body>
        `)
})

app.get('/dashboard', (req,res) => {
    console.log('Welcome to the dashboard')
    res.send(`
                <h1>Dashboard Test</h1>
             <a href="/">Go back to Home</a>`)
    
})

//API endpoints

app.get('/api/data', (req, res) => {
    console.log('Data endpoint hit')
    res.send(data)
})

//POST endpoint to update data

app.post('/api/data', (req, res) => {
    const newData = req.body
    console.log(newData)
    data.push(newData.name)
    res.sendStatus(201)
})

//DELETE endpoint to clear data

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('Data cleared')
    res.sendStatus(204)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))