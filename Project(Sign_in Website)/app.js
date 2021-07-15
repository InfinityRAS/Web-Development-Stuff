const express = require("express");
const path = require('path');
const app = express();
const port = 80;
const fs = require('fs');
const localhost = '127.0.0.1';

app.use('/static', express.static('static'));
app.use(express.urlencoded())

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
})

app.post('/contact/submit', (req, res)=>{
    let id = req.body.email;
    let pass = req.body.password;
    // console.log(id);
    // console.log(pass);
    let err = {content: "Wrong Aryan Id or Password", title: "Error"};
    let sub = { content: "Successfully Signed In", title: "Signed In"};
    if (id === 'aryan@aryan.com' && pass === 'aryan') {
        res.status(200).render('submit.pug', sub);
    }

    else{
        res.render('error.pug', err);
    }
})

app.post('/contact', (req, res)=>{
    let Client_name = req.body.Client_name;
    let contact_no1 = req.body.contact_no1;
    let contact_no2 = req.body.contact_no2;
    let help = req.body.help;
    let Issue = req.body.Issue;
    let email = req.body.client_email;

    let OutPutToBeWritten = `The name of the Client is '${Client_name}', the first contact number of the Client is '${contact_no1}', the second contact number of the Client is '${contact_no2}', the help he is for asking is '${help}', the email of the Client is '${email}' and the Issue of the Client is '${Issue}'. \n \n`;

    fs.appendFileSync('complaints.txt', OutPutToBeWritten, "UTF-8",{'flags': 'a+'});
    let PugFileToBeSend = {
        title: "Application Aryan Official",
        content: "Your form has been submitted Successfully, We will Contact you soon..."
    }
    res.status(200).render('contact.pug', PugFileToBeSend);
})

app.listen(port,  ()=>{
    console.log(`The Website has been successfully Started on port ${port}`);
    console.log(`The Website has been successfully Started on host ${localhost}`);
})