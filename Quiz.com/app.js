const express = require("express");
const path = require("path");
const dotenv = require("dotenv")
const app = express();

dotenv.config({ path: "./config.env" })
const port = process.env.PORT;
const name = process.env.NAME;
const verificationPassword = process.env.PASSWORD;
const db = require("./db/db")

app.use(express.json())
app.use('/', express.static(__dirname + '/static'));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/views/index.html"))
})

app.get("/signin", (req, res) => {
    res.status(200).sendFile(path.join(__dirname + "/views/signin.html"))
})

app.post("/questions", (req, res) => {
    const { userName, password } = req.body;
    console.log(name, verificationPassword)
    if (userName === name && password === verificationPassword) {
        return res.status(200).json({ message: "Successfully signed in", data: db })
    } else { return res.status(401).json({ message: "Invalid Credentials" }) }
})

app.get("*", (req, res) => res.status(200).redirect("/"))

app.listen(port, () => console.log(`Website has been successfully started on http://127.0.0.1:${port}`))
