const express = require('express');
const db = require('../models/bookmarks_db')

const router = express.Router();

router.get('/', (req, res)=> {
    db.getAllBookmarks((rows)=> {
        res.json(rows);
    })
});

router.post('/',(req, res)=> {
    db.createBookmark(req.body.url, ()=> {
        res.sendStatus(200);
    })
});

router.get('/:id', (req,res)=>{
    db.getBookmarkById(parseInt(req.params.id), (row) => {
        if(row) {
            res.json(row);
        } else {
            res.sendStatus(404);
        }
    })
});

router.delete('/:id', (req,res) => {
    db.deleteBookmark(parseInt(req.params.id))
    res.sendStatus(200);
});

module.exports = router;
