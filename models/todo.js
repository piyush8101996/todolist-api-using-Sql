
module.exports = (sequelize,DataTypes) => {
    const todolist = sequelize.define('todolist',
        {
            // Model attributes are defined here
            title: {
                type: DataTypes.STRING(100),
                
            },
           
       },{
       
        })
        return todolist;
} 
