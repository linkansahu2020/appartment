const Product = require("../models/post.model")

module.exports = (array)=>{
    return async function(req,res,next){
        const user = req.user;

        let isPermited = false;

        array.map((role)=>{
            if(user.roles.includes(role)) isPermited=true
        })

        // let product;
        // let userId;
        // try{
        //     product = await Product.findOne({_id:req.params.id})
        //     userId = product.user.toString();
        // } catch(err){
        //     return res.status(501).send({Message: "Somthing Error"})
        // }

        // if(!isPermited || userId !== user._id) return res.status(501).send({Message: "Permission denied"})
        if(!isPermited) return res.status(501).send({Message: "Permission denied"})

        return next()
    }
}