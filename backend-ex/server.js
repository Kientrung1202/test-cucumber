const express = require('express')
const cors = require("cors")
const bp = require('body-parser')

const app = express()

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.post('/login', (req, res) => {
    console.log(req.body)

    const { username, password } = req.body
    if (username == 'admin' && password == 'admin') {
        res.send('ok')
    } else {
        res.status(401).send('wrong')
    }
})

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})
