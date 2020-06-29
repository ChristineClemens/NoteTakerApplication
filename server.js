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

//* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {

});


//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {

});

//* DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("api/notes/:id", function (req, res) {

});