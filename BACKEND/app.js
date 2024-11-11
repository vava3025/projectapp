const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const app= new express()
app.use(morgan('dev'));
app.use(cors())
//userRoutes
const userRoutes=require('./routes/userRoutes')
app.use('/user', userRoutes)
//productRoutes
const productRoutes=require('./routes/productRoutes')
app.use('/products', productRoutes)
//cartRoutes
const cartRoutes=require('./routes/cartRoutes')
app.use('/cart' , cartRoutes)
//orderRoutes
const orderRoutes=require('./routes/orderRoutes')
app.use('/order',orderRoutes)

const loginRoutes=require('./routes/loginRoutes')
app.use('/login',loginRoutes)
const searchRoutes=require('./routes/searchRoutes')
app.use('/searchs',searchRoutes)

require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');



app.listen(PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
})