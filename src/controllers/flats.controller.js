const express = require("express")

const router = express.Router()

const Post = require("../models/flats.model")

router.post("",async(req,res)=>{
    try{
        const post = await Post.create(req.body)

        return res.status(201).send(post)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})
// router.put("/:id",authenticate,authorize(["manager"]),async(req,res)=>{
//     try{
//         const post = await Post.findByIdAndUpdate(req.params.id,req.body,{
//             new:true
//         }).lean().exec()

//         return res.status(201).send(post)
//     } catch(err){
//         return res.status(501).send({Error:err.message})
//     }
// })
// router.delete("/:id",authenticate,authorize(["manager"]),async(req,res)=>{
//     try{
//         const post = await Post.findByIdAndDelete(req.params.id)

//         return res.status(201).send(post)
//     } catch(err){
//         return res.status(501).send({Error:err.message})
//     }
// })
router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findOne({_id:req.params.id})

        return res.status(201).send(post)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        let posts;
        if(req.query.resident_type) {
            posts = await Post.find({resident_type:req.query.resident_type}).lean().exec()
        }
        else posts = await Post.find().lean().exec()

        return res.status(201).send(posts)
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
})

module.exports = router;