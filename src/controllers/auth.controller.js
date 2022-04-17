require("dotenv").config();
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
// const { body, validationResult } = require('express-validator');

const newToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const signup = async (req,res)=>{
    try{
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ Errors: errors.array() });
        // }

        let user = await User.findOne({name:req.body.name}).lean().exec()
    
        if(user) return res.status(500).send({message:"Please try another name"})
    
        user = await User.create(req.body)
    
        const token = newToken(user)
    
        return res.status(201).send({user,token})
    } catch(err){
        return res.status(501).send({Error: err.message})
    }
}

const login = async (req,res)=>{
    try{
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ Errors: "Please provie valid email or password" });
        // }
        
        const user = await User.findOne({name:req.body.name})

        if(!user) return res.status(500).send({message:"Please try another name or password"})

        const match = user.check(req.body.password)

        if(!match) return res.status(500).send({message:"Please try another name or password"})

        const token = newToken(user)
    
        return res.status(201).send({user,token})
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
}

module.exports = {signup,login,newToken}