


// this allows us to use file system
const fs = require('fs'); 
// this allows the dev to use file pathways
const path = require('path');
// this gets the notes array
const {notesDB} = require('./DataBase/db.json');

// this starts the server
const express = require('express');
// this is the port (access point of the server to the rest of the world)
const PORT = process.env.PORT || 3001;
const app = express();

// routes for the data to come through
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express middleware 
app.use(express.static('./'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// route middleware 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now ONLINE, listening to port ${PORT}`);
});