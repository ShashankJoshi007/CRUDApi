const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost/EmployeeDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

app.use(cors())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
//     next();
//   });

const employeeRouter = require('./routes/employees')
app.use('/employees',employeeRouter)

app.listen(9000, () => {
    console.log('Server started')
})