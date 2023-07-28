const epxress = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = epxress()

const PORT = process.env.PORT || 5001
const MONGODB = process.env.MONGODB

app.use(cors())
app.use(epxress.json())

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/posts',require('./routes/postRoutes'))

const start = async()=>{
    try{
        await mongoose.connect(MONGODB)
        .then(()=>console.log('db zbs'))
        .catch(err=>console.log(err))

        app.listen(PORT,(err)=>{
            if(err){
                return console.log('pizdec')
            }
            console.log('zbs')
        })
    }
    catch(err){
        console.log(err)
    }
}

start()