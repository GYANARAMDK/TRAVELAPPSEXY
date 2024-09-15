const express=require('express')
const router=express.Router();


const Category=require('../models/category.model.js')
const categories=require('../data/category.js')


router.post('/',async (req,res)=>{
    try {
        await Category.deleteMany()
        const categoriesInDB= await Category.insertMany(categories.data);
        res.json(categoriesInDB);
    } catch (error) {
        console.log(error)
        res.json({message:"could not load the categories to db"})
    }
})
module.exports=router;
