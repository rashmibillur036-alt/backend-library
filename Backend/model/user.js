const mongoose=require("mongoose")
const validator=require("validator")
const userSchema = new mongoose.Schema({
    Student_name:{
        type:String,
        required:true
    },
    Student_ID:{
        type:String,
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword){
                throw new Error("password is weak..");
                
            }
        }
    }

})

module.exports=mongoose.model("user",userSchema)