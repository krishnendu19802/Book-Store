const express=require('express')
const mongoose=require('mongoose')
const app=express()
const Book=require('./Models/Books.models')
const Router=require('./routes/book.routes.js')
const cors=require('cors')
require('dotenv').config();
const url=process.env.url


//declaring port and middleware
const port =5000
app.use(cors())
app.use(express.json())

//conection
mongoose.connect(`${url}`).then(()=>{
    console.log('Connected successfully')
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`)
    })
}).catch((err)=>{console.log(err)})


app.use('/',Router)