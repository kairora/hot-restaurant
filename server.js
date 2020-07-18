// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App and Heroku port

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up array variables

const tableArr = [
    {
        name: "",
        email: "",
        phone: "",
        id: ""
    }
];

const waitArr = [
    {
        name: "",
        email: "",
        phone: "",
        id: ""
    }
];




// HTML GET Requests

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/tables.html"))
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/reservations.html"))
});

// API GET requests

app.get("/api/tables", function(req, res) {
    return res.json(tableArr);
})

app.get("/api/reservations", function(req, res) {
    return res.json(waitArr);
})

// API POST requests

app.post("/api/tables", function (req, res) {

    var newTable = req.body;
    
    if (tableArr < 5) {
        tableArr.push(newTable);
        res.json(true);
    } else {
        waitArr.push(newTable);
        res.json(false);
    }
})

















// Starts the server to begin listening

app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});