const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=async(req,res,next)=>{
    try {
        const token=req.headers.authorization;
        if(!token){
            return res.status(401).send("Token is not found")
        }

        const tokencheck=await jwt.verify(token,process.env.key)
        if(!tokencheck){
            return res.status(401).send("Token is invalid");
        }

        next()

    } catch (error) {
        res.status(401).send(error.message)
    }

}

 module.exports={auth}