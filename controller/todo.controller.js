const Todo = require("../models/todo.model.js");

const getTodo = async(req, res) =>{
   
        try{
            const todos = await Todo.find({});
            res.status(200).json(todos);
        }catch(error){
            res.status(500).json({message: error.message});
        }  
}
const getTodoByIp = async(req, res) =>{
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id);
        res.status(200).json(todo);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}
const postTodo = async(req,res) =>{
    try{
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);
     
    }catch(error){
        res.status(500).json({message: error.message});
    
    }
}
const patchTodo = async (req, res) =>{
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        if(!todo){
            return res.status(404).json({message: "Not found"});
        }
        const updatedTodo = await Todo.findById(id);
        res.status(200).json(updatedTodo);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
const deleteTodo = async (req, res) =>{
    try{
        const{id} = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({message: "Not found"});
        }
        res.status(200).json({message: "Deleted"});

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getTodo,
    getTodoByIp,
    postTodo,
    patchTodo,
    deleteTodo
};