const express=require("express")
const app=express();
require("dotenv").config();
const dbConnect=require("./config/database");
dbConnect();
app.use(express.json());
const noteRoutes=require("./routes/noteRoutes");
app.use("/api/v1",noteRoutes);
app.get("/",(req,res)=>{
    res.send("📝 Notes App Backend is running!")
});
const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`); 
})