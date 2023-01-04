const express=require('express')
const logger=require('morgan') // req,res ال Consoleدا كل وظيفته يعرضلي  ف ال  
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const bookRouter = require('./routers/brouter')
const port=3000
const app=express()
//’’’’’’’’’’’
mongoose.connect('mongodb://localhost:27017/bookAPI')

app.use(logger('dev'))                    // req,res ال Consoleدا كل وظيفته يعرضلي  ف ال 
app.use(bodyParser.urlencoded({extended:true}))    //url encoded
app.use(bodyParser.json())        // بستخدمه ف الحصول ع الداتا middleWare عباره عن  
app.use('/mybooks',bookRouter)

//ثابته
app.get('/',(req,res)=>{
    res.send('Hello My new App')
}).listen(port,()=>console.log(`http://localhost:${port}`))