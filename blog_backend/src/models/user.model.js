import mongoose,{Schema} from "mongoose";

const userSchema =new Schema({
username:{
    type:String,
    required:true,
    unique:true,
    lowecase:true,
    trim:true,
    index:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowecase:true,
},
fullname:{
    type:String,
    required:true,
},
avatar:{
    type:String,
},
password:{
    type:String,
    required:true,
}
})

export const User = mongoose.model("User",userSchema)