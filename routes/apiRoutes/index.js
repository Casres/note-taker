// THIS FILES GETS ALL THE NOTES, ADDS AND REMOVES NOTES

const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// this retrieves note DB
router.get("/notes", (req, res) => {
//   res.fs.readFileSync(path.join(__dirname, "../../DataBase/db.json"));
  res.json(JSON.parse(fs.readFileSync("DataBase/db.json")));
});

// creates new note and id
router.post("/notes", (req, res) => {
  const dataBase = JSON.parse(fs.readFileSync("DataBase/db.json"));

  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dataBase.push(newNote);
  fs.writeFileSync("DataBase/db.json", JSON.stringify(dataBase));
  res.json(dataBase);
});

// deletes the a note by id
router.delete("/notes/:id", (req, res) => {
  let dataBase = JSON.parse(fs.readFileSync("DataBase/db.json"));

  let noteDelete = dataBase.filter((noteItem) => noteItem.id !== req.params.id);

  fs.writeFileSync("DataBase/db.json", JSON.stringify(noteDelete));
  res.json(noteDelete);
});

module.exports = router;
