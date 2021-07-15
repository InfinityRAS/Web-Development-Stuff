const express = require("express");
const path = require('path');
const app = express();
const port = 90;
const fs = require('fs');

app.use('/static', express.static('static'));
app.use(express.urlencoded())

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})

app.post('/', (req, res)=>{
    let mesg = {
        "content": "Your form has been submitted Successfully, We will Contact you soon.."
    }
    let name = req.body.name;
    let contact_no1 = req.body.contact_no1;
    let contact_no2 = req.body.contact_no2;
    let help = req.body.help;
    let issue = req.body.Issue;
    let email = req.body.email;
    let OutPutToBeWritten = `The name of the Client is ${name}, the contact number of the Client is ${contact_no1}, the second contact number of the Client is ${contact_no2}, The help Client is asking for is ${help}, the email of the Client is ${email} and the Issue of the Client is ${issue} \n \n`;
    fs.appendFileSync('complains.txt', OutPutToBeWritten, "UTF-8",{'flags': 'a+'});
    res.status(200).render('submit.pug', mesg);
})

app.listen(port, ()=>{
    console.log(`The App has been succesfully started on port ${port}`);
})