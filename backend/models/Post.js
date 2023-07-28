const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    text:{type:String,required:true},
    user:{type:mongoose.Types.ObjectId,ref:'User',required:true}
})

module.exports = mongoose.model('Post',Post)