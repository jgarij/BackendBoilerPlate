import express from "express";
const router = express.Router();
import User from "../models/UserModel.js";

router.post("/users",async(req,res)=>{
    try{
       console.log(req.body);   
        const user= await User.create(req.body);
        return res.status(201).json({message:"User created successfully"});
    }
    catch(e){
   res.status(500).json({error:"Failed to create user"});
    }
})

router.get("/users",async(req,res)=>{
    try{

        const users= await User.find();
        console.log("users",users);
        return res.status(200).json(users);
    }   
    
    catch(error){
        res.status(500).json({error:"Failed to get users"});
    }
})


export default router;       
