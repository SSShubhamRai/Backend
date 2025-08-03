//import model
const Todo=require("../models/Todo")

exports.createTodo=async(req,res)=>{
    try{
       //extract title and desc from req body
       const{title,description}=req.body;
       //create a new Todo object and insert in DB
       const response=await Todo.create({title,description});
       //send a json response with a succes flag
       res.status(200).json(
        {
            success:true,
            data:response,
            message:'entry created sucesfully'
        }
       );
    }
    catch(err){
        console.error(err)
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}