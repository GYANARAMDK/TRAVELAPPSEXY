const express=require('express')
const mongoose  = require('mongoose');
const connectdb=require('./config/dconfig');
const cors =require('cors');

const hotelrouter=require('./Routes/hotes.router.js')
const categoryrouter=require('./Routes/category.router.js')
const hoteldataaddedtodb=require('./Routes/dataimport.router.js')
const categoriesaddedtodb=require('./Routes/categoryimport.router.js')
const singlehotelrouter=require('./Routes/single.hotel.router.js')
const authrouter=require('./Routes/auth.router.js')
const wishlistrouter=require('./Routes/wishlist.router.js')
const app=express();

app.use(express.json());
connectdb();

const PORT=5000;

app.get('/',(req,res)=>{
    res.send("hello dosto")
})


app.use('/api/hoteldata',hoteldataaddedtodb); //data added to db from hotels.js file and send to server
app.use('/api/categories',categoriesaddedtodb);//categories added to db from category.js file and send to server
app.use('/api/hotels',hotelrouter)//localhost:5000/api/hotels //get hotel data without adding to database sending from database
app.use('/api/category',categoryrouter);//category is finded from db and send to server
app.use('/api/hotels',singlehotelrouter)
app.use('/api/auth',authrouter);//localhost:5000/api/auth/register user can sign up and data will go in database
app.use('/api/wishlist',wishlistrouter);//localhost:5000/api/wishlist





mongoose.connection.once("open",()=>{
    console.log("connected to database")
    app.listen(process.env.PORT||PORT ,()=>{
        console.log("server is successfully running");
    })
})
