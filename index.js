import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ['https://ecomm-fe.onrender.com',"https://everybody-sheet.codedamn.app"]
}));

app.get("/api",(req,res)=>{

    res.json({message:"we are able to connect the backend"});
});
app.post("/api",(req,res)=>{
    
})

app.listen(10_000,()=>{
    console.log("listening on 10000");
})