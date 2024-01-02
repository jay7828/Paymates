const express =require('express');
const router=express.Router();

const Note = require('./../model/Notes');

router.post("/list",async function(req,res){
    const notes = await Note.find({userid : req.body.userid});
    res.json(notes);
});

router.post("/add",async function(req,res){
    
    await Note.deleteOne({id:req.body.id});

    const newNote =new Note({
        id: req.body.id,
        userid: req.body.userid,
        totalamt :req.body.totalamt,
        title: req.body.title,
        dateadded:req.body.dateadded,
        content: req.body.content,
        })

    await newNote.save();
    const response ={message : "New Note Created!" +`is: ${req.body.id}` };
    res.json(response);

})

router.post("/delete",async function(req,res){
    
    await Note.deleteOne({id:req.body.id});
    const response ={message : "Note Deleted!" +`is: ${req.body.id}` };
    res.json(response);

})

module.exports=router;