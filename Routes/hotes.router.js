const express=require('express')
const router=express.Router();

const Hotel=require('../models/hotel.model')

router.get('/',async (req,res)=>{
    const hotelcategory=req.query.category;
    try {
        let hotels;
        if(hotelcategory)
        {
            hotels=Hotel.find({category:hotelcategory})
            hotels?res.json(hotels):res.status(404).json({message:"no data found"})
        }else{
            hotels=await Hotel.find({});
            hotels?res.json(hotels):res.status(404).json({message:"no data found"})
    
        }  
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;