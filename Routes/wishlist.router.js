const express=require('express');
const verifyUser=require('../middleware/verifyuser.js')
const Wishlist=require('../models/wishlist.model.js')

const router=express.Router();



router.post('/',async(req,res)=>{
    const newwishlist=new Wishlist(req.body);
    try {
        const savedwishlist=await newwishlist.save();
        res.status(201).json(savedwishlist)
    } catch (error) {
        res.status(500).json({message:"failed to add in wishlist"})
    }

})
router.delete('/:id',verifyUser,async(req,res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id)//https//localhost:portnu./api/wishlist?id="  something"
        res.json({message:"hotel removed from wishlist"})
    } catch (error) {
        res.status(500).json({message:"could not delete the wishlist"})
    }
})
router.get('/',async(req,res)=>{
    try {
        const wishlist=await Wishlist.find({})
        wishlist?res.json(wishlist):res.json({message:"no item added to fourite"})
    } catch (error) {
        cosnole.log(error)
    }
})


module.exports=router;