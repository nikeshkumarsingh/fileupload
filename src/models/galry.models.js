const mongoose=require("mongoose");
const galrySchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
            unique:true,
        }   
    },
    {
        versionKey:false,
        timestamps:true,
    }
);
module.exports=mongoose.model("galry",galrySchema);