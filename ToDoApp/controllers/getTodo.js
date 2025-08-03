const Todo=require("../models/Todo");
exports.getTodo=async(req,res)=>{
    try{
        //fecth all todo item from database
        const todos=await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data feteched"
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        });
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //fecth all todo item from database
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        if(!todo){
            return res.status(404).json({
               success:false,
               message:"No data found with given id", 
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data succefully fetched`
        })

        
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        });
    }
}




