import mongoose from "mongoose";



const registerSchema = new mongoose.Schema({

name:{ type:String,
      trim:true

},
profilePic:{
    type:String,
},
email:{
    type:String
},
phone:{
    type:Number
},

},{timestamps:true})

export default mongoose.model('user',registerSchema)