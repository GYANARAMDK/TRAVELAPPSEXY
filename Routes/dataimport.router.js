const express=require('express')
const router=express.Router();


const Hotel=require('../models/hotel.model.js')
const hotels=require('../data/hotels.js')


router.post('/',async (req,res)=>{
    try {
        await Hotel.deleteMany()
        const HotelInDB= await Hotel.insertMany(hotels.data);
        res.json(HotelInDB);
    } catch (error) {
        console.log(error)
        res.json({message:"could not load the data to db"})
    }
})
module.exports=router;