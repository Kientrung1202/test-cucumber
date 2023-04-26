const express = require('express')
const cors = require("cors")
const bp = require('body-parser')
const app = express()
const films = require('./data/films')
const users = require('./data/users')

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    const user = users.find(user => user.username == username)
    if (user && user.password == password) res.send(user.name)
    else {
        res.status(401).send('failed')
    }
})
app.get('/films/:id', (req, res) => {
    const id = req.params.id
    const film = films.find(film => film.id == id)
    if (film) {
        res.json(film)
    } else {
        res.status(404).send('failed')
    }
})
// by category
app.get('/films', (req, res) => {
    const category = req.query.category
    let filteredFilms = films
    if (category) {
        filteredFilms = films.filter(film => film.category.toLowerCase() === category.toLowerCase())
    }
    res.json(filteredFilms)
})



app.listen(8000, () => {
    console.log('Server listening on port 8000')
})
