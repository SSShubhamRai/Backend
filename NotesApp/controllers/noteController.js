const Note=require("../models/Note");

//create Note
exports.createNote=async(req,res)=>{
    try{
        const{title,content,category}=req.body;
        const note=await Note.create({title,content,category});
        res.status(201).json({success:true,data:note,message:"Note created"});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
};

exports.getAllNotes=async(req,res)=>{
    try{
        const notes=await Note.find({});
        res.status(200).json({success:true,data:notes});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
};

//get note by ID
exports.getNoteById=async(req,res)=>{
    try{
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json({success:false,message:"Note not found"});
        res.status(200).json({success:true,data:note});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
};

//upadte note
exports.updateNote=async (req,res)=>{
    try{
        const note=await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({success:true,data:note,message:"Note updated"});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}

//delete note
exports.deleteNote=async(req,res)=>{
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true,message:"Note deleted"});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message});
    }
}