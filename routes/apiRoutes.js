const fs = require("fs");
const uuid = require('uuidv4');

const router = require('express').Router();

router.get("/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
     res.json(data);
});

router.post("/notes", (req, res) => {
    const note = req.body;
    note.id = uuid;
    let data = JSON.parse(fs.readFileSync("./db/db.json"));
    data.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
    res.json(data);
});

module.exports = router;
