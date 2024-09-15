const express=require('express');
const Category = require('../models/category.model');
const router=express.Router();



router.get('/',async (req,res)=>{
    try {
        let categories=await Category.find({})
        res.json(categories)
    } catch (error) {

        console.log(error);
        res.status(404).json({message:"could not find the categories"})
    }
})
module.exports=router;