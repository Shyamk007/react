const express = require ('express');
const router = express.Router();
const boysData = require('../model/TheBoys.js');

router.get('/',(req,res)=>{
    res.send("Welcome to homePage")
});

router.get('/getdata',async(req,res)=>{
    try {
        const savedData = await boysData.find()
        res.json(savedData)
        
    } catch (error) {
        res.json({message:error})
    }
})

router.post('/postdata',async(req,res)=>{
    const post = new boysData({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })

    try {
    const newPost = await post.save();
    res.json(newPost);        
    } catch (error) {
        res.json({message:error})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const deletePost = await boysData.remove({_id:req.params.id});
        res.json(deletePost);
    } catch (error) {
        res.json({message:error})
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const updatePost = await boysData.updateOne({_id:req.params.id},{name:req.body.name,email:req.body.email,password:req.body.password})
        res.json(updatePost)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router;