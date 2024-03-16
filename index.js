import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get("/api",(req,res)=>{
    res.json({message:"we are able to connect the backend"});
});

app.listen(10_000,()=>{
    console.log("listening on 10000");
})