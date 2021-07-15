const express = require("express");
const path = require("path");
const app = express();
const port = 2000;
const fs = require("fs");
const { listenerCount } = require("events");
// const localhost = '127.0.0.1';

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.status(200).render("home.pug");
});

app.get("/contact", (req, res) => {
    res.status(200).render("contact.pug");
});

app.post("/contact", (req, res) => {
    let Client_name = req.body.Client_name;
    let contact_no1 = req.body.contact_no1;
    let contact_no2 = req.body.contact_no2;
    let help = req.body.help;
    let Issue = req.body.Issue;
    let email = req.body.client_email;

    let OutPutToBeWritten = `The name of the Client is '${Client_name}', the first contact number of the Client is '${contact_no1}', the second contact number of the Client is '${contact_no2}', The help Client is asking for is '${help}', the email of the Client is '${email}' and the Issue of the Client is '${Issue}'. \n \n`;

    if (
        Client_name == "" ||
        contact_no1 == "" ||
        contact_no2 == "" ||
        help == "" ||
        Issue == "" ||
        email == ""
    ) {

        let msg = {
            title: "Error",
            content: "Wrong Inputs, All fields are required",
        };
        res.status(404).render("error.pug", msg);
    } else {
        fs.appendFileSync("complaints.txt", OutPutToBeWritten, "UTF-8", { 'flags': 'a+' });
        let PugFileToBeSend = {
            title: "Contact Us - ProgrammingWithAAO.com",
            content:
                "Your form has been submitted Successfully, We will Contact you soon...",
        };
        res.status(200).render("submit.pug", PugFileToBeSend);
    }
});

app.get('/enroll', (req, res) => {
    res.status(200).render("enroll.pug");
})

app.post('/enroll', (req, res) => {
    let student_name = req.body.Student;
    let contact_no1 = req.body.contact_no1;
    let contact_no2 = req.body.contact_no2;
    let Student_email = req.body.Student_email;
    let mother = req.body.mother_name;
    let father = req.body.father_name;
    let msg = {
        title: "Enroll - ProgrammingWithAAO.com",
        content: "Student has been successfully Enrolled, We will contact you soon..."
    }
    let err = {
        title: "Error",
        content: "Wrong Inputs, All fields are required"
    }
    let OutPutToBeWritten = `The name of the Student is ${student_name}, the father's name of the Student is ${father}, the mother's name of the Student is ${mother}, the contact no. 1 of the Student is ${contact_no1}, the second contact no. of the Student is ${contact_no2}, the email of the Student is ${Student_email} \n \n`;

    if (
        student_name == "" ||
        contact_no1 == "" ||
        contact_no2 == "" ||
        Student_email == "" ||
        mother == "" ||
        father == ""
    ) {
        res.status(400).render('enroll-error.pug', err);
    }

    else {
        fs.appendFileSync('enrolledstudents.txt', OutPutToBeWritten, "UTF-8", { 'flags': 'a+' });
        res.status(200).render('enroll-submit.pug', msg);
        // console.log(OutPutToBeWritten);
    }
})

app.get("/courses", (req, res) => {
    res.status(200).render("courses.pug");
});

app.get('*', (req, res) => {
    res.status(404).render('notfound.pug');
})

app.listen(port, () => {
    console.log(`Website has been successfully started on port ${port}`);
});
