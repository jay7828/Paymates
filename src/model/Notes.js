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
    totalamt:{
        type:Number,
        require:[true,"Total Amount is Required"]
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
    }

});

module.exports = mongoose.model("Note",noteSchema);