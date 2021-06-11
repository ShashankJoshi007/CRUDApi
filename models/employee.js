const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({

    employeeName: {
        type: String,
        required: true
    },
    employeeId: {
        type: Number,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('employee',employeeSchema)