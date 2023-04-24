const mongoose = require("mongoose");
const tasksSchema = mongoose.Schema({
    title:{
        type: String,
    },
    is_completed:{
        type:Boolean
    }
})
module.exports = mongoose.model("tasks", tasksSchema)