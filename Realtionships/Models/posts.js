const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo"); // Fixed the URI format
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async() => {
    let user1 = new User({
        username: "Srinath",
        email: "siddu@gmail.com"
    });

    let post1 = new Post({
        content: "Hello world",
        likes: 7
    })

    post1.user = user1

    await user1.save();
    await post1.save();
}

addData();