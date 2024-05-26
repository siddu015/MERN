const mongoose = require ("mongoose");

main()
    .then(() => {
            console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const User = mongoose.model("User", userSchema);


// User.updateMany({ age: { $gt: 45 } }, { age: 45 })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

User.deleteOne({ name: "Siddu" })
    .then((res) => console.log(res))

// User.findById("6652d0ac70945027c25a0092")
//     .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
// })
