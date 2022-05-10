const { Route } = require('express')
const express=require('express')
const router=express.Router()
const todocontroller=require('../controllers/todocontroller')


router.post('/addtodo',todocontroller.addTodo)
router.get('/todolist',todocontroller.getTodo)
router.put('/update/:todoid',todocontroller.updateTodo)
router.delete('/delete/:todoid',todocontroller.deletTodo)

module.exports=router;