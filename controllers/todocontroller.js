const db = require("../config/config");
const user=db.todolist


//adding TODOLIST

const addTodo= async (req,res)=>{
    const data={
        title: req.body.title,
       
    }
        
         console.log(req.body)
         user.create(data)
         .then((data)=>{
             res.status(200).send(data)
         })
         .catch((err)=>{
             console.log(err,"........")
         })
      
        console.log(data)
        //await data.save()
       
}
//GET ALL THE TODOLIST
const getTodo=(req,res)=>{
     user.findAll().then((data)=>{
        res.status(200).send(data)
     })
}

//update the todo
const updateTodo=(req,res)=>{
   
    user.update({
        title: req.body.title,
       
    }, { where: { id: req.params.todoid } })
    .then((data)=>{
        res.status(200).send(data)
    })
}


//Delete the todo
const deletTodo=((req,res)=>{
    const id = req.params.todoid
    user.destroy({ where: {id:id } })
    .then(()=>{
        res.status(200).json({
            status: true,
            message: "Todolist deleted successfully with id = " + id
        });
    })
})
module.exports={addTodo,getTodo,updateTodo,deletTodo}