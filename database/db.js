import mongoose from "mongoose";


let connectDB = async ()=>{
    try{
        mongoose.connect(process.env.URI)
        console.log('Mongobd connected');
    }
    catch(err){
        console.log(err.message);
    }
}
export default connectDB