 const express=require('express')
 const router=express.Router();
 router.use(express.json())
 router.use(express.urlencoded({extended:true}))
 const userModel=require('../model/userModel');
 require('../db/connection')

    router.get('/view',async (req,res)=>{
     try{
         const users=await userModel.find();
         res.status(200).json(users);

             }
    catch{
         res.status(500).json({message:"error occured"})
 }
})
module.exports= router;