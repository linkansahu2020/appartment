const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        type: {type:String,required:true, default: "tenant"},
        block: {type:String,required:true},
        no: {type: Number,required: true},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true
        }
    },{
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model("posts",postSchema)