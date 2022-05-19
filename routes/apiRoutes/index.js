


// THIS FILES GETS ALL THE NOTES, ADDS AND REMOVES NOTES


const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// this retrieves note DB 
router.get('/notes', (req, res) => {
    res.sendFile(path.join (__dirname, '../../db/db.json'));
});

// creates new note and id
router.post('/notes', (req, res) => {
    const dataBase = JSON.parse(fs.readFileSync('db/db.json'))

    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    dataBase.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dataBase))
});

// deletes the a note by id
router.delete('/notes/:id', (req, res) => {
    let dataBase = JSON.parse(fs.readFileSync('db/db.json'));

    let noteDelete = dataBase.filter(noteItem => noteItem.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(noteDelete))
    res.json(noteDelete)
});

module.exports = router;