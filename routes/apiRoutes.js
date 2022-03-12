const fs = require("fs");
const uuid = require('uuid');

const router = require('express').Router();

router.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
     res.json(data);
});

router.post("/notes", (req, res) => {
    const note = req.body;
    note.id = uuid.v4();
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    data.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    res.json(data);
});

router.delete("/notes/:id", (req, res) => {
    ID = req.params.id.toString();
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    const updatedData = data.filter( note => note.id.toString() !== ID );
    fs.writeFileSync('./db/db.json', JSON.stringify(updatedData));
    res.json(updatedData);
})
module.exports = router;
