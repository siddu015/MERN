const express = require("express")
const  app = express()

let port = 8080

app.listen(port, () => {
    console.log(`Port is listening ${port}`)
})

app.get("/",(req, res) =>  {
    res.send("Basic Response")
    console.log("request recieved")
})
app.get("/apple", (req, res) => {
    let code = "<h1>Apple<h1/><ul><li>Red</li><li>Sweet</li></ul>"
    res.send(code);
});
app.get("/Orange",(req, res) =>  {
    let code = "<h1>Orange<h1/><ul><li>Orange</li><li>Sweet and Salty</li></ul>"
    res.send("Basic Response")
})
app.get("*",(req, res) =>  {
    res.send("There is no Response")
})
app.get("/ig/:username",(req, res) => {
    let { username } = req.params;
    res.send ('This account belongs to @${username}');
});
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q)
        res. send ("No search query");
    res.send(`These are the results for: ${ q }*`);
});
