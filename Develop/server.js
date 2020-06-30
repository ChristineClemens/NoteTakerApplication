//Define required modules.
const express = require ("express");
const fs = require ("fs");

//Specify the web application framework.
const app = express();

//Specify the PORT used for this application.
const PORT = 8080;

//Setup to enable Express to handle data parsing.
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

//Specify a required path.
var notesInput = require("./db/db.json");



//Add a listener to the specified port.
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});



//Restful API get request that returns notes.html.
app.get("/notes", function(req, res) {
    res.send("notes.html")
});

//Restful API get request that returns index.html.
app.get("*", function(req, res) {
    res.send("index.html")
});

//Restful API get request that cycles through iterable note entries and assigns each a unique id.
app.get("/api/notes", function(req, res) {
    for (const [id,note] of notesInput.entries()){
        note.id = id + 1
    }
    saveEntry(res)
});

//Restful API post request that pushes a new note entry to the request body.
app.post("/api/notes", function(req, res) {
    notesInput.push(req.body)
    saveEntry(res)
});

//Restful API delete request that separates saved notes to remove a single entry and its id.
app.delete("api/notes/:id", function (req, res) {
    notesInput.splice(req.params.id -1, 1)
    saveEntry(res)
});



//Function that stringifies note data and writes it to the ./db/db.json database.
function saveEntry(req, res) {
    fs.writeFileSync("./db/db.json", JSON.stringify(notesInput))
    res.send(notesData)
} 
