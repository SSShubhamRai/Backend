const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();

const PORT=process.env.PORT||4000;
//middlware to parse json request body
app.use(express.json());

//import routes for Todo api
const todoRoutes=require("./routes/todo")
//mount the todo ASPI routes
app.use("/api/v1",todoRoutes);
//satrt server
app.listen(PORT,()=>{
    console.log(`Serever started sucessfully at ${PORT}`);
})

//conneect to db
const dbConnect=require("./config/database");
dbConnect();

//deafult route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE baby....</h1>`)
})