const express = require("express");
require("dotenv").config();
const cors = require('cors')

const app = express();
const port = process.env.PORT;

//Database
const database = require("./config/database");
database.connect();

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        code: 200,
        message: "Trang chủ"
    })
})

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