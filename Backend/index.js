const express=require('express')
const mongoose=require('mongoose')
const app=express()
const Book=require('./Models/Books.models')
const Router=require('./routes/book.routes.js')


//declaring port and middleware
const port =5000
app.use(express.json())

//conection
mongoose.connect('mongodb://127.0.0.1:27017/BookStore').then(()=>{
    console.log('Connected successfully')
    app.listen(port,()=>{
        console.log(`App listening on port ${port}`)
    })
}).catch((err)=>{console.log(err)})


app.use('/',Router)