let Controller = require("./controller");

let student = new Controller();

const express = require('express')
const app = express()

app.get('/student', function (req, res){
    res.setHeader('Content-Type','application/json')
    student.fetchAllData(res)
})

app.get('/student/:id', function (req, res){
    res.setHeader('Content-Type','application/json')
    let id = req.params.id
    student.fetchAllData(res,id)
})

app.listen(8081)




