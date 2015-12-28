const express = require('express');
const router = express.Router();
const postService = require('../services/postService');


router.get('/post', (req, res) => {
    postService.getPosts().then(function(posts){
        res.json(posts);
    }).catch(function(){
        res.statusCode(500);
        res.status(500).send('Server error');
    });
});

router.get('/post/id/:id', (req, res) => {
    postService.getById(req.params.id).then(function(post){
       if(post){
            res.json(post);
       } else{
           res.status(404).send(`post not found for id ${req.params.id}`);
       }
    }).catch(function(){
        res.status(500).send('Server error');
    });
});



module.exports = router;
