const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:100,
    },
    content:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        default:"General",
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});
module.exports=mongoose.model("Note",noteSchema)