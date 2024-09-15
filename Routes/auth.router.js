const express=require('express')
const Cryptojs=require('crypto-js')
const jwt=require('jsonwebtoken')
const router=express.Router()



const User=require('../models/user.model')

router.post('/register',async(req,res)=>{
     try {
        const newuser= new User({
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password: Cryptojs.AES.encrypt(req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
        })
        const saveduser=await newuser.save();
        res.status(201).json(saveduser);
     } catch (error) {
        res.status(500).json({message:"error can't create a user something went wrong"})
        console.log(error)
     }
})
router.post('/login',async(req,res)=>{
    let number=req.body.number;
    try {
        const user= await User.findOne({number:req.body.number})
        !user && res.status(401).json({message:"user not found"})
       
        let decodedpassword=Cryptojs.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(Cryptojs.enc.Utf8)
        console.log(decodedpassword)
        decodedpassword!==req.body.password&& res.status(401).json({message:"incorrect password"})
        
        const {password,...rest}=user._doc;
        const accesstoken=jwt.sign({username:user.username},process.env.ACCESS_TOKEN)
        console.log(user._doc);

        res.json({...rest,accesstoken});


    } catch (error) {
        console.log(error)
      }
})
module.exports=router;