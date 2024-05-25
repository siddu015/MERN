const mysql = require('mysql2');
const express = require("express");
const app = express()
const port = 4000
const path = require("path")
var methodOverride = require( 'method-override')
const {ne, el} = require("@faker-js/faker");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'


app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

const connection = mysql.createConnection({
    host: '127.0.0.1', // Force use of IPv4
    user: 'root',
    database: 'Mern_Stack',
    password: 'pass5678'
});


//Home Route
app.get("/", (req, res) => {
    let query = `SELECT count(*) FROM USER`
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error in database");
        }
        let count = result[0]["count(*)"];
        res.render("home.ejs", { count } );
    });
});


//Show users Route
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

//Edit Route
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let query = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error in database");
        }
        let user = result[0]
        res.render("edit.ejs", { user });
    });
});

//Update Route
app.patch("/users/:id", (req, res) => {
    let { id } =req.params
    let { password: formPass, username: newUsername} = req.body
    let q1 = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q1, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error in database");
        }

        let user = result[0];
        if( formPass !== user.password ) {
            res.send("Wrong Password")
        }
        else {
            q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`
            connection.query(q2, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send("Error in database");
                }
                console.log(result)
                res.redirect("/users")
            })
        }

    });
})

app.get("/users/new", (req, res) => {
    res.render("add.ejs");
})

app.post("/users", (req, res) => {
    let newId = uuidv4();
    let { username: newUsername, email: newEmail, password: newPassword } = req.body;
    let query = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
    connection.query(query, [newId, newUsername, newEmail, newPassword], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error in database");
        }
        res.redirect("/users");
    })
})

app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params
    let query = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error in database");
        }
        let user = result[0]
        res.render("delete.ejs", { user });
    });
})

app.delete("/users/:id", (req, res) => {
    let { id } = req.params
    let { email: formEmail, password: formPass} = req.body
    let q1 = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q1, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error in database");
        }

        let user = result[0];
        if (formEmail !== user.email)
            res.send("Wrong Email")
        else if (formPass !== user.password) {
            res.send("Wrong Password")
        }
        else {
            let q2 = `DELETE FROM user WHERE id = '${id}'`
            connection.query(q2, (err, result) => {
                if (err) {
                    console.log(err);
                    res.send("Error in database");
                }

                console.log("Deleted Successfully")
                res.redirect("/users")
            })
        }


    })

})

app.listen(port, () => {
    console.log(`Port: ${port} is running`)
});

