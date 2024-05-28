const mongoose = require ("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Bavi",
        to: "Siduu",
        msg: "Hi, What's your plans tomorrow",
        created_at: new Date()
    }, {
        from: "Bhanu",
        to: "Rahul",
        msg: "Hi, bsdk",
        created_at: new Date()
    },{
        from: "Tony",
        to: "Steve",
        msg: "Fuck you",
        created_at: new Date()
    },{
        from: "Spider",
        to: "Gwen",
        msg: "Leave me!",
        created_at: new Date()
    }
]

Chat.insertMany(allChats)