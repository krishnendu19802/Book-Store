const express=require('express')
const router=express.Router()
const Book=require('../Models/Books.models.js')

//routes
//all books
router.get('/',async(req,res)=>{
    try {
        const books=await Book.find({})
        res.send(books)
        
    } catch (error) {
        res.status(400).send('Bad Querry')
    }
})

//get particular book
router.get('/:id',async(req,res)=>{
    const {id}=req.params
    try {
        const found_book=await Book.findById(id)
        res.send(found_book)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

//add new books
router.post('/addbook',async(req,res)=>{
    const book=req.body
    try {
        const created_book=await Book.create(book)
        res.send(created_book)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

//update existing books
router.put('/updatebook/:id',async(req,res)=>{
    const {id}=req.params
    const book=req.body
    try {
        await Book.findByIdAndUpdate(id,book)
        const created_book= await Book.findById(id)
        res.send(created_book)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete existing books
router.delete('/deletebook/:id',async(req,res)=>{
    const {id}=req.params
    
    try {
        await Book.findByIdAndDelete(id)
        const books= await Book.find({})
        res.send(books)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router