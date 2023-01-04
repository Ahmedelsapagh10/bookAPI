const express=require('express')
const bookRouter=express.Router()
const Book=require('../modules/model')
bookRouter.route('/').get((req,res)=>{
    Book.find({},(err,book)=>{
        if(err){
            res.status(404).json({msg:'Not Found Any Books'})
        }
        res.json(book)
    })
}).post((req,res)=>{
    let books=new Book(req.body)
    books.save()
    res.status(201).json(books)
})
bookRouter.route('/:bookId').put(
    (req,res)=>{
        Book.findById(req.params.bookId ,(err,book)=>{
            book.title=req.body.title
            book.author=req.body.author
            book.save()
            res.json(book)
        })
    }
).delete((req,res)=>{
    Book.findById(req.params.bookId,(err ,book)=>{
    book.remove(err=>{
        if(err){res.status(500).send(err)}  
    res.status(204).send('Removed')}
    )
    })
})


module.exports=bookRouter