const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Books = require('./app/routes/book.routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

const db = require('./app/models/Index')
db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then((result) => {
        console.log(`Database Connected`)
    }).catch((err) => {
        console.log(`Cannot Connect to Database`, err)
        process.exit()
    });

app.get('/', (req, res) => {
    res.send(`selamat datang`)
})

app.use('/books', Books);

const PORT = process.env.PORT || 8000

app.listen(PORT, ()  =>{
    console.log(`server is running on http://localhost:${PORT}`)
})