const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter the User name"]
    },
    email:{
        type:String,
        required:[true,"Please add the user email"],
        unique:[true,"Email Already Registered"]
    },
    password:{
        type:String,
        required:[true,"Please enter the password"]
    },
},{timestamps:true}
)

module.exports=mongoose.model("User",userSchema)