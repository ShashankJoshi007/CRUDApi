const { default: axios } = require('axios');
const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')


//External API call happens here 

//Open chrome browser and type localhost:3000/employees

router.get('/', async (req, res) => {
    try {
        let employees = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(employees.data)
        res.send(employees.data)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    const employee = new Employee({
        employeeName: req.body.employeeName,
        employeeId: req.body.employeeId,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        phone: req.body.phone,
        designation: req.body.designation,
        address: req.body.address
    })

    try {
        let emp = await employee.save()
        const result = {
            status: 'Saved',
            message: 'Details saved successfully',
            data: emp
        }
        res.send(result)
    } catch (err) {
        res.send('Error')
    }
})

router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        employee.employeeName = req.body.employeeName
        employee.employeeId = req.body.employeeId
        employee.dateOfBirth = req.body.dateOfBirth
        employee.gender = req.body.gender
        employee.phone = req.body.phone
        employee.designation = req.body.designation
        employee.address = req.body.address
        employee.save()
        const result = {
            status: 'Updated',
            message: 'Details updated successfully'
        }
        res.send(result)
    } catch (err) {
        res.send('Error')
    }

})


router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        employee.deleteOne()
        const employeeList = await Employee.find()
        res.json(employeeList)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router