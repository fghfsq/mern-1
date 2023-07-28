const addPost = async(req,res)=>{
    try{
        res.status(200).json({message:'addPost'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec addPost'})
    }
}
const getAll = async(req,res)=>{
    try{
        res.status(200).json({message:'getAll'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'pizdec getAll'})
    }
}
const update = async(req,res)=>{
    try{
        res.status(200).json({message:`update ${req.params.id}`})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'update'})
    }
}
const remove = async(req,res)=>{
    try{
        res.status(200).json({message:`remove ${req.params.id}`})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:'remove'})
    }
}

const postController = {
    addPost,
    getAll,
    update,
    remove
}

module.exports = postController