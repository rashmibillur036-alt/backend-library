const User=require("../model/user")
const bcrypt=require("bcrypt")
require("dotenv").config
const jwt=require("jsonwebtoken")

const create=async (req,res) => {
    try{  
        const{Student_name,Student_ID,password}=req.body;
        const hashpassword=await bcrypt.hash(password,12);
        
        const data=await User.create({Student_name,Student_ID,password:hashpassword});
        res.json({
            message:`${data.Student_name} account created successfully`
        });
    } catch (e) {
        res.status(401).send(e.message)
    }
    
}

const login=async (req,res) => {
    try{
        const{Student_ID,password}=req.body;
        const checkuser=await
        User.findOne({Student_ID});
        if(!checkuser){
            return res.status(401).send("Student_ID is not found")
        }


        const passwordCheck=await bcrypt.compare(password,checkuser.password);
        if(!passwordCheck){
            return res.status(401).send("password is invalid")
        }

        const token=await jwt.sign({id:checkuser._id},process.env.key,{expiresIn:"10d"})
        res.json({
            message:"Login successfully",
            token
        })
    }catch(error){
        res.status(401).send(error.message);
    }
    
}

module.exports={create,login}