const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    text:{type:String,required:true}
})

module.exports = mongoose.Schema('Post',Post)