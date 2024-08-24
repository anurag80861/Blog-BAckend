const express = require("express");
//app
const server = express();
const BlogPost = require("./blogpostModel");
const port = 3099;

const cors = require('cors');
server.use(cors());

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
server.get('/', (req, res) => {
    res.send('Hello world');

});


server.get('/blogs', (req, res) => {
    BlogPost.find().sort({ _id: 1 })
        .then((blogs) => {
            res.send(blogs);
        })
        .catch((err) => {
            res.status(404).send("Error!");
        })
});

server.use(express.json());
server.get('/blogs/id/:id', (req, res) => {
    const blog = req.params.id;
    console.log(blog);
    BlogPost.findById(blog)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(404).send("Error!");
        })

})


server.post('/blogs', (req, res) => {
    const blog = req.body;
    // const newblog=new blogpost(blog);//blog kai ek alag variable mai leh liya hai  or blogpost model hai
    BlogPost.create(blog)
        .then((blog) => {
            res.send("blog save succefuly")
        })
        .catch((err) => {
            res.status(404).send("can not find this id ")
        })

})

server.delete('/blogs/id/:id', (req, res) => {
    const blog = req.params.id
    BlogPost.findByIdAndDelete(blog)
        .then((result) => {
            res.send("blog deleted  successfuly")
        })
        .catch((err) => {
            res.status(404).send("can not delete blog")
        })

})

