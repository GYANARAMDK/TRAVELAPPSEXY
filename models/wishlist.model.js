const mongoose=require('mongoose');

const wishlistschema=new mongoose.Schema({
    hotelID:{type:String,required:true}
})
const Wishlist=mongoose.model('Wishlist',wishlistschema);
module.exports=Wishlist;