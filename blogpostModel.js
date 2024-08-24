const mongoose = require('mongoose')

const USER_NAME = 'Anurag861';
const PASSWORD = '9557180861';
const DB_NAME = "merndb1";
// const dbURI = `mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.ffwuw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=MernCluster`
mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@merncluster.ffwuw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=MernCluster`)
    .then((res) => console.log('connected to Mongodb'))
    .catch((err) => console.error("could not connnect to mongodb", err));

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }

}, { timestamps: true })

const BlogPost = mongoose.model("blog", BlogPostSchema, "blogposts")

// for (let i = 1; i <= 20; i++) {
//     const newBlog = new BlogPost({
//         title: `title ${i}`,
//         summary: `title${i}`,
//         content: `content${i}`,
//         author: `autho${i}`
//     })
//     newBlog.save()
//         .then((result) => {
//             console.log("saved to the database ")
//         })
//         .catch((err) => {
//             console.log("error is occured", err)
//         })
// }
module.exports = BlogPost;