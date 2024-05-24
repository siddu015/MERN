const mysql = require('mysql2');
const express = require("express");
const app = express()
const port = 4000
const path = require("path")


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

const connection = mysql.createConnection({
    host: '127.0.0.1', // Force use of IPv4
    user: 'root',
    database: 'Mern_Stack',
    password: 'pass5678'
});

app.get("/", (req, res) => {
    let query = `SELECT count(*) FROM USER`
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error in database");
        }
        let count = result[0]["count(*"];
        res.render("home.ejs", { count });
    });
});

app.get("/users", (req, res) => {
    let query = `SELECT * FROM USER`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error in database");
        }
        res.render("users.ejs", { users: result });
    });
});

app.listen(port, () => {
    console.log(`Port: ${port} is running`)
});

