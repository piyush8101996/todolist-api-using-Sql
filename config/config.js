const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'piyush1996', {
  host: 'localhost',
  dialect:'mysql'
})

sequelize.authenticate()
.then(()=>{
  console.log("connected to database")
})
.catch((err)=>{
  console.log("Error",err)
})

const db={}
db.Sequelize=Sequelize;
db.sequelize=sequelize
db.todolist=require('../models/todo')(sequelize,DataTypes)
db.sequelize.sync( )
.then(()=>{
  console.log("model is created")
})
  module.exports=db