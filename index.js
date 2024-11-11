const express = require("express");
const app = express();

require("dotenv").config();

//Database
const database = require("./config/database");
database.connect();

const port = process.env.PORT;

const Song = require("./model/song.model")
app.get('/songs', async (req, res) => {
    const songs = await Song.find({});

    res.json({
        code: 200,
        songs: songs
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});