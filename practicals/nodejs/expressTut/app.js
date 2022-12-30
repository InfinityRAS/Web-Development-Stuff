const express = require("express");
const path = require("path")
const app = express()
const port = 80;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/static", express.static("static"))
app.use(express.urlencoded())

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    // console.log(req.url)
    res.status(200).render("index.pug")
})

app.post("/submit", (req, res) => {
    const { name, mobile, address, desc } = req.body;
    // console.log(name, mobile, address, desc)
    if (!name || !mobile || !address || !desc) {
        res.status(406).render("submit.pug", { text: "All entries are required", author: "God", url: "/contact", urlText: "Go back to contact page" })
    } else {
        res.status(200).render("submit.pug", { text: "The data is successfully been submitted", author: "God", url: "/", urlText: "Go back to home page"})
    }

    // console.log(req.body)
})

app.get("/contact", (req, res) => {
    res.status(200).render("contact.pug")
})

app.listen(port, () => console.log(`Server has been started at http://127.0.0.1:${port}`));
