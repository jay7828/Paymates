//Shechma

const mongoose =require('mongoose');

const noteSchema = mongoose.Schema({
    id :{
        type:String,
        unique:true,
        required:[true,'Please provide an ID']
    },
    userid :{
        type:String,
        required:[true,"User Id can't be blank"]
    },
    title:{
        type:Number,
        require:[true,"Title is required"]
    },
    content:{
        type: String,  
    },
    dateadded:{
        type:Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Note",noteSchema);