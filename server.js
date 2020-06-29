//Define required modules.
const express = require ("express");
const fs = require ("fs");

//Specify the web application framework.
const app = express();

//Specify the PORT used for this application.
const PORT = process.env.PORT || 8080;

//Setup to enable Express to handle data parsing.
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

//Add a listener to the specified port.
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});

//Restful API get request that returns notes.html.
app.get("/notes", function(req, res) {
    res.redirect("/notes.html")
});

//Restful API get request that returns index.html.
app.get("*", function(req, res) {
    res.redirect("/")
});