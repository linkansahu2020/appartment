const mongoose = require("mongoose")

const faltsSchema = new mongoose.Schema(
    {
        id: {type: Number,required: true},
        total_resident: {type:Number,required:true, default: "tenant"},
        resident_type: {type:String,required:true},
        image: {type: String,required: true}
    },{
        versionKey:false,
        timestamps:true
    }
)

module.exports = mongoose.model("falts",faltsSchema)
