const express =require ("express")
const mongoose =require("mongoose")
const cors=require("cors")
const app=express()
require("dotenv").config()


const port=process.env.port ||5000
const{create,login}=require("./controllers/User")
const {auth}=require("./middleware/auth")

app.use(express.json())

app.use(cors())

app.post("/signin",create)
app.post("/signup",login)




    mongoose.connect(process.env.MONGO_url)
    
    .then(()=>(
        console.log("db connected successfully")
    ))
    .catch((e)=>(
        console.log("something went wrong",e.message)
    ))

    app.listen(port,()=>{
    console.log(`server is running port number ${port}`)
})