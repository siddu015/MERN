const express = require("express")
const app = express()
const port = 8080
const mongoose = require ("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")
var methodOverride = require( 'method-override')


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))



main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(port, () => {
    console.log(`Port: ${port} is listening`)
})

app.get("/", (req, res) => {
    res.send("Working fine")
})

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", {chats})
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

app.post("/chats", async(req, res) => {
    let {from, to , msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })

    newChat
        .save()
        .then(res => console.log("Chat was Saved"))
        .catch(err => console.log(err) )

    res.redirect("/chats")
})

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params

    try {
        const chat = await Chat.findById(id);

        res.render("edit.ejs", { chat });
    } catch (err) {
        console.error("Error fetching chat:", err);
        res.status(500).send("Server error");
    }
});

app.patch("/chats/:id", async (req, res) => {
    let { id } = req.params
    let { msg } = req.body

    Chat
        .findByIdAndUpdate(id, { msg: msg }, { new: true, runValidators: true })
        .then((data) => console.log("Successfully updated"))
        .catch((err) => console.log(err));

    res.redirect("/chats")
})

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params

    let deletedChat = Chat
        .findByIdAndDelete(id)
        .then((data) => console.log("Successfully Deleted"))
        .catch((err) => console.log(err));

    console.log(deletedChat)

    res.redirect("/chats")
})