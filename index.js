const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const tasksRouter = require("./Routes/Routes")
const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

app.listen((port), ()=>{
    console.log(`App Running on the Server ${port}`)
})
app.use("/", tasksRouter)

mongoose.connect(process.env.MONGOOSE_CONNECTION)
.then(()=>{
    console.log("Data Base Connected SuccessFully")
})
.catch((err)=>{
    console.log(err)
})
    //0kL5RMOQplYmKWIJ
