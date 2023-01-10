const http = require("http")
const port = 80
const fs = require("fs")

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/getData") {
        fs.readFile("data.json", (err, data) => {
            if (err) throw err;
            // console.log(data)
            res.end(data)
        })
    }   else {
        res.end(url)
    }
})

server.listen(port, () => {
    console.log(`Server successfully started at: localhost:${port}`)
})
