const Post = require('../models/Post')

const addPost = async(req,res)=>{
    try{
        const doc = new Post({
            text:req.body.text,
            user:req.userId
        })

        const post = await doc.save()

        res.json(post)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec addPost'})
    }
}
const getAll = async(req,res)=>{
    try{
        const posts = await Post.find({user:req.userId})

        res.json(posts)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec getAll'})
    }
}
const remove = async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)

        res.json({success:true})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'remove'})
    }
}

const postController = {
    addPost,
    getAll,
    remove
}

module.exports = postController