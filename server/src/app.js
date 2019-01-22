const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookmarksController = require('./controllers/bookmarksController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send("Bookmarks REST API");
});

app.use('/bookmarks', bookmarksController);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Application started on http://localhost:${port}`))
