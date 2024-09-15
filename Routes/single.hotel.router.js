const express=require('express')
const Hotel=require('../models/hotel.model.js')
const router=express.Router()

router.get('/:id',async(req,res)=>{
      
        const {id}=req.params
        try {
        const hotel=await Hotel.findById(id)
        hotel?res.json(hotel):res.status(404).json({message:"something went wrong"})
      } catch (error) {
        res.status(404).json({message:"no hotel found"})
        console.log(error);
      }

})
module.exports=router;