const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PORT = 5000
const app = express()
const data = require("./MOCK_DATA.json");

console.log(data)

app.use(morgan('dev'))
app.use(cors())

app.get('/api', (req, res) => {
    res.json(data)
})


app.listen(PORT, ()=> {
    console.log("The server is running on PORT: " + PORT)
})