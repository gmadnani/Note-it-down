const fs = require("fs");

const router = require('express').Router();

router.get("/notes", (req, res) => {

        let data = JSON.parse(fs.readFileSync("./db/db.json"));
        res.json(data);
});

module.exports = router;
