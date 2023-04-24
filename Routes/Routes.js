const express = require("express");
const tasksSchema = require("../Model/Schema");

const router = express.Router();
router.use(express.json());

//post 
router.post("/POST/v1/tasks", async(req,res)=>{
    try{
        const tasks = await tasksSchema.create(req.body);
        res.status(201).send({id:tasks._id})
    }
    catch(err){
        res.status(400).send(err)
    }
})

// get all tasks
router.get("/GET/v1/tasks", async(req,res)=>{
    try{
        const tasks = await tasksSchema.find()
        res.status(201).send({tasks:tasks})
    }
    catch(err){
        res.status(400).send(err)
    }
})

// get single tasks
router.get("/GET/v1/tasks/:id", async(req,res)=>{
    try{
        const tasks = await tasksSchema.find({_id:req.params.id})
        res.status(201).send(tasks)
    }
    catch(err){
        res.status(400).send({error:"There is no task at that id"})
    }
})

// delete a particular Task
router.delete("/DELETE/v1/tasks/:id", async(req,res)=>{
    try{
        const tasks = await tasksSchema.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }
    catch(err){
        res.status(400).send({error:"There is no task at that id"})
    }
})

// update a task
router.put("/PUT/v1/tasks/:id", async(req,res)=>{
    try{
        const tasks = await tasksSchema.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(204).send()
    }
    catch(err){
        res.status(400).send({error:"There is no task at that id"})
    }
})

//bulk posts

router.post("/POST/v1/tasks", async(req,res)=>{
    try{
        const tasks = await tasksSchema.createCollection(req.body);
        res.status(201).send({tasks:tasks._id})
    }
    catch(err){
        res.status(400).send(err)
    }
})

// Delete Bulks
router.delete("/DELETE/v1/tasks", async(req,res)=>{
    try{
        const tasks = await tasksSchema.deleteMany(req.params.id,req.body)
        res.status(204).send()
    }
    catch(err){
        res.status(400).send({error:"There is no task at that id"})
    }
})
module.exports = router;