const express = require('express');
const PORT = 3000;
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        throw new ExpressError(401, "ACCESS DENIED!");
    }
};


app.get("/", (req, res) => {
    res.send("Hi, I am root."); // Default root response
});

app.get("/api", checkToken, (req, res) => {
    res.send("data"); // Send data if token is valid
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access is Forbidden")
})

app.use((err, req, res, next) => {
    let {status = 400, message = "SOME ERROR"} = err;
    res.status(status).send(message);
});



// app.use( (req, res) => {
//     res.status(404).send("Page not found!");
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});