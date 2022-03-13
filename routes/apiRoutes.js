const fs = require("fs");
const uuid = require('uuid');

const router = require('express').Router();

//get the notes from the db to be displayed in the notes page 
router.get("/notes", (req, res) => {

    //reading what in the database and saving it locally
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
     res.json(data);
});

//saving th notes in the database
router.post("/notes", (req, res) => {
    
    //creating a json based on whats typed in the tile and body section
    const note = req.body;

    //creating a unique id
    note.id = uuid.v4();

    //reading what in the database and saving it locally
    let data = JSON.parse(fs.readFileSync("./db/db.json"));

    //adding the new not to the locally saving data
    data.push(note);

    //writing it to the db
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    res.json(data);
});

//deleting a note based on the id selected
router.delete("/notes/:id", (req, res) => {

    //extracting the id from the url
    ID = req.params.id.toString();

    //reading what in the database and saving it locally
    let data = JSON.parse(fs.readFileSync("./db/db.json"));

    //filtering the locally saved data to not the id's data
    const updatedData = data.filter( note => note.id.toString() !== ID );

    //writing it to the db
    fs.writeFileSync('./db/db.json', JSON.stringify(updatedData));
    res.json(updatedData);
})
module.exports = router;
